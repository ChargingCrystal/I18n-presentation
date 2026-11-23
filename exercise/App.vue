<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })
const price = 1234.50
const date = new Date('2026-11-24T00:00:00Z')

const languages = [
  { code: 'en-US', label: 'English (US)' },
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
    <h1>Upcoming events</h1>
    <time datetime="2026-11-24">November 24, 2026</time>
    <p>€1,234.50</p>
  </main>
</template>
