import lab0 from "../../../assets/images/projects/003lab/003lab-0.png";
import lab1 from "../../../assets/images/projects/003lab/003lab-1.png";
import lab2 from "../../../assets/images/projects/003lab/003lab-2.png";
import lab3 from "../../../assets/images/projects/003lab/003lab-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "003Lab",
  theme: "light",
  tags: ["content"],
  description:
    "Entwicklung von Social-Content für drei Sprachlern-Produkte in Thailand, Taiwan, Japan, Korea, den USA und Vietnam, mit Fokus auf marktspezifisches Zielgruppenverhalten statt einer einzigen globalen Content-Richtung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: lab0,
        alt: "003Lab Sprachlern-Produkte",
        caption: "3 Sprachlern-Produkte: Dot Speak, Viet Lens, Korea Lens",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab1,
        alt: "Content-Performance-Übersicht",
        caption: "Organische Reichweite eines betreuten Accounts in einem Monat: 500K+ Views (+126,8%)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab2,
        alt: "Virale Posts in verschiedenen Märkten",
        caption: "Virale Hooks für Zielgruppen in Thailand, Taiwan & den USA auf Threads",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab3,
        alt: "Wöchentlicher Performance-Tracker",
        caption: "Wöchentliches Performance-Tracking in 5 Märkten: Thailand, Korea, Taiwan, USA, Indonesien",
      },
    },
  ],
} as const satisfies ProjectContent;
