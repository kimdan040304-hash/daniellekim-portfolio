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
    "Developed social content for three language learning products across Thailand, Taiwan, Japan, Korea, the US and Vietnam, with a focus on market specific audience behavior rather than one global content direction.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: lab0,
        alt: "003Lab language-learning products",
        caption: "3 language-learning products: Dot Speak, Viet Lens, Korea Lens",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab1,
        alt: "Content performance snapshot",
        caption: "One managed account's organic reach in a single month: 500K+ views (+126.8%)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab2,
        alt: "Viral posts across markets",
        caption: "Viral hooks across Thailand, Taiwan & US audiences on Threads",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab3,
        alt: "Weekly performance tracker",
        caption: "Weekly performance tracking across 5 markets: Thailand, Korea, Taiwan, US, Indonesia",
      },
    },
  ],
} as const satisfies ProjectContent;
