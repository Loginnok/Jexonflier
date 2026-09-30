# VYRA

Interactive airline-ticket portfolio concept by Jexonflier. Vanilla HTML, CSS and JavaScript; deployed as a subdirectory of the existing GitHub Pages portfolio.

All flights, schedules and prices are demonstration data. The site does not call a booking API, create reservations, collect passenger details or take payments. Favorites and saved route plans stay in the visitor's browser. Browser storage failure falls back to the current page session.

## Local preview and checks

From the repository root:

```sh
python -m http.server 8768
node --check vyra/app.js
node --check script.js
node --test vyra/tests/logic.test.mjs
```

Open `http://127.0.0.1:8768/vyra/`.

The eight tests cover city aliases, date/query validation, deterministic demonstration fares, passenger and cabin totals, transfers, filters/sorting and malformed stored data.

## Assets

- Hero: AI-generated image created specifically for this project, optimized as `assets/hero.jpg`.
- Destination photography: Unsplash image IDs `photo-1524231757912-21f4fe3a7200`, `photo-1537996194471-e657df975ab4`, `photo-1512453979798-5ea266f8880c`, `photo-1552832230-c0197dd311b5`. Images are served locally.
- Fonts: Onest and Manrope via Google Fonts, with system fallbacks.
- Icons and portfolio cover: inline SVG.

Respect `prefers-reduced-motion`; the footer also provides a persistent animation toggle.
