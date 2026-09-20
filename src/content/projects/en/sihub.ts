import sihub0 from "../../../assets/images/projects/sihub/sihub-0.jpg";
import sihub1 from "../../../assets/images/projects/sihub/sihub-1.png";
import sihub2 from "../../../assets/images/projects/sihub/sihub-2.jpg";
import sihub3 from "../../../assets/images/projects/sihub/sihub-3.jpg";
import sihub4 from "../../../assets/images/projects/sihub/sihub-4.png";
import sihub5 from "../../../assets/images/projects/sihub/sihub-5.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Startup & Innovation Hub of HCMC (SIHUB)",
  theme: "light",
  tags: ["content", "events"],
  description:
    "Supported end-to-end communication for SIHUB's innovation and startup events, owning pre-event content planning across 18+ programs — from the Startup Connection & Exhibition (3,000+ registrations, 7,000+ visitors) to major initiatives like the AI of Vietnam Summit and the Canva × HCMC Department of Science & Technology partnership.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sihub0,
        alt: "SIHUB x Canva MOU Signing Ceremony",
        caption: "SIHUB × Canva MOU Signing Ceremony, Dec 2025",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub1,
        alt: "Austrian - Vietnamese Startup & Innovation Exchange",
        caption: "Austrian – Vietnamese Startup & Innovation Exchange",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub2,
        alt: "Content performance insights",
        caption: "497K+ views, +130% growth in 30 days",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub3,
        alt: "SIHUB event",
        caption: "Full house at the Austrian – Vietnamese Startup & Innovation Exchange, HCMC",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub4,
        alt: "Content output list across SIHUB events",
        caption: "Content output across 18+ SIHUB events",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub5,
        alt: "Multi-event communication list",
        caption: "Multi-event communication: Investor Meetup, Founder Meetup, AI Summit...",
      },
    },
  ],
} as const satisfies ProjectContent;
