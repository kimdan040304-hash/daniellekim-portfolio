import tugia0 from "../../../assets/images/projects/tugia/tugia-0.png";
import tugiaDashboard from "../../../assets/images/projects/tugia/tugia-1-dashboard.png";
import tugiaContentAnalysis from "../../../assets/images/projects/tugia/tugia-2-content-analysis.png";
import tugiaPostDatabase from "../../../assets/images/projects/tugia/tugia-3-post-database.png";
import tugia2 from "../../../assets/images/projects/tugia/tugia-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Tứ Gia Co., Ltd.",
  theme: "light",
  tags: ["marketing", "content"],
  description:
    "Phụ trách marketing cho một doanh nghiệp bia nhập khẩu tại TP. Hồ Chí Minh, kết hợp content tự nhiên, quảng cáo trả phí và triển khai website. Lên content calendar, chạy quảng cáo trên Meta và TikTok với việc trực tiếp quản lý ngân sách, đồng thời xây dựng website WordPress cho thương hiệu. Các chiến dịch đạt 400K+ lượt tiếp cận và 7K+ lượt tương tác.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tugia0,
        alt: "Website WordPress của Tứ Gia Co., Ltd.",
        caption: "Website và landing page của thương hiệu xây dựng trên WordPress",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugiaDashboard,
        alt: "Dashboard hiệu suất Facebook",
        caption: "Dashboard hiệu suất: 1.225 bài đăng, 473K lượt xem, tỷ lệ tương tác trung bình 8,73%",
        fit: "natural",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugiaContentAnalysis,
        alt: "Phân tích hiệu quả content",
        caption: "Hiệu quả content theo trụ cột, định dạng, organic và paid, lời kêu gọi hành động và theo tháng",
        fit: "natural",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugiaPostDatabase,
        alt: "Cơ sở dữ liệu bài đăng",
        caption: "Cơ sở dữ liệu bài đăng: mỗi bài được ghi lại định dạng, trụ cột nội dung, CTA và hashtag",
        fit: "natural",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tugia2,
        alt: "Hiệu suất chiến dịch Facebook Ads",
        caption: "Hiệu suất chiến dịch quảng cáo trả phí trên Facebook Ads",
      },
    },
  ],
} as const satisfies ProjectContent;
