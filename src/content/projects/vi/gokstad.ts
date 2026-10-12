import gokstad0 from "../../../assets/images/projects/gokstad/gokstad-0.jpg";
import gokstad1 from "../../../assets/images/projects/gokstad/gokstad-1.png";
import gokstad2 from "../../../assets/images/projects/gokstad/gokstad-2.png";
import gokstad3 from "../../../assets/images/projects/gokstad/gokstad-3.png";
import gokstad4 from "../../../assets/images/projects/gokstad/gokstad-4.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Nordic Perspectives Workshop",
  theme: "light",
  tags: ["design", "events"],
  description:
    "Phụ trách thiết kế hình ảnh truyền thông cho hội thảo quốc tế tại Đại học Văn Lang (tháng 5/2026), thu hút hơn 200 sinh viên cùng đại diện ngoại giao và doanh nghiệp Na Uy (Jotun, Carlsberg, SalMar, Ekko). Hoàn thành hơn 20 ấn phẩm truyền thông trong một tháng.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad0,
        alt: "Backdrop sự kiện hội thảo Nordic Perspectives",
        caption: "Backdrop sự kiện: hội thảo Nordic Perspectives, Đại học Văn Lang",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad1,
        alt: "Danh sách diễn giả phiên thảo luận",
        caption: "Danh sách diễn giả phiên thảo luận: Đại sứ quán Na Uy, Innovation Norway, Jotun, Carlsberg, SalMar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad2,
        alt: "Bài đăng của Đại sứ quán Na Uy",
        caption: "Được Đại sứ quán Na Uy tại Hà Nội đăng tải",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad3,
        alt: "Báo chí đưa tin về hợp tác Việt Nam - Na Uy",
        caption: "Được nhiều báo lớn đưa tin về quan hệ đối tác Việt Nam - Na Uy",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gokstad4,
        alt: "Số liệu hiệu suất chiến dịch",
        caption: "Hiệu suất trang trong chiến dịch: lượt truy cập +17,2%, người theo dõi +25,7%",
      },
    },
  ],
} as const satisfies ProjectContent;
