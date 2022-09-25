import BasicLayout from "../../../template/BasicLayout";
import { H2, P, Stepper } from "../../UIWidgets";
import { useTranslation } from "next-i18next";
import { qualificationsList } from "./list";

const Qualtifications = () => {
  const { t } = useTranslation();
  return (
    <BasicLayout
      heading={t("home:past_experience")}
      secondaryHeading={t("home:my_personal_journey")}
      className="mt-28"
      id="qualifications"
    >
      <div className="md:grid grid-cols-2 gap-4 mt-20">
        {qualificationsList(t).map((list, i) => (
          <Stepper key={list.id}>
            <div className="w-4/5">
              <H2 className="!text-lg">{list.heading}</H2>
              <P className="!mt-1 text-sm">{list.date}</P>
              <P className="text-sm">{list.technologiesList}</P>
            </div>
          </Stepper>
        ))}
      </div>
    </BasicLayout>
  );
};

export default Qualtifications;
