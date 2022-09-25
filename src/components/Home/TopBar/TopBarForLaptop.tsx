import { Moon } from "react-feather";
import { H2, H3 } from "../../UIWidgets";
import { topBarIconsList } from "./list";
import ScrollIntoView from "react-scroll-into-view";
import { useTranslation } from "next-i18next";

const TopBar = () => {
  const { t } = useTranslation();
  const list = topBarIconsList(t);
  return (
    <div className="flex mt-5 mb-16">
      <div>
        <H2 className="!text-2xl">Ahmed</H2>
      </div>
      <div className="ml-auto flex">
        {list.map((item) => (
          <ScrollIntoView selector={item.link} key={item.id}>
            <H3
              className="!text-lg mx-3 cursor-pointer hover:text-lprimary"
              bold
            >
              {item.heading}
            </H3>
          </ScrollIntoView>
        ))}
        {/* <Moon className="mx-4 cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default TopBar;
