export const social = [
  { url: "mailto:kimdan040304@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/daniellekim0403/", name: "linkedin" },
  { url: "https://www.facebook.com/kim.an.299472", name: "facebook" },
  { url: "https://zalo.me/0986068702", name: "zalo" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x" | "facebook" | "zalo";
}[];
