export const social = [
  { url: "mailto:kimdan040304@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/daniellekim0403/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
