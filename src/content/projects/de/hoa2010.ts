import hoa20100 from "../../../assets/images/projects/hoa2010/hoa2010-0.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "AI-Powered Social Listening: Hoa 20/10 Market Scan",
  theme: "light",
  tags: ["ai-training", "content"],
  live: "/hoa-2010-insight-map.html",
  liveLabel: "Vollständigen Report ansehen",
  source: "/hoa2010-training-hub.html",
  sourceLabel: "Trainingsmaterialien ansehen",
  description:
    "Konzeption und Durchführung einer KI-gestützten Marktforschungsübung für 200+ Studierende, die zeigt, wie sich 650 rohe Social-Posts mit Claude in eine strukturierte Preisstrategie, einen Wettbewerbs-Scan und konkrete Marktlücken verwandeln lassen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: hoa20100,
        alt: "Leitung eines KI-Trainings für 200+ Studierende",
        caption:
          "Leitung einer praxisnahen KI-Trainingseinheit für 200+ Studierende zur Nutzung von Claude in der Marktforschung",
      },
    },
  ],
} as const satisfies ProjectContent;
