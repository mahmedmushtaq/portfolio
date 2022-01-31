import { ComponentType, useState } from "react";
import {
  Briefcase,
  Grid,
  Home,
  Info,
  Moon,
  Image,
  Send,
  Coffee,
  X,
} from "react-feather";
import { H2, H3, Drawer } from "../../UIWidgets";
import { topBarIconsList } from "./list";
import TopBarDrawer from "./TopBarDrawer";
import LaptopTopBar from "./TopBarForLaptop";

const TopBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div>
      <div className="block md:hidden">
        <TopBarDrawer
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          toggleDrawer={toggleDrawer}
        />
        <div className="fixed z-40 bottom-0 py-4 px-7 w-full left-0 flex bg-lbg">
          <H3 className="text-">Ahmed</H3>
          <div className="flex items-center ml-auto">
            {/* <Moon className="mr-4 cursor-pointer" /> */}
            <Grid className="cursor-pointer" onClick={toggleDrawer} />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <LaptopTopBar />
      </div>
    </div>
  );
};

export default TopBar;
