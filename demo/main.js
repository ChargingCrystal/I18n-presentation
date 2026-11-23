import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'

const long = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en-US',
  messages: {
    'en-US': { page: 'Event page', heading: 'Upcoming events', language: 'Language' },
    //'en-GB': { page: 'Event page', heading: "What's on", language: 'Language' },
  },
  /*
  numberFormats: {
    'en-US': { ticketPrice: { style: 'currency', currency: 'EUR' } },
    'en-GB': { ticketPrice: { style: 'currency', currency: 'EUR', currencyDisplay: 'code' } },
  },
  */
  datetimeFormats: {
    'en-US': { long },
    //'en-GB': { long },
  },
})

createApp(App).use(i18n).mount('#app')
