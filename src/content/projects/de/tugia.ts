import tugia0 from "../../../assets/images/projects/tugia/tugia-0.png";
import tugia1 from "../../../assets/images/projects/tugia/tugia-1.png";
import tugia2 from "../../../assets/images/projects/tugia/tugia-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Tứ Gia Beer",
  theme: "light",
  tags: ["marketing", "content"],
  description:
    "Mitgründung und Leitung des Marketings für ein Importbier-Unternehmen in Ho-Chi-Minh-Stadt, mit organischem Content, bezahlten Social-Ads und Website-Umsetzung. Planung des Content-Kalenders, Durchführung bezahlter Kampagnen auf Meta und TikTok Ads inklusive Budgetverwaltung, sowie Aufbau der WordPress-Website der Marke. Die Kampagnen erzielten 400K+ Reichweite und 7K+ Interaktionen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tugia0,
        alt: "Tứ Gia Beer WordPress-Website",
        caption: "Markenwebsite und Landingpage, umgesetzt mit WordPress",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugia1,
        alt: "Content-Kalender",
        caption: "Content-Kalender zur Koordination eines 5-köpfigen Content- und Design-Teams",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugia2,
        alt: "Facebook-Ads-Kampagnenperformance",
        caption: "Performance der bezahlten Kampagne auf Facebook Ads",
      },
    },
  ],
} as const satisfies ProjectContent;
