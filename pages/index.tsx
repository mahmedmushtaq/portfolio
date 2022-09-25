import Header from "../src/components/Home/Header";
import TopBar from "../src/components/Home/TopBar";
import AboutMe from "../src/components/Home/AboutMe";
import Skills from "../src/components/Home/Skills";
import Qualtifications from "../src/components/Home/Qualifications";
import Services from "../src/components/Home/Services";
import Portfolio from "../src/components/Home/Portfolio";
import ContactMe from "../src/components/Home/ContactMe";
import Testimonials from "../src/components/Home/Testimonials";
import Footer from "../src/components/Home/Footer";
import { Container } from "../src/components/UIWidgets";

const Home = () => {
  return (
    <div className="bg-lbg">
      <div className="px-7 bg-lbg">
        <TopBar />
        <Container>
          <Header />
          <AboutMe />
          <Skills />
          <Qualtifications />
          <Portfolio />
          <ContactMe />
          <Testimonials />
        </Container>
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
