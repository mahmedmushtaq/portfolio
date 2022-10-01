import { X } from "react-feather";
import ScrollIntoView from "react-scroll-into-view";
import Drawer from "../UIWidgets/Drawer";
import { topBarIconsList } from "./list";
import { useTranslation } from "next-i18next";
import { LinkWrapper } from "../UIWidgets";
import TopBarItemWrapper from "./TopBarItemWrapper";

interface PropsType {
  showDrawer: boolean;
  setShowDrawer: (value: boolean) => void;
  toggleDrawer: () => void;
  redirectToHome?: boolean;
}

const TopBarDrawer = ({
  showDrawer,
  redirectToHome,
  setShowDrawer,
  toggleDrawer,
}: PropsType) => {
  const { t } = useTranslation();
  const list = topBarIconsList(t);

  return (
    <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}>
      <div className="text-center">
        <div className="grid grid-cols-3 ">
          {list.map((item) => (
            <TopBarItemWrapper
              {...item}
              key={item.id}
              redirectToHome={redirectToHome}
            />
          ))}
        </div>

        <div>
          <X className="ml-auto mr-7 cursor-pointer" onClick={toggleDrawer} />
        </div>
      </div>
    </Drawer>
  );
};

export default TopBarDrawer;
