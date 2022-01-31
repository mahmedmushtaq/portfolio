import { useState } from "react";
import { ChevronDown, ChevronUp, Code } from "react-feather";
import BasicLayout from "../../../template/BasicLayout";
import {
  H2,
  H3,
  AccordionWidget,
  ProgressBar,
  Container,
} from "../../UIWidgets";
import SkillList from "./SkillListItem";
import mySkillsList from "./skills";

const Skills = () => {
  return (
    <BasicLayout
      heading="My Skills"
      secondaryHeading="My Technical Level"
      contentTopMargin={12}
      className="mt-28"
      id="skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        {mySkillsList.map((list) => (
          <SkillList
            key={list.id}
            listIcon={<list.icon />}
            list={list.list}
            listHeading={list.heading}
            listDescription={list.description}
          />
        ))}
      </div>
    </BasicLayout>
  );
};

export default Skills;
