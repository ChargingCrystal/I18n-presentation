<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })
const price = 1234.50
const date = new Date('2026-11-24T00:00:00Z')

const languages = [
  { code: 'de-DE', label: 'Deutsch (DE)' },
  { code: 'en-US', label: 'English (US)' },
  { code: 'tr-TR', label: 'Türkçe (TR)' },
]

function switchLocale(code) {
  locale.value = code
  document.documentElement.lang = code
  document.title = t('page')
}
</script>

<template>
  <header>
    <span>{{ $t('page') }}</span>
    <nav :aria-label="$t('language')">
      <button
        v-for="language in languages"
        :key="language.code"
        type="button"
        :lang="language.code"
        :aria-pressed="locale === language.code"
        @click="switchLocale(language.code)"
      >
        {{ language.label }}
      </button>
    </nav>
  </header>

  <main>
    <h1>{{ $t('heading') }}</h1>
    <time datetime="2026-11-24">{{ $d(date, 'long') }}</time>
    <p>{{ $n(price, 'ticketPrice') }}</p>
  </main>
</template>
