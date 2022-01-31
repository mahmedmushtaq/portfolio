import { ReactChild } from "react";
import { Code } from "react-feather";
import { AccordionWidget, H3, ProgressBar } from "../../UIWidgets";

interface PropsType {
  listIcon: ReactChild;
  listHeading: string;
  listDescription: string;
  list: { id: number; heading: string; percentage: number }[];
}

const SkillListItem = (props: PropsType) => {
  const { listIcon, listHeading, listDescription, list } = props;
  return (
    <div className="my-6 mx-auto w-full">
      <AccordionWidget
        icon={listIcon}
        heading={listHeading}
        description={listDescription}
      >
        <div className="py-4">
          {list.map((skill) => (
            <div key={skill.id} className="mb-3">
              <H3 className="!text-sm">{skill.heading}</H3>
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </AccordionWidget>
    </div>
  );
};

export default SkillListItem;
