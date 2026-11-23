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
  },
  datetimeFormats: {
    'en-US': { long },
  },
})

createApp(App).use(i18n).mount('#app')
