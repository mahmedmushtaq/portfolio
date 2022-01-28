import { Button, Container, H2, H3, P } from "../../UIWidgets";
import AboutPic from "../../../common/assets/about_pic_lap.png";
import { DownloadCloud } from "react-feather";
import BasicLayout from "../../../template/BasicLayout";

const shortAboutMeIntro = [
  { id: 1, headingCount: "04+", text: "Years", text1: "Experience" },
  { id: 2, headingCount: "20+", text: "Completed", text1: "Projects" },
  { id: 3, headingCount: "05+", text: "Companies", text1: "Worked" },
];

const AboutMe = () => {
  return (
    <div id="info" className="flex justify-between items-center mt-40">
      <div>
        <img
          alt="About Pic"
          src={AboutPic}
          width={450}
          className="rounded-3xl"
        />
      </div>
      <div className="basis-4/6">
        <div className="text-center">
          <H2 className="">About Me</H2>
          <H3 className="">My Introduction</H3>
        </div>
        <P className="pl-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to
        </P>
        <div className="mt-5 pl-12">
          <div className="grid grid-cols-3">
            {shortAboutMeIntro.map((item) => (
              <div key={item.id} className="mx-4">
                <H2 className="text-xl">{item.headingCount}</H2>
                <P className="mt-2 text-sm">
                  {item.text} <br /> {item.text1}
                </P>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              text="Download CV"
              className="mx-auto"
              icon={<DownloadCloud className="ml-3" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
