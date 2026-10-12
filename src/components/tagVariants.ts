import type { Locale } from "../i18n/types";

export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "content"
  | "events"
  | "design"
  | "marketing"
  | "ai-training";

// Technical tags are not localized — they're proper nouns / technology names.
const technicalLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const;

export const tagLabels = {
  en: {
    ...technicalLabels,
    content: "Content Strategy",
    events: "Events",
    design: "Product Team Lead",
    marketing: "Marketing Lead",
    "ai-training": "AI Training Facilitator",
  },
  vi: {
    ...technicalLabels,
    content: "Chiến lược content",
    events: "Sự kiện",
    design: "Trưởng nhóm sản phẩm",
    marketing: "Trưởng bộ phận Marketing",
    "ai-training": "Dẫn dắt workshop AI",
  },
} as const satisfies Record<Locale, Record<TagVariant, string>>;
