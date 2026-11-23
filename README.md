# Internationalization with Vue I18n

This repository contains the live demo and an exercise for the presentation on 24 November 2026.

## Start a project

Requires Node.js 22.12+ (or Node.js 20.19+ within the 20.x line).
Open a terminal in `demo/`, `exercise/`, or `exercise-solution/`, then run:

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. Each project starts independently.

## Files

- `demo/`: US English starter for the live demonstration. The additional UK English code is commented out; activate it during the talk.
- `exercise/`: your starting point, in US English.
- `exercise/HINTS.md`: optional help, organized by exercise step.
- `exercise-solution/`: completed reference with German and Turkish. Use it to check your result after trying the exercise.

## Exercise (20 minutes)

Choose **one** language: German (`de-DE`) or Turkish (`tr-TR`). The starter begins in US English. Work in `exercise/main.js` and `exercise/App.vue`.

1. **Heading:** Add a translation for your chosen locale and use Vue I18n to display the heading.
2. **Date:** Register the `long` date format for your locale and use the date formatter to display the existing date.
3. **Switcher:** Add your locale to the language selection and test the switch in both directions.
4. **Price:** Replace the static ticket price with a locale-formatted value. The underlying price is always **1234.50 EUR**. This is formatting, not conversion.

### Expected results

| Locale  | Heading              | Event date        | Ticket price (EUR) |
| ------- | -------------------- | ----------------- | ------------------ |
| `en-US` | Upcoming events      | November 24, 2026 | €1,234.50          |
| `de-DE` | Kommende Termine     | 24. November 2026 | 1.234,50 €         |
| `tr-TR` | Yaklaşan etkinlikler | 24 Kasım 2026     | €1.234,50          |

To localize the header as well, you can use these values in the translation data:

| Locale  | `page`      | `language` |
| ------- | ----------- | -----------|
| `de-DE` | Terminseite | Sprache    |
| `tr-TR` | Etkinlikler | Dil        |

`Intl` formatting can include locale-specific spaces, including non-breaking spaces.

If you get stuck, read `exercise/HINTS.md`, starting with the hint for your current task. Finish early? Try adding the other locale, too.
