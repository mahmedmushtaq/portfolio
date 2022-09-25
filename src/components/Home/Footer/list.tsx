import { Facebook, GitHub, Instagram, Linkedin, Twitter } from "react-feather";

export const footerList = (t: any) => [
  { id: 1, heading: t("common:about_me"), link: "#info" },
  { id: 2, heading: t("common:portfolio"), link: "#portfolio" },
  { id: 3, heading: t("common:contact_me"), link: "#contactme" },
];

export const footerFollowMeIcon = [
  {
    id: 1,
    icon: Facebook,
    href: "https://www.facebook.com/mahmedmushtaq12/",
  },
  {
    id: 3,
    icon: Twitter,
    href: "https://twitter.com/MAhmedMushtaq3",
  },
  {
    id: 4,
    icon: Linkedin,
    href: "https://www.linkedin.com/in/m-ahmed-mushtaq/",
  },
  {
    id: 5,
    icon: GitHub,
    href: "https://github.com/mahmedmushtaq",
  },
];
