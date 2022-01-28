import BasicLayout from "../../../template/BasicLayout";
import { H2, H3, P, HighLightStepper, Container, Card } from "../../UIWidgets";

import { qualificationsList } from "./list";

const Qualtifications = () => {
  return (
    <BasicLayout
      heading="Past Experience"
      secondaryHeading="My Personal Journey"
      className="mt-28"
      id="qualifications"
    >
      <div className="grid grid-cols-2 gap-4 mt-20">
        {qualificationsList.map((list, i) => (
          // <Card className="!p-7">
          <HighLightStepper key={list.id} noLine>
            <div className="w-4/5">
              <H2 className="!text-lg">{list.heading}</H2>
              <P className="!mt-1 text-sm">{list.date}</P>
              <P className="text-sm">{list.technologiesList}</P>
            </div>
          </HighLightStepper>
          // </Card>
        ))}
      </div>
    </BasicLayout>
  );
};

export default Qualtifications;
