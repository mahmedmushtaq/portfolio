import BasicLayout from "../../../template/BasicLayout";
import { useTranslation } from "next-i18next";

import SkillList from "./SkillListItem";
import mySkillsList from "./skills";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <BasicLayout
      heading={t("home:my_skills")}
      secondaryHeading={t("home:my_technical_level")}
      contentTopMargin={12}
      className="mt-28"
      id="skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        {mySkillsList(t).map((list) => (
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
