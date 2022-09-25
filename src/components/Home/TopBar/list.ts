import { Briefcase, Coffee, Home, Info, Image, Send } from "react-feather";

export const topBarIconsList = (t: any) => [
  {
    id: 1,
    component: Home,
    heading: t("common:home"),
    link: "#home",
  },

  {
    id: 2,
    component: Info,
    heading: t("common:info"),
    link: "#info",
  },

  {
    id: 3,
    component: Briefcase,
    heading: t("common:skills"),
    link: "#skills",
  },
  {
    id: 5,
    component: Image,
    heading: t("common:portfolio"),
    link: "#portfolio",
  },
  {
    id: 6,
    component: Send,
    heading: t("common:contact_me"),
    link: "#contactme",
  },
];
