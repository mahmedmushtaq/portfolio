import { DownloadCloud } from "react-feather";
import { H2, H3, P, Button } from "../../UIWidgets";

const shortAboutMeIntro = [
  { id: 1, headingCount: "04+", text: "Years", text1: "Experience" },
  { id: 2, headingCount: "20+", text: "Completed", text1: "Projects" },
  { id: 3, headingCount: "05+", text: "Companies", text1: "Worked" },
];

const AboutMe = () => {
  return (
    <div id="info" className="bg-lprimary p-12 text-lbg mt-40">
      <div className="text-center">
        <H2 className="!text-5xl mb-2">About Me</H2>
        <H3 className="!text-lg">My Introduction</H3>
      </div>
      <P className="pl-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to
      </P>

      <div className="my-5 pl-12">
        <div className="flex justify-between ">
          {shortAboutMeIntro.map((item) => (
            <div key={item.id} className="flex items-center">
              <H2 className="!text-4xl mr-4">{item.headingCount}</H2>
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
  );
};

export default AboutMe;
