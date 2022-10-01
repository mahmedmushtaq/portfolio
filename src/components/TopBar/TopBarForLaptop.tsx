import { H2, H3, LinkWrapper } from "../UIWidgets";
import { topBarIconsList } from "./list";
import ScrollIntoView from "react-scroll-into-view";
import { useTranslation } from "next-i18next";
import TopBarItemWrapper from "./TopBarItemWrapper";

const TopBar = ({ redirectToHome = false }: { redirectToHome?: boolean }) => {
  const { t } = useTranslation();
  const list = topBarIconsList(t);

  return (
    <div className="flex mt-5 mb-16">
      <div>
        <H2 className="!text-2xl">Ahmed</H2>
      </div>
      <div className="ml-auto flex">
        {list.map((item) => (
          <TopBarItemWrapper
            {...item}
            key={item.id}
            redirectToHome={redirectToHome}
            isComputerScreen
          />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
