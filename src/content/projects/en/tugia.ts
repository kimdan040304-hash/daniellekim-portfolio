import tugia0 from "../../../assets/images/projects/tugia/tugia-0.png";
import tugiaDashboard from "../../../assets/images/projects/tugia/tugia-1-dashboard.png";
import tugiaContentAnalysis from "../../../assets/images/projects/tugia/tugia-2-content-analysis.png";
import tugiaPostDatabase from "../../../assets/images/projects/tugia/tugia-3-post-database.png";
import tugia2 from "../../../assets/images/projects/tugia/tugia-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Tứ Gia Co., Ltd.",
  theme: "light",
  tags: ["marketing", "content"],
  description:
    "Led marketing for an imported beer business in Ho Chi Minh City, combining organic content, paid social and website execution. Planned the content calendar, ran paid campaigns on Meta and TikTok Ads with hands-on budget management, and built the brand's WordPress website. Campaigns generated 400K+ reach and 7K+ engagements.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tugia0,
        alt: "Tứ Gia Co., Ltd. WordPress website",
        caption: "Brand website and landing page built on WordPress",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugiaDashboard,
        alt: "Facebook performance dashboard",
        caption: "Performance dashboard: 1,225 posts, 473K views, 8.73% average engagement rate",
        fit: "natural",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugiaContentAnalysis,
        alt: "Content performance analysis",
        caption: "Content performance by pillar, format, organic vs paid, call to action and month",
        fit: "natural",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugiaPostDatabase,
        alt: "Post database with AI classification",
        caption: "Post database: every post logged with format, content pillar, CTA and hashtags",
        fit: "natural",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugia2,
        alt: "Facebook Ads campaign performance",
        caption: "Paid campaign performance on Facebook Ads",
      },
    },
  ],
} as const satisfies ProjectContent;
