import gokstad0 from "../../../assets/images/projects/gokstad/gokstad-0.jpg";
import gokstad1 from "../../../assets/images/projects/gokstad/gokstad-1.png";
import gokstad2 from "../../../assets/images/projects/gokstad/gokstad-2.png";
import gokstad3 from "../../../assets/images/projects/gokstad/gokstad-3.png";
import gokstad4 from "../../../assets/images/projects/gokstad/gokstad-4.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Gokstad Academy × Norwegian Consulate Workshop",
  theme: "light",
  tags: ["design", "events"],
  description:
    "Led visual communication for an international workshop at Van Lang University, attended by 200+ students with participation from Norwegian diplomatic and business stakeholders (Jotun, Carlsberg, SalMar, Ekko). Produced 20+ communication assets within one month.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad0,
        alt: "Event backdrop for the Nordic Perspectives workshop",
        caption: "Event backdrop: Nordic Perspectives workshop, Van Lang University",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad1,
        alt: "Panel discussion lineup",
        caption: "Panel discussion lineup: Norwegian Embassy, Innovation Norway, Jotun, Carlsberg, SalMar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad2,
        alt: "Norwegian Embassy feature post",
        caption: "Featured by the Norwegian Embassy in Hanoi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad3,
        alt: "Press coverage of the Vietnam-Norway partnership",
        caption: "Featured across multiple national news outlets covering the Vietnam-Norway partnership",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad4,
        alt: "Campaign performance insights",
        caption: "Page performance during the campaign: +17.2% visits, +25.7% followers",
      },
    },
  ],
} as const satisfies ProjectContent;
