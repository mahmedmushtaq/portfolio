import Header from "../../components/Home/Header";
import TopBar from "../../components/Home/TopBar/TopBar";
import AboutMe from "../../components/Home/AboutMe/AboutMeBg";
import Skills from "../../components/Home/Skills/SkillsForLaptop";
import Qualtifications from "../../components/Home/Qualifications/QualificationsForLaptop";
import Services from "../../components/Home/Services";
import Portfolio from "../../components/Home/Portfolio";
import ContactMe from "../../components/Home/ContactMe";
import Testimonials from "../../components/Home/Testimonials";
import Footer from "../../components/Home/Footer";
import { Container } from "../../components/UIWidgets";

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
          {/* <Services /> */}
          <Portfolio />
          <ContactMe />
          <Testimonials />
        </Container>

        {/*
       
       
        */}
      </div>
      <div className="mt-28">
        <Footer />
      </div>

      {/* 
      <div className="px-7">
     
      </div>
      */}
    </div>
  );
};

export default Home;
