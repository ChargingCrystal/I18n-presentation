import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'

const long = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }

const ticketPrice = { style: 'currency', currency: 'EUR' }

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en-US',
  messages: {
    'de-DE': { page: 'Terminseite', heading: 'Kommende Termine', language: 'Sprache' },
    'en-US': { page: 'Event page', heading: 'Upcoming events', language: 'Language' },
    'tr-TR': { page: 'Etkinlikler', heading: 'Yaklaşan etkinlikler', language: 'Dil' },
  },
  numberFormats: {
    'en-US': { ticketPrice },
    'de-DE': { ticketPrice },
    'tr-TR': { ticketPrice },
  },
  datetimeFormats: {
    'de-DE': { long },
    'en-US': { long },
    'tr-TR': { long },
  },
})

createApp(App).use(i18n).mount('#app')
