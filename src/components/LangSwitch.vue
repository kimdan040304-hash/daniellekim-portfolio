<script setup lang="ts">
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { LOCALES } from "../i18n/constants";

import type { Locale } from "../i18n/types";

defineProps<{
  isDarkTheme?: boolean;
}>();

const localeKeys = Object.keys(LOCALES) as Locale[];

const handleSelect = (key: Locale) => {
  if (locale.value === key) return;
  changeLocale(key);
};
</script>

<template>
  <div class="lang-switch" :class="{ 'lang-switch-dark': isDarkTheme }" role="group" aria-label="Language">
    <button
      v-for="key in localeKeys"
      :key="key"
      type="button"
      class="lang-switch-option children-unclickable"
      :class="{ 'lang-switch-option-active': locale === key }"
      :aria-pressed="locale === key"
      :aria-label="LOCALES[key].name"
      @click="handleSelect(key)"
      data-cursor="circle-white"
      data-sound="click"
      data-hoversound="hover"
    >
      {{ key.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.lang-switch {
  display: flex;
  align-items: center;
  gap: 2px;
  border-radius: 100px;
  background-color: var(--color-grayscale-500);
  padding: 3px;
  height: 38px;

  &-dark {
    background-color: var(--color-dark-blue-500);
  }

  &-option {
    border: none;
    cursor: pointer;
    height: 100%;
    padding: 0 12px;
    border-radius: 100px;
    font-size: var(--font-size-sm);
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    background-color: transparent;
    color: var(--color-text-400);
    transition:
      background-color 0.15s ease-in-out,
      color 0.15s ease-in-out;

    .lang-switch-dark & {
      color: var(--color-white-400);
    }

    &-active {
      background-color: var(--color-accent-400, var(--color-orange-400));
      color: var(--color-accent-text-400, var(--color-white-400));

      .lang-switch-dark & {
        color: var(--color-accent-text-400, var(--color-white-400));
      }
    }
  }
}
</style>
