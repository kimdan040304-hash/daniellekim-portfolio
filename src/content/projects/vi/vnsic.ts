import vnsic0 from "../../../assets/images/projects/vnsic/vnsic-0.png";
import vnsic1 from "../../../assets/images/projects/vnsic/vnsic-1.png";
import vnsic2 from "../../../assets/images/projects/vnsic/vnsic-2.png";
import vnsic3 from "../../../assets/images/projects/vnsic/vnsic-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Vietnam Swiss Innovation Challenge 2025",
  theme: "light",
  tags: ["content", "events"],
  description:
    "Xây dựng và triển khai kế hoạch content cho sự kiện ở cả ba giai đoạn trước, trong và sau sự kiện, đưa lượng người theo dõi vượt 1.000 trong hai tháng, với 400K+ lượt tiếp cận và 2K+ lượt tương tác. Phối hợp cùng đại sứ sinh viên để định hướng nội dung và thực hiện content cho đêm chung kết với hơn 2.000 khán giả.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic0,
        alt: "Hình ảnh thư mời và đếm ngược sự kiện",
        caption: "Hình ảnh thư mời và đếm ngược sự kiện, thiết kế bằng Canva và AI",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic1,
        alt: "Vòng chung kết tại Hội trường Trịnh Công Sơn, Đại học Văn Lang",
        caption: "Vòng chung kết tại Hội trường Trịnh Công Sơn, Đại học Văn Lang, hơn 2.000 khán giả",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic2,
        alt: "Số liệu hiệu suất nội dung",
        caption: "Hiệu suất nội dung: lượt xem tăng tới +3.742% vào các đỉnh chiến dịch",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vnsic3,
        alt: "Kế hoạch KPI và trụ cột nội dung",
        caption: "Kế hoạch KPI và các trụ cột nội dung qua 4 giai đoạn chiến dịch",
      },
    },
  ],
} as const satisfies ProjectContent;
