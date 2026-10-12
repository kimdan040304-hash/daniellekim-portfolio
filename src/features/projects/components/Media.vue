<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watchEffect } from "vue";
import gsap from "gsap";
import Notch from "../../../components/Notch.vue";
import Plus from "../../../components/icons/Plus.vue";
import { lenis } from "../../../composables/useScroll";

const wrapperRef = ref<HTMLDivElement | null>(null);
const mediaRef = ref<HTMLVideoElement | HTMLImageElement | null>(null);
const mediaContentRef = ref<HTMLDivElement | null>(null);
const isMounted = ref(false);
const viewerOpen = ref(false);

export interface Props {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  index: number;
  fit?: "natural";
}

const props = defineProps<Props>();

const wrapperClasses = computed(() => {
  return {
    "project-media": true,
    "project-media-natural": props.fit === "natural",
  };
});

const openViewer = () => {
  if (props.fit !== "natural" || props.type !== "image") return;
  viewerOpen.value = true;
};

const closeViewer = () => {
  viewerOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeViewer();
  }
};

watchEffect((onInvalidate) => {
  if (!viewerOpen.value) return;

  lenis.value?.stop();
  window.addEventListener("keydown", handleKeydown);

  onInvalidate(() => {
    lenis.value?.start();
    window.removeEventListener("keydown", handleKeydown);
  });
});

onBeforeUnmount(() => {
  if (viewerOpen.value) {
    lenis.value?.start();
  }
  window.removeEventListener("keydown", handleKeydown);
});

watchEffect(async (onInvalidate) => {
  if (!wrapperRef.value) {
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.value,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reset",
    },
  });
  tl.fromTo(mediaContentRef.value, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  tl.fromTo(mediaRef.value, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);

  onInvalidate(() => {
    tl.kill();
    gsap.set(mediaContentRef.value, { scale: 1 });
    gsap.set(mediaRef.value, { scale: 1 });
  });
});

onMounted(async () => {
  isMounted.value = true;
});
</script>

<template>
  <div :class="wrapperClasses" ref="wrapperRef">
    <div class="project-media-content" ref="mediaContentRef">
      <img
        v-if="props.type === 'image'"
        :src="props.src"
        :alt="props.alt"
        loading="lazy"
        fetchpriority="high"
        class="project-media-image"
        :class="{ 'project-media-image-natural': props.fit === 'natural' }"
        ref="mediaRef"
        @click="openViewer"
      />
      <video
        v-else
        :src="props.src"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        class="project-media-video"
        ref="mediaRef"
      >
        <source :src="props.src" type="video/mp4" />
      </video>
    </div>
    <div class="project-media-caption" v-if="props.caption">
      <Notch class="project-media-caption-notch project-media-caption-notch-left" />
      <Notch class="project-media-caption-notch project-media-caption-notch-top" />
      <p class="project-media-caption-copy">{{ props.caption }}</p>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="viewerOpen" class="project-media-viewer" @click.self="closeViewer">
      <button
        type="button"
        class="project-media-viewer-close"
        :aria-label="'Close'"
        @click="closeViewer"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <Plus class="project-media-viewer-close-icon" />
      </button>
      <div class="project-media-viewer-scroll">
        <img :src="props.src" :alt="props.alt" class="project-media-viewer-image" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.project-media {
  width: 100%;
  height: 100%;
  grid-column: 1 / 13;
  max-width: 900px;
  justify-self: center;
  position: relative;
  aspect-ratio: 16 / 9;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
  }

  &-caption {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-background-400);
    padding: var(--space-xxs) var(--space-sm);
    border-radius: var(--radius-md) 0 0 0;

    @include mixins.mq("md") {
      padding: var(--space-xxs) var(--space-sm);
    }

    @include mixins.mq("lg") {
      padding: var(--space-xs) var(--space-md);
      border-radius: var(--radius-lg) 0 0 0;
    }

    &-notch {
      position: absolute;
      color: var(--color-background-400);
      --icon-color: var(--color-background-400);
      width: var(--radius-md);

      @include mixins.mq("md") {
        width: var(--radius-lg);
      }

      &-left {
        left: 0;
        bottom: 0;
        transform: translate(-100%, 0) scale(-1) rotate(90deg);
      }

      &-top {
        top: 0;
        right: 0;
        transform: translate(0, -100%) scale(-1) rotate(90deg);
      }
    }

    &-copy {
      font-size: var(--font-size-sm);
      font-weight: 700;

      @include mixins.mq("md") {
        font-size: var(--font-size-md);
      }
    }
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-natural {
      cursor: zoom-in;
    }
  }

  &-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-content {
    overflow: hidden;
    border-radius: var(--radius-lg);
    background-color: var(--color-background-300);
    width: 100%;
    height: 100%;
  }
}

.project-media-natural {
  aspect-ratio: auto;
  max-width: 900px;

  @include mixins.mq("md") {
    max-width: 1200px;
  }

  .project-media-content {
    height: auto;
  }

  .project-media-image {
    height: auto;
    object-fit: contain;
  }
}

.project-media-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.92);

  &-scroll {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: pinch-zoom pan-x pan-y;
  }

  &-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    margin: auto;
  }

  &-close {
    position: fixed;
    top: var(--space-md);
    right: var(--space-md);
    z-index: 1;
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

    @include mixins.mq("md") {
      top: var(--space-lg);
      right: var(--space-lg);
    }

    &-icon {
      width: 18px;
      transform: rotate(45deg);
    }
  }
}
</style>
