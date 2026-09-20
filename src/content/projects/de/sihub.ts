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
    "Verantwortlich für die durchgängige Kommunikation der Innovations- und Startup-Events von SIHUB, inklusive Content-Planung vor über 18 Programmen — von der Startup Connection & Exhibition (3.000+ Anmeldungen, 7.000+ Besucher) bis zu großen Initiativen wie dem AI of Vietnam Summit und der Partnerschaft zwischen Canva und der HCMC Department of Science & Technology.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sihub0,
        alt: "SIHUB x Canva MOU Unterzeichnungszeremonie",
        caption: "SIHUB × Canva MOU Signing Ceremony, Dez 2025",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub1,
        alt: "Österreichisch-vietnamesischer Startup- und Innovationsaustausch",
        caption: "Austrian – Vietnamese Startup & Innovation Exchange",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub2,
        alt: "Content-Performance-Insights",
        caption: "497K+ Views, +130% Wachstum in 30 Tagen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub3,
        alt: "SIHUB Event",
        caption: "Volles Haus beim Austrian – Vietnamese Startup & Innovation Exchange, HCMC",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub4,
        alt: "Content-Übersicht über SIHUB-Events",
        caption: "Content-Output über 18+ SIHUB-Events",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub5,
        alt: "Übersicht Multi-Event-Kommunikation",
        caption: "Multi-Event-Kommunikation: Investor Meetup, Founder Meetup, AI Summit...",
      },
    },
  ],
} as const satisfies ProjectContent;
