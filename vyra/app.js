/* VYRA is a portfolio demo. No reservations, payments, or live fares are requested. */
(() => {
  'use strict';

  const AIRPORTS = Object.freeze({
    MOW: { city: 'Москва', lat: 55.75, lon: 37.62, aliases: ['moscow', 'мск', 'svo', 'dme', 'vko'], base: 12900 },
    LED: { city: 'Санкт-Петербург', lat: 59.93, lon: 30.32, aliases: ['петербург', 'санкт петербург', 'спб', 'saint petersburg'], base: 11900 },
    IST: { city: 'Стамбул', lat: 41.01, lon: 28.98, aliases: ['istanbul'], base: 12900 },
    DPS: { city: 'Бали', lat: -8.65, lon: 115.22, aliases: ['bali', 'денпасар', 'denpasar'], base: 48900 },
    DXB: { city: 'Дубай', lat: 25.20, lon: 55.27, aliases: ['dubai'], base: 24900 },
    FCO: { city: 'Рим', lat: 41.90, lon: 12.50, aliases: ['rome', 'roma'], base: 28900 },
    AER: { city: 'Сочи', lat: 43.60, lon: 39.73, aliases: ['sochi', 'адлер'], base: 7900 },
    TBS: { city: 'Тбилиси', lat: 41.72, lon: 44.83, aliases: ['tbilisi'], base: 17900 },
    PAR: { city: 'Париж', lat: 48.86, lon: 2.35, aliases: ['paris', 'cdg', 'ory'], base: 32900 },
    TYO: { city: 'Токио', lat: 35.68, lon: 139.65, aliases: ['tokyo', 'nrt', 'hnd'], base: 58900 },
    BKK: { city: 'Бангкок', lat: 13.76, lon: 100.50, aliases: ['bangkok'], base: 42900 },
    KZN: { city: 'Казань', lat: 55.80, lon: 49.11, aliases: ['kazan'], base: 6900 }
  });
  const FAVORITE_CODES = ['IST', 'DPS', 'DXB', 'FCO'];
  const STORAGE = { favorites: 'vyra:favorites:v1', trips: 'vyra:trips:v1', motion: 'vyra:motion:v1' };
  const normalize = value => typeof value === 'string' ? value.trim().toLocaleLowerCase('ru-RU').replace(/ё/g, 'е') : '';
  const airportCode = value => Object.keys(AIRPORTS).find(code => code.toLowerCase() === normalize(value) || normalize(AIRPORTS[code].city) === normalize(value) || AIRPORTS[code].aliases.includes(normalize(value))) || '';
  const dateString = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const addDays = (date, days) => { const next = new Date(date); next.setDate(next.getDate() + days); return dateString(next); };
  const isDate = value => {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const parsed = new Date(`${value}T12:00:00`);
    return Number.isFinite(parsed.getTime()) && dateString(parsed) === value;
  };
  const cleanQuery = (input, allowPast = false, today = dateString(new Date())) => {
    if (!input || typeof input !== 'object' || typeof input.origin !== 'string' || typeof input.destination !== 'string') return null;
    if (typeof input.passengers !== 'string' && typeof input.passengers !== 'number') return null;
    const origin = airportCode(input.origin), destination = airportCode(input.destination);
    const passengers = Number(input.passengers);
    if (!origin || !destination || origin === destination || !isDate(input.departDate)) return null;
    if (!allowPast && input.departDate < today) return null;
    if (!['round', 'oneway'].includes(input.trip) || !['economy', 'business'].includes(input.cabin)) return null;
    if (!Number.isInteger(passengers) || passengers < 1 || passengers > 6) return null;
    if (input.trip === 'round' && (!isDate(input.returnDate) || input.returnDate < input.departDate)) return null;
    return { origin, destination, departDate: input.departDate, returnDate: input.trip === 'round' ? input.returnDate : '', passengers, cabin: input.cabin, trip: input.trip };
  };
  const hash = value => { let result = 2166136261; for (const char of value) result = Math.imul(result ^ char.charCodeAt(0), 16777619); return result >>> 0; };
  const queryKey = query => [query.origin, query.destination, query.departDate, query.returnDate, query.passengers, query.cabin, query.trip].join('|');
  const distance = (from, to) => {
    const rad = value => value * Math.PI / 180;
    const a = Math.sin(rad(to.lat - from.lat) / 2) ** 2 + Math.cos(rad(from.lat)) * Math.cos(rad(to.lat)) * Math.sin(rad(to.lon - from.lon) / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };
  const demoFlights = query => {
    const seed = hash(`${query.origin}|${query.destination}|${query.departDate}|${query.returnDate}`);
    const km = distance(AIRPORTS[query.origin], AIRPORTS[query.destination]);
    const russian = ['MOW', 'LED', 'AER', 'KZN'];
    const european = ['FCO', 'PAR'];
    const requiresTransfer = km > 7200 || (russian.includes(query.origin) && european.includes(query.destination)) || (russian.includes(query.destination) && european.includes(query.origin));
    const base = query.origin === 'MOW' ? AIRPORTS[query.destination].base : Math.round((4900 + km * 3.9) / 100) * 100;
    const routePrice = base + (seed % 7) * 400;
    const returnMultiplier = query.trip === 'round' ? 1.84 + (seed % 4) * 0.03 : 1;
    const cabinMultiplier = query.cabin === 'business' ? 2.8 : 1;
    return Array.from({ length: 4 }, (_, index) => {
      const stops = requiresTransfer || index === 1 || index === 3 ? 1 : 0;
      const baggage = index > 1 || query.cabin === 'business';
      const perPerson = Math.round((routePrice + index * 1800 + (baggage ? 2200 : 0)) * returnMultiplier * cabinMultiplier / 100) * 100;
      const duration = Math.round((45 + km / 740 * 60 + (stops ? 150 + index * 35 : index * 10)) / 5) * 5;
      const departure = 420 + index * 185 + (seed % 4) * 15;
      return { id: `demo-${index + 1}`, name: stops ? 'VYRA Connect' : 'VYRA Air', stops, baggage, duration, departure, arrival: departure + duration, perPerson, total: perPerson * query.passengers };
    });
  };
  const filterFlights = (flights, direct, baggage, sort) => flights.filter(flight => (!direct || flight.stops === 0) && (!baggage || flight.baggage)).sort((a, b) => sort === 'duration' ? a.duration - b.duration || a.total - b.total : a.total - b.total || a.duration - b.duration);
  const cleanFavorites = value => Array.isArray(value) ? [...new Set(value.filter(code => typeof code === 'string' && FAVORITE_CODES.includes(code)))].slice(0, 4) : [];
  const cleanTrips = value => {
    if (!Array.isArray(value)) return [];
    const keys = new Set();
    return value.slice(0, 100).flatMap(item => {
      if (!item || typeof item !== 'object') return [];
      const query = cleanQuery(item.query, true);
      if (!query || typeof item.flightId !== 'string' || !/^demo-[1-4]$/.test(item.flightId)) return [];
      const key = `${queryKey(query)}|${item.flightId}`;
      if (keys.has(key)) return [];
      keys.add(key);
      return [{ key, query, flightId: item.flightId }];
    }).slice(0, 30);
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = { AIRPORTS, airportCode, dateString, addDays, isDate, cleanQuery, queryKey, demoFlights, filterFlights, cleanFavorites, cleanTrips };
  if (typeof document === 'undefined') return;

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const money = value => `${new Intl.NumberFormat('ru-RU').format(value)} ₽`;
  const prettyDate = value => new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(new Date(`${value}T12:00:00`));
  const durationText = minutes => `${Math.floor(minutes / 60)} ч${minutes % 60 ? ` ${minutes % 60} мин` : ''}`;
  const timeText = minutes => `${String(Math.floor(minutes / 60) % 24).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
  const paxText = count => `${count} ${count === 1 ? 'пассажир' : count < 5 ? 'пассажира' : 'пассажиров'}`;
  const element = (tag, className = '', text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
  const icon = name => { const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('aria-hidden', 'true'); const use = document.createElementNS('http://www.w3.org/2000/svg', 'use'); use.setAttribute('href', `#i-${name}`); svg.append(use); return svg; };
  const button = (text, className, action, value) => { const node = element('button', className, text); node.type = 'button'; if (action) node.dataset[action] = value; return node; };
  let storageAvailable = true;
  const readStorage = (key, fallback) => { try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); } catch { storageAvailable = false; return fallback; } };
  const writeStorage = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { storageAvailable = false; return false; } };
  const state = { trip: 'round', favorites: cleanFavorites(readStorage(STORAGE.favorites, [])), trips: cleanTrips(readStorage(STORAGE.trips, [])), category: 'all', favoritesOnly: false, query: null, flights: [], selected: null, searchSequence: 0 };
  let toastTimeout;
  const toast = message => { clearTimeout(toastTimeout); $('#toast').textContent = message; $('#toast').classList.add('is-visible'); toastTimeout = setTimeout(() => $('#toast').classList.remove('is-visible'), 4500); };
  const scrollTo = node => node.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'auto', block: 'start' });
  const today = () => dateString(new Date());
  $('#year').textContent = new Date().getFullYear();
  $('#departDate').value = addDays(new Date(), 14);
  $('#returnDate').value = addDays(new Date(), 21);
  const updateDates = () => {
    $('#departDate').min = today();
    $('#returnDate').min = isDate($('#departDate').value) ? $('#departDate').value : today();
    if (isDate($('#departDate').value) && (!isDate($('#returnDate').value) || $('#returnDate').value < $('#departDate').value)) $('#returnDate').value = addDays(new Date(`${$('#departDate').value}T12:00:00`), 7);
  };
  updateDates();
  $('#departDate').addEventListener('change', updateDates);
  const setTrip = value => {
    state.trip = value;
    $$('[data-trip]').forEach(node => { const active = node.dataset.trip === value; node.classList.toggle('active', active); node.setAttribute('aria-pressed', String(active)); });
    const isRound = value === 'round';
    $('#returnField').hidden = !isRound;
    $('.date-divider').hidden = !isRound;
    $('#returnDate').disabled = !isRound;
    $('#returnDate').required = isRound;
    updateDates();
  };
  $$('[data-trip]').forEach(node => node.addEventListener('click', () => setTrip(node.dataset.trip)));
  const updateCodes = () => {
    ['origin', 'destination'].forEach(name => { $(`#${name}Code`).textContent = airportCode($(`#${name}`).value) || '···'; });
    $('#searchError').hidden = true;
  };
  ['origin', 'destination'].forEach(name => $(`#${name}`).addEventListener('input', updateCodes));
  $('#swapButton').addEventListener('click', () => { const value = $('#origin').value; $('#origin').value = $('#destination').value; $('#destination').value = value; updateCodes(); $('#origin').focus(); });
  const readQuery = () => cleanQuery({ origin: $('#origin').value, destination: $('#destination').value, departDate: $('#departDate').value, returnDate: $('#returnDate').value, passengers: $('#passengers').value, cabin: $('#cabin').value, trip: state.trip });
  const showError = message => { $('#searchError').textContent = message; $('#searchError').hidden = false; };
  const routeSummary = query => `${AIRPORTS[query.origin].city} → ${AIRPORTS[query.destination].city}`;
  const detailsSummary = query => `${prettyDate(query.departDate)}${query.trip === 'round' ? ` — ${prettyDate(query.returnDate)}` : ''} · ${paxText(query.passengers)} · ${query.cabin === 'business' ? 'бизнес' : 'эконом'}${query.trip === 'round' ? ' · туда и обратно' : ' · в одну сторону'}`;
  const makeEmpty = (title, copy) => { const box = element('div', 'empty-state'); box.append(element('h3', '', title), element('p', '', copy)); return box; };
  const renderResults = () => {
    const container = $('#flightResults');
    container.replaceChildren();
    const flights = filterFlights(state.flights, $('#directOnly').checked, $('#baggageOnly').checked, $('#sortFlights').value);
    if (!flights.length) {
      const empty = makeEmpty('Для этих фильтров рейсов нет', 'Попробуйте варианты с пересадкой или без дополнительного багажа.');
      empty.append(button('Сбросить фильтры', 'text-button filter-reset', 'resetFilters', 'true'));
      container.append(empty);
      return;
    }
    flights.forEach(flight => {
      const card = element('article', 'flight-card');
      const airline = element('div', 'flight-airline');
      const airlineText = element('div'); airlineText.append(element('b', '', flight.name), element('small', '', 'Демонстрационный рейс'));
      airline.append(element('span', 'airline-logo', '↗'), airlineText);
      const timeline = element('div', 'flight-timeline');
      const from = element('div', 'flight-point'); from.append(element('strong', '', timeText(flight.departure)), element('small', '', `${state.query.origin} · ${prettyDate(state.query.departDate)}`));
      const line = element('div', 'flight-line'); line.append(element('span', '', durationText(flight.duration)), icon('plane'), element('small', '', flight.stops ? '1 пересадка' : 'Без пересадок'));
      const to = element('div', 'flight-point'); to.append(element('strong', '', `${timeText(flight.arrival)}${flight.arrival >= 1440 ? ` +${Math.floor(flight.arrival / 1440)}` : ''}`), element('small', '', state.query.destination));
      timeline.append(from, line, to);
      const tags = element('div', 'flight-tags');
      tags.append(element('span', '', 'Ручная кладь 8 кг'), element('span', '', flight.baggage ? 'Багаж 23 кг' : 'Без багажа'), element('span', '', 'Время условное'));
      const price = element('div', 'flight-price');
      const select = button('Выбрать рейс', 'button', 'selectFlight', flight.id); select.setAttribute('aria-label', `Выбрать ${flight.name}, ${money(flight.total)}`); select.append(icon('arrow'));
      price.append(element('strong', '', money(flight.total)), element('small', '', `За ${state.query.passengers === 1 ? '1 пассажира' : 'всех пассажиров'}${state.query.trip === 'round' ? ' · туда-обратно' : ''}`), select);
      card.append(airline, timeline, price, tags);
      container.append(card);
    });
  };
  const search = event => {
    if (event) event.preventDefault();
    $('#searchError').hidden = true;
    updateDates();
    if (!$('#flightForm').reportValidity()) return;
    if (!airportCode($('#origin').value) || !airportCode($('#destination').value)) { showError('Выберите город из подсказок или введите его трёхбуквенный код.'); return; }
    if (airportCode($('#origin').value) === airportCode($('#destination').value)) { showError('Выберите разные города вылета и прилёта.'); return; }
    const query = readQuery();
    if (!query) { showError('Проверьте даты: вылет не раньше сегодня, возвращение не раньше вылета.'); return; }
    $('#origin').value = AIRPORTS[query.origin].city;
    $('#destination').value = AIRPORTS[query.destination].city;
    updateCodes();
    const sequence = ++state.searchSequence;
    state.query = query;
    state.flights = [];
    $('#results').hidden = false;
    $('#results').setAttribute('aria-busy', 'true');
    $('#resultsTitle').textContent = routeSummary(query);
    $('#resultsSubtitle').textContent = detailsSummary(query);
    $('#searchButton').disabled = true;
    $('#searchButton span').textContent = 'Подбираем рейсы';
    const loading = element('div', 'results-loading'); loading.append(element('span', 'loading-orbit', '↗'), element('p', '', 'Ваше следующее приключение уже близко…'));
    $('#flightResults').replaceChildren(loading);
    scrollTo($('#results'));
    setTimeout(() => {
      if (sequence !== state.searchSequence) return;
      state.flights = demoFlights(query);
      renderResults();
      $('#results').setAttribute('aria-busy', 'false');
      $('#searchButton').disabled = false;
      $('#searchButton span').textContent = 'Найти билеты';
    }, motionEnabled ? 750 : 120);
  };
  $('#flightForm').addEventListener('submit', search);
  ['directOnly', 'baggageOnly', 'sortFlights'].forEach(id => $(`#${id}`).addEventListener('change', () => { if (state.flights.length) renderResults(); }));
  $('#closeResults').addEventListener('click', () => { state.searchSequence++; $('#results').hidden = true; $('#results').setAttribute('aria-busy', 'false'); $('#searchButton').disabled = false; $('#searchButton span').textContent = 'Найти билеты'; scrollTo($('#search')); $('#searchButton').focus({ preventScroll: true }); });
  const explore = (code, autoSearch) => {
    if (!AIRPORTS[code]) return;
    if (autoSearch || airportCode($('#origin').value) === code) $('#origin').value = 'Москва';
    $('#destination').value = AIRPORTS[code].city;
    if (autoSearch) { setTrip('oneway'); $('#directOnly').checked = false; $('#baggageOnly').checked = false; }
    updateCodes();
    if (autoSearch) search(); else { scrollTo($('#search')); $('#departDate').focus({ preventScroll: true }); toast(`Направление выбрано: ${AIRPORTS[code].city}`); }
  };

  const favoriteExit = button('Показать все направления', 'text-button filter-reset', 'exitFavorites', 'true');
  favoriteExit.hidden = true;
  $('.destination-tabs').after(favoriteExit);
  const renderFavorites = () => {
    $$('[data-favorite]').forEach(node => { const saved = state.favorites.includes(node.dataset.favorite); node.classList.toggle('active', saved); node.setAttribute('aria-pressed', String(saved)); node.setAttribute('aria-label', `${saved ? 'Убрать из избранного' : 'Добавить в избранное'}: ${AIRPORTS[node.dataset.favorite].city}`); });
    $('#favoritesCount').textContent = state.favorites.length;
    $('#favoritesCount').hidden = state.favorites.length === 0;
    $('#favoritesButton').setAttribute('aria-pressed', String(state.favoritesOnly));
    $('#favoritesButton').classList.toggle('active', state.favoritesOnly);
    $('#favoritesButton').setAttribute('aria-label', state.favoritesOnly ? 'Показать все направления' : `Избранные направления: ${state.favorites.length}`);
    favoriteExit.hidden = !state.favoritesOnly;
    let visible = 0;
    $$('.destination-card').forEach(card => { const show = (state.category === 'all' || state.category === card.dataset.category) && (!state.favoritesOnly || state.favorites.includes(card.dataset.code)); card.hidden = !show; if (show) visible++; });
    $('#emptyFavorites').hidden = visible > 0;
    $('#emptyFavorites').textContent = state.favorites.length ? 'В этой категории нет избранных направлений. Выберите «Все» или вернитесь ко всем направлениям.' : 'Пока здесь пусто. Вернитесь ко всем направлениям и нажмите на сердечко любимого города.';
  };
  $('#favoritesButton').addEventListener('click', () => { state.favoritesOnly = !state.favoritesOnly; state.category = 'all'; $$('[data-category]').filter(node => node.tagName === 'BUTTON').forEach(node => { const active = node.dataset.category === 'all'; node.classList.toggle('active', active); node.setAttribute('aria-pressed', String(active)); }); renderFavorites(); scrollTo($('#destinations')); });
  $$('.destination-tabs button').forEach(node => node.addEventListener('click', () => { state.category = node.dataset.category; $$('.destination-tabs button').forEach(tab => { const active = tab === node; tab.classList.toggle('active', active); tab.setAttribute('aria-pressed', String(active)); }); renderFavorites(); }));
  const openDialog = id => { const dialog = $(`#${id}`); if (!dialog.open) dialog.showModal(); document.body.classList.add('dialog-open'); };
  const closeDialog = id => { $(`#${id}`).close(); };
  $$('dialog').forEach(dialog => { dialog.addEventListener('close', () => { if (!$$('dialog').some(node => node.open)) document.body.classList.remove('dialog-open'); }); dialog.addEventListener('click', event => { if (event.target !== dialog) return; const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); }); });
  const showBooking = (query, flightId) => {
    const flight = demoFlights(query).find(item => item.id === flightId);
    if (!flight) return;
    state.selected = { query: { ...query }, flightId, key: `${queryKey(query)}|${flightId}` };
    const content = $('#bookingContent'); content.replaceChildren();
    const title = element('h2', '', 'Следующая остановка — впечатления.'); title.id = 'bookingTitle';
    content.append(element('p', 'eyebrow', 'ВАШ ДЕМОНСТРАЦИОННЫЙ МАРШРУТ'), title, element('p', 'booking-route', routeSummary(query)), element('p', 'results-subtitle', detailsSummary(query)));
    const summary = element('div', 'booking-summary'), list = element('dl');
    const rows = [['Вылет', `${prettyDate(query.departDate)} · ${timeText(flight.departure)}`], ['В пути туда', `${durationText(flight.duration)} · ${flight.stops ? '1 пересадка' : 'без пересадок'}`], ['Ручная кладь', '8 кг на пассажира'], ['Багаж', flight.baggage ? '23 кг на пассажира' : 'Не включён'], [query.trip === 'round' ? 'На человека, туда и обратно' : 'На человека, в одну сторону', money(flight.perPerson)], ['Пассажиры', String(query.passengers)], ['Итого', money(flight.total)]];
    if (query.trip === 'round') rows.splice(1, 0, ['Возвращение', prettyDate(query.returnDate)]);
    rows.forEach(([label, value]) => { const row = element('div'); row.append(element('dt', '', label), element('dd', '', value)); list.append(row); });
    summary.append(list); content.append(summary);
    content.append(element('p', 'demo-info', 'Рейсы, расписание и цены демонстрационные. Время условное, без учёта часовых поясов. Сохранение маршрута не создаёт бронирование.'));
    const alreadySaved = state.trips.some(item => item.key === state.selected.key);
    const save = button(alreadySaved ? 'Маршрут уже в моих поездках' : 'Сохранить маршрут', 'button', 'saveTrip', 'true'); save.disabled = alreadySaved; save.append(icon(alreadySaved ? 'check' : 'heart')); content.append(save);
    content.append(element('p', 'dialog-footnote', 'Без оплаты, регистрации и персональных данных.'));
    openDialog('bookingDialog');
  };
  const renderTrips = () => {
    const content = $('#savedTrips'); content.replaceChildren();
    if (!state.trips.length) { const empty = makeEmpty('Мир ждёт. Начнём планировать?', 'Выберите демонстрационный рейс и сохраните маршрут — он появится здесь.'); empty.append(button('Найти направление', 'button', 'startPlanning', 'true')); content.append(empty); return; }
    state.trips.forEach((trip, index) => {
      const flight = demoFlights(trip.query).find(item => item.id === trip.flightId);
      const card = element('article', 'saved-trip'), description = element('div');
      description.append(element('h3', '', routeSummary(trip.query)), element('p', '', detailsSummary(trip.query)), element('small', '', `${money(flight.total)} · демонстрационный маршрут${trip.query.departDate < today() ? ' · дата прошла' : ''}`));
      const remove = button('Удалить', 'text-button', 'removeTrip', String(index)); remove.setAttribute('aria-label', `Удалить маршрут ${routeSummary(trip.query)}`);
      card.append(description, remove); content.append(card);
    });
    $('.trips-dialog .dialog-footnote').textContent = storageAvailable ? 'Сохранено только в этом браузере. Это планы поездок, не билеты.' : 'Хранилище браузера недоступно. Планы сохраняются только до закрытия страницы.';
  };
  $('#tripsButton').addEventListener('click', () => { renderTrips(); openDialog('tripsDialog'); });
  document.addEventListener('click', event => {
    const target = event.target.closest('button'); if (!target) return;
    if (target.dataset.close) closeDialog(target.dataset.close);
    if (target.dataset.quick) explore(target.dataset.quick, false);
    if (target.dataset.explore) explore(target.dataset.explore, true);
    if (target.dataset.favorite) {
      const code = target.dataset.favorite;
      if (!FAVORITE_CODES.includes(code)) return;
      const existed = state.favorites.includes(code);
      state.favorites = existed ? state.favorites.filter(item => item !== code) : [...state.favorites, code];
      const persisted = writeStorage(STORAGE.favorites, state.favorites);
      renderFavorites();
      toast(persisted ? existed ? 'Направление убрано из избранного' : `${AIRPORTS[code].city} теперь в избранном` : 'Избранное доступно в этой вкладке. Хранилище браузера недоступно.');
    }
    if (target.dataset.exitFavorites) { state.favoritesOnly = false; renderFavorites(); }
    if (target.dataset.resetFilters) { $('#directOnly').checked = false; $('#baggageOnly').checked = false; renderResults(); }
    if (target.dataset.selectFlight && state.query) showBooking(state.query, target.dataset.selectFlight);
    if (target.dataset.saveTrip && state.selected) {
      if (state.trips.some(item => item.key === state.selected.key)) return;
      if (state.trips.length >= 30) { toast('Сохранено 30 маршрутов. Удалите ненужный в «Моих поездках».'); return; }
      state.trips.unshift({ ...state.selected });
      const persisted = writeStorage(STORAGE.trips, state.trips);
      target.textContent = 'Маршрут сохранён'; target.append(icon('check')); target.disabled = true;
      toast(persisted ? 'Маршрут сохранён в «Моих поездках». Это план, не билет.' : 'Маршрут сохранён до закрытия страницы: хранилище недоступно.');
    }
    if (target.dataset.removeTrip !== undefined) { const index = Number(target.dataset.removeTrip); if (!Number.isInteger(index) || index < 0 || index >= state.trips.length) return; state.trips.splice(index, 1); writeStorage(STORAGE.trips, state.trips); renderTrips(); toast('Маршрут удалён'); }
    if (target.dataset.startPlanning) { closeDialog('tripsDialog'); scrollTo($('#search')); $('#destination').focus({ preventScroll: true }); }
  });
  renderFavorites();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  let motionChoice = readStorage(STORAGE.motion, null);
  if (motionChoice !== 'on' && motionChoice !== 'off') motionChoice = null;
  let motionEnabled = motionChoice ? motionChoice === 'on' : !reducedMotion.matches;
  const applyMotion = () => {
    document.documentElement.classList.toggle('motion-off', !motionEnabled);
    $('#motionToggle').setAttribute('aria-pressed', String(motionEnabled));
    $('#motionToggle').replaceChildren(document.createTextNode(`Анимации: ${motionEnabled ? 'вкл' : 'выкл'} `), element('span', '', '↻'));
    if (!motionEnabled) { $$('.reveal').forEach(node => node.classList.add('is-visible')); $('#heroImage').style.setProperty('--parallax-y', '0px'); $('#boardingPass').style.setProperty('--tilt-x', '0deg'); $('#boardingPass').style.setProperty('--tilt-y', '0deg'); }
  };
  applyMotion();
  $('#motionToggle').addEventListener('click', () => { motionEnabled = !motionEnabled; motionChoice = motionEnabled ? 'on' : 'off'; writeStorage(STORAGE.motion, motionChoice); applyMotion(); });
  reducedMotion.addEventListener('change', () => { if (motionChoice === null) { motionEnabled = !reducedMotion.matches; applyMotion(); } });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    $$('.reveal').forEach(node => observer.observe(node));
    document.documentElement.classList.add('js-ready');
  } else $$('.reveal').forEach(node => node.classList.add('is-visible'));
  let scrollPending = false;
  window.addEventListener('scroll', () => {
    if (!motionEnabled || !finePointer.matches || scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => { scrollPending = false; if (!motionEnabled) return; const top = $('.hero').getBoundingClientRect().top; if (top > -$('.hero').offsetHeight && top < innerHeight) $('#heroImage').style.setProperty('--parallax-y', `${Math.max(-30, Math.min(65, -top * 0.11))}px`); });
  }, { passive: true });
  const ticket = $('#boardingPass');
  ticket.addEventListener('pointermove', event => { if (!motionEnabled || !finePointer.matches) return; const rect = ticket.getBoundingClientRect(); ticket.style.setProperty('--tilt-x', `${-((event.clientY - rect.top) / rect.height - 0.5) * 9}deg`); ticket.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - 0.5) * 12}deg`); });
  ticket.addEventListener('pointerleave', () => { ticket.style.setProperty('--tilt-x', '0deg'); ticket.style.setProperty('--tilt-y', '0deg'); });
})();
