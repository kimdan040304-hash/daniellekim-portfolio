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
    "Phát triển content mạng xã hội cho ba sản phẩm học ngôn ngữ tại Thái Lan, Đài Loan, Nhật Bản, Hàn Quốc, Mỹ và Việt Nam, bám sát hành vi riêng của từng thị trường thay vì dùng một hướng content chung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: lab0,
        alt: "Các sản phẩm học ngôn ngữ của 003Lab",
        caption: "3 sản phẩm học ngôn ngữ: Dot Speak, Viet Lens, Korea Lens",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab1,
        alt: "Ảnh chụp hiệu suất nội dung",
        caption: "Lượt tiếp cận tự nhiên của một tài khoản trong một tháng: 500K+ lượt xem (+126,8%)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab2,
        alt: "Các bài viral tại nhiều thị trường",
        caption: "Các hook viral tại Thái Lan, Đài Loan và Mỹ trên Threads",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: lab3,
        alt: "Bảng theo dõi hiệu suất hằng tuần",
        caption: "Theo dõi hiệu suất hằng tuần tại 5 thị trường: Thái Lan, Hàn Quốc, Đài Loan, Mỹ, Indonesia",
      },
    },
  ],
} as const satisfies ProjectContent;
