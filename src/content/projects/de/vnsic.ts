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
    "Aufbau und Umsetzung des Social-Content-Plans der Veranstaltung über die Phasen Pre-Event, Live und Recap, mit einem Follower-Wachstum auf 1.000+ innerhalb von zwei Monaten, 400K+ Reichweite und 2K+ Interaktionen. Abstimmung mit einer Student Ambassador zur Content-Richtung und Berichterstattung für das Abschlussevent mit 2.000+ Teilnehmenden.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic0,
        alt: "Einladungs- und Countdown-Visuals",
        caption: "Einladungs- und Countdown-Visuals - gestaltet mit Canva & KI",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic1,
        alt: "Finale in der Trịnh-Công-Sơn-Halle, Van Lang University",
        caption: "Finale in der Trịnh-Công-Sơn-Halle, Van Lang University - 2.000+ Teilnehmende",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic2,
        alt: "Content-Performance-Insights",
        caption: "Content-Performance: bis zu +3.742% Wachstum bei Views in Kampagnen-Peaks",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic3,
        alt: "KPI- und Content-Pillar-Planung",
        caption: "KPI- und Content-Pillar-Planung über 4 Kampagnenphasen",
      },
    },
  ],
} as const satisfies ProjectContent;
