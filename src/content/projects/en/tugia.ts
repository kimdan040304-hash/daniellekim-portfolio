import tugia0 from "../../../assets/images/projects/tugia/tugia-0.png";
import tugia1 from "../../../assets/images/projects/tugia/tugia-1.png";
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
        src: tugia1,
        alt: "Content calendar",
        caption: "Content calendar coordinating a 5-person content and design team",
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
