import thumbnailSihub from "../../../assets/thumbnails/sihub.jpg";
import thumbnail003Lab from "../../../assets/thumbnails/003lab.png";
import thumbnailGokstad from "../../../assets/thumbnails/gokstad.jpg";
import thumbnailTuGia from "../../../assets/thumbnails/tugia.png";
import thumbnailVnsic from "../../../assets/thumbnails/vnsic.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "SIHUB",
    slug: "sihub",
    thumbnail: thumbnailSihub,
    description: "Content & Events im Startup-Ökosystem",
  },
  {
    title: "003Lab",
    slug: "003lab",
    thumbnail: thumbnail003Lab,
    description: "Sprachlern-Apps Content in 5 Märkten",
  },
  {
    title: "Gokstad Academy × Norwegian Consulate",
    slug: "gokstad",
    thumbnail: thumbnailGokstad,
    description: "Visuelle Identität für einen internationalen Workshop",
  },
  {
    title: "Tứ Gia Beer",
    slug: "tugia",
    thumbnail: thumbnailTuGia,
    description: "Marketing als Mitgründerin einer Importbier-Marke",
  },
  {
    title: "VNSIC 2025",
    slug: "vnsic",
    thumbnail: thumbnailVnsic,
    description: "Medien & Kommunikation für ein Event mit 2.000+ Teilnehmenden",
  },
] as const satisfies ProjectPreview[];
