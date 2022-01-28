import MePic from "../../../common/assets/me_pic.png";
import TopBar from "../TopBar/TopBar";
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

const Header = () => {
  const MyProfile = (
    <div>
      <img src={MePic} alt="My Pic" width={300} style={{ borderRadius: 200 }} />
    </div>
  );

  const iconClassNames = "mt-5 cursor-pointer hover:text-lprimary";

  return (
    <Container>
      {/* <div className="grid grid-cols-[100px_1fr_1fr]"> */}
      <div className="flex justify-between items-center my-20">
        <div className="flex mt-16 justify-between">
          <div>
            <Twitter className={iconClassNames} size={35} />
            <GitHub className={iconClassNames} size={35} />
            <Linkedin className={iconClassNames} size={35} />
          </div>
          {/* {MyProfile} */}
        </div>
        <div className="mt-7  px-10 basis-3/6">
          <H2>Hi, I'am Ahmed</H2>
          <H3 className="mt-2">Full Stack Developer</H3>
          <P>
            Highly expert in full stack web development by using React, React
            native, Next, node, TypeScript, GraphQL, Blockchain and web3
          </P>
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
        {MyProfile}
      </div>
    </Container>
  );
};

export default Header;
