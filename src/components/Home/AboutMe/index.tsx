import { Button, H2, H3, P } from "../../UIWidgets";
import AboutPic from "../../../common/assets/about_pic.png";
import { DownloadCloud } from "react-feather";
import BasicLayout from "../../../template/BasicLayout";

const shortAboutMeIntro = [
  { id: 1, headingCount: "04+", text: "Years", text1: "Experience" },
  { id: 2, headingCount: "20+", text: "Completed", text1: "Projects" },
  { id: 3, headingCount: "05+", text: "Companies", text1: "Worked" },
];

const AboutMe = () => {
  return (
    <BasicLayout heading="About Me" secondaryHeading="My Introduction">
      <img
        alt="About Pic"
        src={AboutPic}
        width={200}
        className="rounded-3xl mx-auto mt-12"
      />
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to
      </P>
      <div className="mt-5">
        <div className="grid grid-cols-3">
          {shortAboutMeIntro.map((item) => (
            <div key={item.id}>
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
    </BasicLayout>
  );
};

export default AboutMe;
