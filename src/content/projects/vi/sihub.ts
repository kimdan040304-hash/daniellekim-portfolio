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
    "Hỗ trợ truyền thông trọn gói cho các sự kiện khởi nghiệp và đổi mới sáng tạo của SIHUB, phụ trách lên kế hoạch content trước sự kiện cho hơn 18 chương trình, từ Startup Connection & Exhibition (3.000+ lượt đăng ký, 7.000+ khách tham quan) đến các sáng kiến lớn như AI of Vietnam Summit và chương trình hợp tác giữa Canva với Sở Khoa học và Công nghệ TP.HCM.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sihub0,
        alt: "Lễ ký kết MOU giữa SIHUB và Canva",
        caption: "Lễ ký kết MOU giữa SIHUB và Canva, tháng 12/2025",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub1,
        alt: "Giao lưu Khởi nghiệp và Đổi mới sáng tạo Áo - Việt",
        caption: "Giao lưu Khởi nghiệp và Đổi mới sáng tạo Áo - Việt",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub2,
        alt: "Số liệu hiệu suất nội dung",
        caption: "497K+ lượt xem, tăng 130% trong 30 ngày",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub3,
        alt: "Sự kiện SIHUB",
        caption: "Kín chỗ tại buổi giao lưu Khởi nghiệp và Đổi mới sáng tạo Áo - Việt, TP.HCM",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub4,
        alt: "Danh sách sản phẩm nội dung tại các sự kiện SIHUB",
        caption: "Sản phẩm content tại hơn 18 sự kiện của SIHUB",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sihub5,
        alt: "Danh sách truyền thông đa sự kiện",
        caption: "Truyền thông đa sự kiện: Investor Meetup, Founder Meetup, AI Summit...",
      },
    },
  ],
} as const satisfies ProjectContent;
