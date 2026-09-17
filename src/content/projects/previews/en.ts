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
    description: "Startup ecosystem content & events",
  },
  {
    title: "003Lab",
    slug: "003lab",
    thumbnail: thumbnail003Lab,
    description: "Language-learning apps content across 5 markets",
  },
  {
    title: "Gokstad Academy × Norwegian Consulate",
    slug: "gokstad",
    thumbnail: thumbnailGokstad,
    description: "Visual identity for an international workshop",
  },
  {
    title: "Tứ Gia Beer",
    slug: "tugia",
    thumbnail: thumbnailTuGia,
    description: "Co-founder marketing for an imported beer brand",
  },
  {
    title: "VNSIC 2025",
    slug: "vnsic",
    thumbnail: thumbnailVnsic,
    description: "Media & communications for a 2,000+ attendee innovation event",
  },
] as const satisfies ProjectPreview[];
