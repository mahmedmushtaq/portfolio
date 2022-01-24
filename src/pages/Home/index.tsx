import MePic from "../../common/assets/me_pic.png";
import { GitHub, Linkedin, Send } from "react-feather";
import Header from "./components/Header";
import TopBar from "./components/TopBar";

const Home = () => {
  return (
    <div className="px-7">
      <Header />
      <TopBar />
    </div>
  );
};

export default Home;
