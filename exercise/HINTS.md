# Hints for the localization exercise

Try the task first. If you get stuck, start with the first hint for that task and read further as needed.

## 1. Translate the heading

1. In `main.js`, find the English entry under `messages`. Use its structure for your chosen locale.
2. In `App.vue`, look at how the header gets its text through Vue I18n. Use the same approach for the heading in `<h1>`. Which key matches that text?

## 2. Localize the date

1. In `main.js`, locate `datetimeFormats` and check how English registers the named format `long`. Register the same format for your locale.
2. In `App.vue`, find the date variable and the `<time>` element. Use the date function from the live demo to display the date inside that element. Keep its `datetime` attribute.

## 3. Add a language option

1. In `App.vue`, find the `languages` array and compare the fields in the English entry.
2. The button comes from the list. If it appears but the text or date is wrong, check that the same locale code is used in `languages`, `messages`, and `datetimeFormats`.

## 4. Format the ticket price

1. Compare numberFormats with datetimeFormats. Each locale can have an entry that maps a format name such as ticketPrice to an options object. Use { style: 'currency', currency: 'EUR' } as the options.
2. Find the existing paragraph with €1,234.50 in App.vue. Replace its text with an interpolation. The $n function works like $d here. Pass the numeric amount first and the name of the registered format second.

The existing locale switcher also updates $n. The format’s EUR option sets the currency. Locale-specific separators and symbol placement come from the active locale.
