import thumbnail003Lab from "../../../assets/thumbnails/003lab.png";
import thumbnailTuGia from "../../../assets/thumbnails/tugia.png";
import thumbnailSihub from "../../../assets/thumbnails/sihub.jpg";
import thumbnailGokstad from "../../../assets/thumbnails/gokstad.jpg";
import thumbnailVnsic from "../../../assets/thumbnails/vnsic.png";
import thumbnailHoa2010 from "../../../assets/thumbnails/hoa2010.jpeg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "003Lab",
    slug: "003lab",
    thumbnail: thumbnail003Lab,
    description: "Content cho ứng dụng học ngôn ngữ tại 5 thị trường",
  },
  {
    title: "Tứ Gia Co., Ltd.",
    slug: "tugia",
    thumbnail: thumbnailTuGia,
    description: "Phụ trách marketing cho thương hiệu bia nhập khẩu",
  },
  {
    title: "SIHUB",
    slug: "sihub",
    thumbnail: thumbnailSihub,
    description: "Content và sự kiện cho hệ sinh thái khởi nghiệp",
  },
  {
    title: "Nordic Perspectives Workshop",
    slug: "gokstad",
    thumbnail: thumbnailGokstad,
    description: "Thiết kế hình ảnh cho hội thảo quốc tế",
  },
  {
    title: "VNSIC 2025",
    slug: "vnsic",
    thumbnail: thumbnailVnsic,
    description: "Truyền thông cho sự kiện đổi mới sáng tạo hơn 2.000 khán giả",
  },
  {
    title: "Social Listening bằng AI: Khảo sát thị trường Hoa 20/10",
    slug: "hoa2010",
    thumbnail: thumbnailHoa2010,
    description: "Workshop nghiên cứu thị trường bằng AI cho hơn 200 sinh viên",
  },
] as const satisfies ProjectPreview[];
