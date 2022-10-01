import { Facebook, GitHub, Instagram, Linkedin, Twitter } from "react-feather";
import ScrollIntoView from "react-scroll-into-view";
import { Container, H2, H3, LinkWrapper, P } from "../UIWidgets";
import { footerFollowMeIcon, footerList } from "./list";
import { useTranslation } from "next-i18next";

const Footer = ({ redirectToHome }: { redirectToHome?: boolean }) => {
  const { t } = useTranslation();
  const list = footerList(t);
  const Link = redirectToHome ? LinkWrapper : ScrollIntoView;
  return (
    <div id="footer" className="text-lbg px-7 py-10 pb-20 bg-lprimary">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <H3 bold>M Ahmed Mushtaq</H3>
            <P top={2}>{t("common:full_stack_developer")}</P>
            <P top={2} className="mb-5">
              mahmedmushtaq296@gmail.com
            </P>
          </div>
          <div className="flex flex-col md:flex-row ">
            {list.map((item) => (
              <Link
                key={item.id}
                {...(!redirectToHome
                  ? { selector: item.link }
                  : ({ link: "/", noHoverEffect: true } as any))}
              >
                <P top={2} className="mr-4 cursor-pointer">
                  {item.heading}
                </P>
              </Link>
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
          <H3 bold>{t("common:all_rights_reserved")}</H3>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
