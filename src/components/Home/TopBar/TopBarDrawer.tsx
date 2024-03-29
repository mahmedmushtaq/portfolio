import { X } from "react-feather";
import ScrollIntoView from "react-scroll-into-view";
import Drawer from "../../UIWidgets/Drawer";
import { topBarIconsList } from "./list";
import { useTranslation } from "next-i18next";

interface PropsType {
  showDrawer: boolean;
  setShowDrawer: (value: boolean) => void;
  toggleDrawer: () => void;
}

const TopBarDrawer = ({
  showDrawer,
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
            <ScrollIntoView key={item.id} selector={item.link}>
              <div className="mb-4" key={item.id}>
                <item.component className="mx-auto cursor-pointer hover:text-lprimary" />
                <h3 className="text-sm font-p">{item.heading}</h3>
              </div>
            </ScrollIntoView>
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
