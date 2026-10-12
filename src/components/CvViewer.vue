<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
import Plus from "./icons/Plus.vue";
import { t } from "../i18n/utils/translate";
import { lenis } from "../composables/useScroll";

import type { Props as ButtonWrapperProps } from "./ButtonWrapper.vue";

const CV_URL = "/Vo-Thi-Kim-Dan-CV.pdf";
const CV_FILENAME = "Vo-Thi-Kim-Dan-CV.pdf";
const DESKTOP_BREAKPOINT = 1024;

const props = defineProps<{
  variant?: ButtonWrapperProps["variant"];
  size?: "sm" | "md" | "lg";
  shortLabelOnMobile?: boolean;
}>();

const overlayOpen = ref(false);
const overlayRef = ref<HTMLDivElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);
let triggerEl: HTMLElement | null = null;
let keydownBound = false;

// The PDF iframe is intentionally excluded here: once focus moves into its
// content, keydown events no longer bubble to this window listener, so it
// can't be a reliable trap boundary. It stays reachable by Tab as normal.
const getFocusable = (): HTMLElement[] => {
  if (!overlayRef.value) return [];
  return Array.from(overlayRef.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'));
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeOverlay();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = getFocusable();
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!first || !last) return;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

const openOverlay = (event: MouseEvent) => {
  triggerEl = event.currentTarget as HTMLElement;
  overlayOpen.value = true;
  lenis.value?.stop();

  if (!keydownBound) {
    window.addEventListener("keydown", handleKeydown);
    keydownBound = true;
  }

  requestAnimationFrame(() => {
    closeButtonRef.value?.focus();
  });
};

const closeOverlay = () => {
  overlayOpen.value = false;
  lenis.value?.start();

  if (keydownBound) {
    window.removeEventListener("keydown", handleKeydown);
    keydownBound = false;
  }

  triggerEl?.focus();
  triggerEl = null;
};

const handleButtonClick = (event: MouseEvent) => {
  if (window.innerWidth >= DESKTOP_BREAKPOINT) {
    openOverlay(event);
  } else {
    window.open(CV_URL, "_blank", "noopener");
  }
};
</script>

<template>
  <Button
    v-bind="$attrs"
    renderAs="button"
    type="button"
    :variant="props.variant ?? 'border'"
    :size="props.size ?? 'md'"
    :aria-label="t('view-cv')"
    class="cv-trigger children-unclickable"
    :class="{ 'cv-trigger-short': props.shortLabelOnMobile }"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    @click="handleButtonClick"
  >
    <span class="cv-trigger-label-full">{{ t("view-cv") }}</span>
    <span v-if="props.shortLabelOnMobile" class="cv-trigger-label-short">CV</span>
  </Button>

  <Teleport to="body">
    <div v-if="overlayOpen" class="cv-overlay" ref="overlayRef" @click.self="closeOverlay">
      <div class="cv-overlay-panel" role="dialog" aria-modal="true" :aria-label="t('view-cv')">
        <div class="cv-overlay-toolbar">
          <a
            :href="CV_URL"
            :download="CV_FILENAME"
            class="cv-overlay-link"
            data-cursor="circle-white"
            data-sound="click"
            data-hoversound="hover"
            >{{ t("download-cv") }}</a
          >
          <a
            :href="CV_URL"
            target="_blank"
            rel="noopener"
            class="cv-overlay-link"
            data-cursor="circle-white"
            data-sound="click"
            data-hoversound="hover"
            >{{ t("open-in-new-tab") }}</a
          >
          <button
            type="button"
            class="cv-overlay-close"
            ref="closeButtonRef"
            :aria-label="t('close')"
            data-cursor="circle-white"
            data-sound="click"
            data-hoversound="hover"
            @click="closeOverlay"
          >
            <Plus class="cv-overlay-close-icon" />
          </button>
        </div>
        <iframe :src="`${CV_URL}#view=FitH`" class="cv-overlay-iframe" :title="t('view-cv')"></iframe>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.cv-trigger {
  display: flex;
  align-items: center;
  gap: 4px;

  &-label-short {
    display: none;
  }

  &-short {
    .cv-trigger-label-full {
      display: none;
    }

    .cv-trigger-label-short {
      display: inline;
    }

    @include mixins.mq("md") {
      .cv-trigger-label-full {
        display: inline;
      }

      .cv-trigger-label-short {
        display: none;
      }
    }
  }
}

.cv-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);

  &-panel {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &-toolbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-sm);
  }

  &-link {
    height: 38px;
    padding: 0 16px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    font-size: var(--font-size-sm);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    background-color: transparent;
    border: 2px solid var(--color-white-400);
    color: var(--color-white-400);
    cursor: pointer;
  }

  &-close {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white-400);
    color: var(--color-black-400);
    --icon-color: var(--color-black-400);
    cursor: pointer;
    flex-shrink: 0;

    &-icon {
      width: 18px;
      transform: rotate(45deg);
    }
  }

  &-iframe {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: var(--radius-lg);
    background-color: var(--color-white-400);
  }
}
</style>
