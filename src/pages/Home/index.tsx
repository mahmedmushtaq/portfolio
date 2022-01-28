import Header from "../../components/Home/Header";
import TopBar from "../../components/Home/TopBar/TopBar";
import AboutMe from "../../components/Home/AboutMe/AboutMeForLaptop";
import Skills from "../../components/Home/Skills/SkillsForLaptop";
import Qualtifications from "../../components/Home/Qualifications";
import Services from "../../components/Home/Services";
import Portfolio from "../../components/Home/Portfolio";
import ContactMe from "../../components/Home/ContactMe";
import Testimonials from "../../components/Home/Testimonials";
import Footer from "../../components/Home/Footer";

const Home = () => {
  return (
    <div className="bg-lbg mb-20">
      <div className="px-7 bg-lbg">
        <TopBar />
        <Header />
        <AboutMe />
        <Skills />
        {/*
       
        <Qualtifications />
        <Services />
        <Portfolio /> */}
      </div>
      {/* <ContactMe />
      <div className="px-7">
        <Testimonials />
      </div>
      <Footer /> */}
    </div>
  );
};

export default Home;
