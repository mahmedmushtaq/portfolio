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
    <Container>
      <BasicLayout
        heading="Skills"
        secondaryHeading="My Technical Level"
        contentTopMargin={12}
      >
        <div className="grid grid-cols-2 gap-4">
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
    </Container>
  );
};

export default Skills;
