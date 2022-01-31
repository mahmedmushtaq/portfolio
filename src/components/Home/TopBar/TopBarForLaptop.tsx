import { Moon } from "react-feather";
import { H2, H3 } from "../../UIWidgets";
import { topBarIconsList } from "./list";
import ScrollIntoView from "react-scroll-into-view";

const TopBar = () => {
  return (
    <div className="flex mt-5 mb-16">
      <div>
        <H2 className="!text-2xl">Ahmed</H2>
      </div>
      <div className="ml-auto flex">
        {topBarIconsList.map((item) => (
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
