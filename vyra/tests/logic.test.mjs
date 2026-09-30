import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { airportCode, addDays, isDate, cleanQuery, demoFlights, filterFlights, cleanFavorites, cleanTrips, queryKey } = require('../app.js');
const input = { origin: 'Москва', destination: 'Стамбул', departDate: '2026-11-14', returnDate: '2026-11-21', passengers: '2', cabin: 'economy', trip: 'round' };
const query = cleanQuery(input, false, '2026-10-01');

test('airport names, aliases, and codes resolve; arbitrary values are rejected', () => {
  assert.equal(airportCode(' москва '), 'MOW');
  assert.equal(airportCode('IST'), 'IST');
  assert.equal(airportCode('spb'), '');
  assert.equal(airportCode('спб'), 'LED');
  assert.equal(airportCode('CDG'), 'PAR');
  assert.equal(airportCode('<script>alert(1)</script>'), '');
  assert.equal(airportCode({ toString: null }), '');
});
test('calendar validation handles leap days, rollover, and impossible dates', () => {
  assert.equal(isDate('2028-02-29'), true);
  assert.equal(isDate('2027-02-29'), false);
  assert.equal(isDate('2026-04-31'), false);
  assert.equal(isDate('2026-1-1'), false);
  assert.equal(addDays(new Date(2026, 11, 25, 12), 14), '2027-01-08');
});
test('query validation rejects same airport, past or reversed dates, unknown cabin and invalid pax', () => {
  assert.equal(query.origin, 'MOW');
  assert.equal(query.passengers, 2);
  for (const change of [{ destination: 'MOW' }, { origin: 'unknown' }, { departDate: '2026-09-30' }, { returnDate: '2026-11-13' }, { passengers: 7 }, { passengers: 1.5 }, { passengers: { valueOf: 9 } }, { cabin: 'first' }, { origin: { toString: null } }]) {
    assert.equal(cleanQuery({ ...input, ...change }, false, '2026-10-01'), null);
  }
  const oneWay = cleanQuery({ ...input, trip: 'oneway', returnDate: '' }, false, '2026-10-01');
  assert.equal(oneWay.returnDate, '');
  assert.ok(cleanQuery({ ...input, departDate: '2025-01-01' }, true));
});
test('demo routes are deterministic and fares reflect passengers, cabin, dates and both directions', () => {
  const flights = demoFlights(query);
  assert.deepEqual(demoFlights(query), flights);
  assert.equal(flights.length, 4);
  for (const flight of flights) assert.equal(flight.total, flight.perPerson * query.passengers);
  assert.equal(demoFlights({ ...query, passengers: 1 })[0].total * 2, flights[0].total);
  assert.ok(demoFlights({ ...query, trip: 'oneway', returnDate: '' })[0].total < flights[0].total);
  assert.ok(demoFlights({ ...query, cabin: 'business' })[0].total > flights[0].total);
  assert.ok(demoFlights({ ...query, cabin: 'business' }).every(flight => flight.baggage));
  const variants = Array.from({ length: 8 }, (_, index) => demoFlights({ ...query, departDate: `2026-11-${String(index + 14).padStart(2, '0')}` })[0].total);
  assert.ok(new Set(variants).size > 1);
});
test('Russian routes to Rome or Paris never suggest a direct demo option', () => {
  for (const [origin, destination] of [['MOW', 'FCO'], ['LED', 'PAR'], ['PAR', 'MOW'], ['FCO', 'KZN']]) {
    const flights = demoFlights({ ...query, origin, destination });
    assert.ok(flights.every(flight => flight.stops === 1));
    assert.deepEqual(filterFlights(flights, true, false, 'price'), []);
  }
});
test('filters combine correctly, sorting does not mutate underlying search results', () => {
  const flights = demoFlights(query), before = JSON.stringify(flights);
  const selected = filterFlights(flights, true, true, 'price');
  assert.ok(selected.length > 0);
  assert.ok(selected.every(flight => flight.stops === 0 && flight.baggage));
  const byDuration = filterFlights(flights, false, false, 'duration');
  assert.ok(byDuration.every((flight, index) => index === 0 || flight.duration >= byDuration[index - 1].duration));
  assert.equal(JSON.stringify(flights), before);
});
test('favorites sanitize unknown codes, markup, objects, and duplicates', () => {
  assert.deepEqual(cleanFavorites(['IST', 'IST', 'FAKE', { code: 'DXB' }, 'DPS', '<img>']), ['IST', 'DPS']);
  assert.deepEqual(cleanFavorites(null), []);
});
test('saved trips reconstruct trusted data, deduplicate, and reject corrupted storage', () => {
  const saved = { query: input, flightId: 'demo-1', key: 'untrusted', price: -1, name: '<script>' };
  const badValues = [null, 'bad', { query: input, flightId: { toString: 'x' } }, { query: { ...input, passengers: {} }, flightId: 'demo-2' }, { query: { ...input, origin: { toString: null } }, flightId: 'demo-2' }, { query: input, flightId: 'demo-999' }];
  const cleaned = cleanTrips([saved, saved, ...badValues]);
  assert.equal(cleaned.length, 1);
  assert.deepEqual(cleaned[0], { key: `${queryKey(query)}|demo-1`, query, flightId: 'demo-1' });
  assert.deepEqual(cleanTrips({}), []);
  assert.equal(cleanTrips(Array.from({ length: 50 }, (_, index) => ({ query: { ...input, departDate: `2027-${String(Math.floor(index / 28) + 1).padStart(2, '0')}-${String(index % 28 + 1).padStart(2, '0')}`, trip: 'oneway' }, flightId: 'demo-1' }))).length, 30);
});
