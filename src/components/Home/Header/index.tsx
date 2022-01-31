import MePic from "../../../common/assets/me_pic.png";
import TopBar from "../TopBar/TopBarForLaptop";
import {
  ArrowDownCircle,
  Facebook,
  GitHub,
  Linkedin,
  MousePointer,
  Send,
  Twitter,
} from "react-feather";
import { Button, Container, H2, H3, P } from "../../UIWidgets";
import { content } from "./content";

const iconList = [
  { id: 1, icon: Twitter, href: "https://twitter.com/MAhmedMushtaq3" },
  { id: 2, icon: GitHub, href: "https://github.com/mahmedmushtaq" },
  {
    id: 3,
    icon: Linkedin,
    href: "https://www.linkedin.com/in/m-ahmed-mushtaq/",
  },
];

const Header = () => {
  const MyProfile = (
    <div className="self-start  md:mt-12">
      <img
        src={MePic}
        alt="My Pic"
        className="w-52 lg:w-72"
        style={{ borderRadius: 200 }}
      />
    </div>
  );

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between lg:items-center my-20"
    >
      <div className="flex lg:mt-0 md:mt-16  justify-between">
        <div className="mt-3 md:mt-0">
          {iconList.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.id}>
              <item.icon
                className={"mt-5 cursor-pointer hover:text-lprimary"}
                size={35}
              />
            </a>
          ))}
        </div>
        <div className="block md:hidden mx-auto"> {MyProfile}</div>
      </div>
      <div className="mt-7  md:px-10 md:basis-3/6">
        <H2>{content.primaryHeading}</H2>
        <H3 className="mt-2">{content.secondaryHeading}</H3>
        <P>{content.description}</P>
        <div className="mt-5">
          <a
            href="https://www.linkedin.com/in/m-ahmed-mushtaq/"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Contact Me" icon={<Send className="ml-3" />} />
          </a>
        </div>

        <div>
          <H3
            bold
            className="!text-lg mt-16 text-lprimary flex items-center hover:text-lsecondary cursor-pointer"
          >
            Scroll Down <ArrowDownCircle className="ml-2" />
          </H3>
        </div>
      </div>
      <div className="hidden md:block"> {MyProfile}</div>
    </div>
  );
};

export default Header;
