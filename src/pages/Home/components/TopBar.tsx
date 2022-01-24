import { Grid, Moon } from "react-feather";
import { H2, H3 } from "../../../components/UIWidgets";

const TopBar = () => {
  return (
    <div className="fixed bottom-0 py-4 px-7 w-full left-0 flex">
      <H3 className="text-lg">TopBar</H3>
      <div className="flex items-center ml-auto">
        <Moon className="mr-4 cursor-pointer" />
        <Grid className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
