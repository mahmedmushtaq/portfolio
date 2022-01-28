import { useState } from "react";
import { ChevronDown, ChevronUp, Code } from "react-feather";
import BasicLayout from "../../../template/BasicLayout";
import { H2, H3, AccordionWidget, ProgressBar } from "../../UIWidgets";
import SkillList from "./SkillListItem";
import mySkillsList from "./skills";

const Skills = () => {
  return (
    <BasicLayout
      heading="Skills"
      secondaryHeading="My Technical Level"
      contentTopMargin={12}
      id="skills"
    >
      <div className="">
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
