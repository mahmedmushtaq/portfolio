import BasicLayout from "../../../template/BasicLayout";
import { H2, H3, P, HighLightStepper } from "../../UIWidgets";

import { qualificationsList } from "./list";

const Qualtifications = () => {
  return (
    <BasicLayout
      heading="Qualifications"
      secondaryHeading="My Personal Journey"
      contentTopMargin={12}
    >
      <div>
        {qualificationsList.map((list, i) => (
          <HighLightStepper key={list.id}>
            <H2 className="!text-lg">{list.heading}</H2>
            <P className="!mt-1 text-sm">{list.date}</P>
            <P className="text-sm">{list.technologiesList}</P>
          </HighLightStepper>
        ))}
      </div>
    </BasicLayout>
  );
};

export default Qualtifications;
