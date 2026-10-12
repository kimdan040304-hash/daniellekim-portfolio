import hoa20100 from "../../../assets/images/projects/hoa2010/hoa2010-0.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "Social Listening bằng AI: Khảo sát thị trường Hoa 20/10",
  theme: "light",
  tags: ["ai-training", "content"],
  live: "/hoa-2010-insight-map.html",
  liveLabel: "Xem báo cáo đầy đủ",
  source: "/hoa2010-training-hub.html",
  sourceLabel: "Xem tài liệu đào tạo",
  description:
    "Thiết kế và dẫn dắt bài thực hành nghiên cứu thị trường bằng AI cho hơn 200 sinh viên: từ 650 bài đăng mạng xã hội thô, cùng Claude xây dựng chiến lược giá, bản đồ đối thủ và các khoảng trống cơ hội có thể hành động.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: hoa20100,
        alt: "Dẫn dắt buổi đào tạo AI cho hơn 200 sinh viên",
        caption: "Dẫn dắt workshop thực hành cho hơn 200 sinh viên về cách dùng Claude trong nghiên cứu thị trường",
      },
    },
  ],
} as const satisfies ProjectContent;
