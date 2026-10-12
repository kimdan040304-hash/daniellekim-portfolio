import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES, LOCALE_DEFAULT } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    const saved = window.localStorage.getItem("portfolio-locale");

    // Always start in the default locale unless the visitor has previously
    // made an explicit choice that is still a supported locale (an old
    // saved "de" from the removed German locale falls back to the default).
    locale.value = saved && saved in LOCALES ? (saved as Locale) : LOCALE_DEFAULT;
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);

    if (typeof document !== "undefined") {
      document.documentElement.lang = locale.value;
    }
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
