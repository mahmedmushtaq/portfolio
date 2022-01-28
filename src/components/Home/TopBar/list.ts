import { Briefcase, Coffee, Home, Info, Image, Send } from "react-feather";

export const topBarIconsList = [
  {
    id: 1,
    component: Home,
    heading: "Home",
    link: "#home",
  },

  {
    id: 2,
    component: Info,
    heading: "Info",
    link: "#info",
  },

  {
    id: 3,
    component: Briefcase,
    heading: "Skills",
    link: "#skills",
  },
  // {
  //   id: 4,
  //   component: Coffee,
  //   heading: "Services",
  //   link: "#services",
  // },
  {
    id: 5,
    component: Image,
    heading: "Portfolio",
    link: "#portfolio",
  },
  {
    id: 6,
    component: Send,
    heading: "Contact Me",
    link: "#contactme",
  },
];
