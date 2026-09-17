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
    "Leitung der visuellen Kommunikation für einen internationalen Workshop an der Van Lang University mit über 200 Studierenden und Beteiligung norwegischer Diplomatie- und Wirtschaftsvertreter (Jotun, Carlsberg, SalMar, Ekko). Erstellung von 20+ Kommunikationsmaterialien innerhalb eines Monats.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad0,
        alt: "Event-Backdrop für den Nordic Perspectives Workshop",
        caption: "Event-Backdrop: Nordic Perspectives Workshop, Van Lang University",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad1,
        alt: "Übersicht der Podiumsdiskussion",
        caption: "Podiumsdiskussion: Norwegische Botschaft, Innovation Norway, Jotun, Carlsberg, SalMar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad2,
        alt: "Beitrag der norwegischen Botschaft",
        caption: "Vorgestellt von der Norwegischen Botschaft in Hanoi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad3,
        alt: "Presseberichterstattung zur vietnamesisch-norwegischen Partnerschaft",
        caption: "In mehreren nationalen Medien zur vietnamesisch-norwegischen Partnerschaft vorgestellt",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad4,
        alt: "Kampagnen-Performance-Insights",
        caption: "Seiten-Performance während der Kampagne: +17,2% Besuche, +25,7% Follower",
      },
    },
  ],
} as const satisfies ProjectContent;
