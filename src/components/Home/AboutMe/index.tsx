import { DownloadCloud } from "react-feather";
import { H2, H3, P, Button } from "../../UIWidgets";
import { useTranslation } from "next-i18next";

const shortAboutMeIntro = [
  { id: 1, headingCount: "04+" },
  { id: 2, headingCount: "20+" },
  { id: 3, headingCount: "05+" },
];

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div id="info" className="bg-lprimary px-4 py-12 md:p-12 text-lbg mt-40">
      <div className="text-center">
        <H2 className="md:!text-5xl mb-2">{t("home:about_me")}</H2>
        <H3 className="!text-lg">{t("home:my_introduction")}</H3>
      </div>
      <P className="">{t("home:my_introduction_description")}</P>

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
              <P className="!mt-0 text-sm">{t("home:years_experience")}</P>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={
              "https://drive.google.com/file/d/1ccNTxsN9rAMnFRQRlWbr-90P077JvyFG/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              text={t("home:download_cv")}
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
