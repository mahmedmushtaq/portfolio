import MePic from "../../../common/assets/me_pic.png";
import { GitHub, Linkedin, Send } from "react-feather";
import { Button, H2, H3 } from "../../../components/UIWidgets";

const Header = () => {
  return (
    <div>
      <div className="mt-16 flex items-center justify-between">
        <div>
          <GitHub className="cursor-pointer" />
          <Linkedin className="mt-5 cursor-pointer" />
        </div>
        <div className="mr-auto ml-auto">
          <img
            src={MePic}
            alt="My Pic"
            width={200}
            style={{ borderRadius: 200 }}
          />
        </div>
      </div>
      <div className="mt-7">
        <H2>Hi, I'am Ahmed</H2>
        <H3 className="mt-2">Full Stack Developer</H3>
        <p className="mt-5 font-p">
          Highly expert in full stack web development by using React, React
          native, node, TypeScript, GraphQL, Blockchain and web3
        </p>
        <div className="mt-5">
          <Button text="Contact Me" icon={<Send className="ml-3" />} />
        </div>
      </div>
    </div>
  );
};

export default Header;
