import WebLayout from "../src/components/Layout/WebLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { H2, H3, P } from "../src/components/UIWidgets";

const FreelanceReactDeveloper = () => {
  return (
    <WebLayout isLinkTopBar>
      <div className="text-center">
        <H2>Freelance React Developer</H2>
        <P className="w-3/5 m-auto">
          If you have a project or you want to expand your team of your front
          end developer you can react out to me. We can discuss your requiements
          in details
        </P>
        <H2 className="!font-normal text-3xl mt-10 text-lprimary">
          What are the necessary skills to make a front end developer?
        </H2>
      </div>
    </WebLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "freelanceReactDeveloper",
        "common",
      ])),
    },
  };
}
export default FreelanceReactDeveloper;
