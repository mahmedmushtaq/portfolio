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

  const iconClassNames = "mt-5 cursor-pointer hover:text-lprimary";

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between lg:items-center my-20"
    >
      <div className="flex lg:mt-0 md:mt-16  justify-between">
        <div className="mt-3 md:mt-0">
          <Twitter className={iconClassNames} size={35} />
          <GitHub className={iconClassNames} size={35} />
          <Linkedin className={iconClassNames} size={35} />
        </div>
        <div className="block md:hidden mx-auto"> {MyProfile}</div>
      </div>
      <div className="mt-7  md:px-10 md:basis-3/6">
        <H2>{content.primaryHeading}</H2>
        <H3 className="mt-2">{content.secondaryHeading}</H3>
        <P>{content.description}</P>
        <div className="mt-5">
          <Button text="Contact Me" icon={<Send className="ml-3" />} />
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
