import { DownloadCloud } from "react-feather";
import { H2, H3, P, Button } from "../../UIWidgets";
import { content, shortAboutMeIntro } from "./content";

const AboutMe = () => {
  return (
    <div id="info" className="bg-lprimary px-4 py-12 md:p-12 text-lbg mt-40">
      <div className="text-center">
        <H2 className="md:!text-5xl mb-2">{content.primaryHeading}</H2>
        <H3 className="!text-lg">{content.secondaryHeading}</H3>
      </div>
      <P className="">{content.description}</P>

      <div className="my-5 md:px-12">
        <div className="flex justify-between ">
          {shortAboutMeIntro.map((item) => (
            <div
              key={item.id}
              className="flex md:flex-row flex-col items-center"
            >
              <H2 className="!text-2xl lg:!text-4xl mr-4">
                {item.headingCount}
              </H2>
              <P className="mt-2 text-sm">
                {item.text} <br /> {item.text1}
              </P>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={"/assets/mahmed_mushtaq_cv.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              text="Download CV"
              className="mx-auto"
              icon={<DownloadCloud className="ml-3" />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
