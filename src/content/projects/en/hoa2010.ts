import hoa20100 from "../../../assets/images/projects/hoa2010/hoa2010-0.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "AI-Powered Social Listening: Hoa 20/10 Market Scan",
  theme: "light",
  tags: ["ai-training", "content"],
  live: "/hoa-2010-insight-map.html",
  liveLabel: "View Full Report",
  source: "/hoa2010-training-hub.html",
  sourceLabel: "View Training Materials",
  description:
    "Designed and delivered an AI-powered market research exercise for 200+ students, demonstrating how to turn 650 raw social posts into a structured pricing strategy, competitor scan and actionable gaps using Claude.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: hoa20100,
        alt: "Leading an AI training session for 200+ students",
        caption: "Leading a hands-on AI training session for 200+ students on using Claude for market research",
      },
    },
  ],
} as const satisfies ProjectContent;
