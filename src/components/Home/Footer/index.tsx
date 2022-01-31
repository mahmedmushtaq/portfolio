import { Facebook, GitHub, Instagram, Linkedin, Twitter } from "react-feather";
import ScrollIntoView from "react-scroll-into-view";
import { Container, H2, H3, P } from "../../UIWidgets";
import { footerFollowMeIcon, footerList } from "./list";

const Footer = () => {
  return (
    <div id="footer" className="text-lbg px-7 py-10 pb-20 bg-lprimary">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <H3 bold>M Ahmed Mushtaq</H3>
            <P top={2}>Full Stack Developer</P>
          </div>
          <div className="flex flex-col md:flex-row ">
            {footerList.map((item) => (
              <ScrollIntoView key={item.id} selector={item.link}>
                <P top={2} className="mr-4 cursor-pointer">
                  {item.heading}
                </P>
              </ScrollIntoView>
            ))}
          </div>
          <div className="flex mt-12 md:mt-0">
            {footerFollowMeIcon.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <item.icon key={item.id} className="mr-4 cursor-pointer" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <H3 bold>All Rights Reserved</H3>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
