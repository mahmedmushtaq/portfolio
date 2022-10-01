import { Briefcase, Coffee, Home, Info, Image, Send } from "react-feather";

export const topBarIconsList = (t: any) => [
  {
    id: 1,
    Icon: Home,
    heading: t("common:home"),
    pageLink: "#home",
  },

  {
    id: 2,
    Icon: Info,
    heading: t("common:info"),
    pageLink: "#info",
  },

  {
    id: 3,
    Icon: Briefcase,
    heading: t("common:skills"),
    pageLink: "#skills",
  },
  {
    id: 5,
    Icon: Image,
    heading: t("common:portfolio"),
    pageLink: "#portfolio",
  },
  {
    id: 6,
    Icon: Send,
    heading: t("common:contact_me"),
    pageLink: "#contactme",
  },
  {
    id: 6,
    Icon: Send,
    heading: t("common:blogs"),
    redirectLink: "/blogs",
  },
];
