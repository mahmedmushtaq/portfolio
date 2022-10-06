import { DownloadCloud } from "react-feather";
import { H2, H3, P, Button } from "../../UIWidgets";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { getPortfolio } from "../../../common/lib/firebase/database";

const shortAboutMeIntro = [
  { id: 1, headingCount: "04+" },
  { id: 2, headingCount: "20+" },
  { id: 3, headingCount: "05+" },
];

const AboutMe = () => {
  const { t } = useTranslation();
  const [cvAddress, setCvAddress] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await getPortfolio();
        //@ts-ignore
        setCvAddress(res[0].cv_address);
      } catch (err) {
        console.log("err is ", err);
      }
    })();
  }, []);

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
          <a href={cvAddress} target="_blank" rel="noreferrer">
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
