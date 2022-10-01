import Header from "../src/components/Home/Header";
import TopBar from "../src/components/TopBar";
import AboutMe from "../src/components/Home/AboutMe";
import Skills from "../src/components/Home/Skills";
import Qualtifications from "../src/components/Home/Qualifications";
import Services from "../src/components/Home/Services";
import Portfolio from "../src/components/Home/Portfolio";
import ContactMe from "../src/components/Home/ContactMe";
import Testimonials from "../src/components/Home/Testimonials";
import Footer from "../src/components/Footer";
import { Container } from "../src/components/UIWidgets";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WebLayout from "../src/components/Layout/WebLayout";

const Home = ({ locale }: any) => {
  return (
    <WebLayout>
      <div>
        <Header />
        <AboutMe />
        <Skills />
        <Qualtifications />
        <Portfolio />
        <ContactMe />
        <Testimonials />
      </div>
    </WebLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: { ...(await serverSideTranslations(locale, ["home", "common"])) },
  };
}

export default Home;
