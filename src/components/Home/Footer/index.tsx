import { Facebook, GitHub, Instagram, Linkedin, Twitter } from "react-feather";
import { H2, H3, P } from "../../UIWidgets";

const Footer = () => {
  return (
    <div id="footer" className="text-lbg px-7 py-10 pb-20 bg-lprimary">
      <div className="flex justify-between items-start">
        <div>
          <H3 bold>M Ahmed Mushtaq</H3>
          <P top={2}>Full Stack Developer</P>
        </div>
        <div className="flex ">
          <P top={2} className="mx-4">
            Services
          </P>
          <P top={2} className="mx-4">
            Portfolio
          </P>
          <P top={2} className="mx-4">
            Contact Me
          </P>
        </div>
        <div className="flex">
          <Facebook className="mr-4" />
          <Instagram className="mr-4" />
          <Twitter className="mr-4" />
          <Linkedin className="mr-4" />
          <GitHub className="mr-4" />
        </div>
      </div>
      <div className="mt-12 text-center">
        <H3 bold>All Rights Reserved</H3>
      </div>
    </div>
  );
};

export default Footer;
