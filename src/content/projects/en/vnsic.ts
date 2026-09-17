import vnsic0 from "../../../assets/images/projects/vnsic/vnsic-0.png";
import vnsic1 from "../../../assets/images/projects/vnsic/vnsic-1.png";
import vnsic2 from "../../../assets/images/projects/vnsic/vnsic-2.png";
import vnsic3 from "../../../assets/images/projects/vnsic/vnsic-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Vietnam Swiss Innovation Challenge 2025",
  theme: "light",
  tags: ["content", "events"],
  description:
    "Built and ran the event's social content plan across pre-event, live and recap stages, growing followers to 1,000+ within two months with 400K+ reach and 2K+ engagements. Coordinated with a student ambassador on content direction and produced coverage for the closing event of 2,000+ attendees.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic0,
        alt: "Event invitation and countdown visuals",
        caption: "Event invitation and countdown visuals - designed with Canva & AI",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic1,
        alt: "Final Round at Trịnh Công Sơn Hall, Van Lang University",
        caption: "Final Round at Trịnh Công Sơn Hall, Van Lang University - 2,000+ attendees",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic2,
        alt: "Content performance insights",
        caption: "Content performance: up to +3,742% growth in views during campaign peaks",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic3,
        alt: "KPI and content pillar planning",
        caption: "KPI and content pillar planning across 4 campaign phases",
      },
    },
  ],
} as const satisfies ProjectContent;
