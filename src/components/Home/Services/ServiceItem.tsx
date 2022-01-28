import { ReactChild } from "react";
import { H3 } from "../../UIWidgets";

const ServiceItem = ({
  icon,
  heading,
}: {
  icon: ReactChild;
  heading: string;
}) => {
  return (
    <div className="shadow-inner px-5 pb-7 my-2 pt-20">
      {icon}
      <H3 className="mt-3 w-5/6 cursor-pointer" bold>
        {heading}
      </H3>
    </div>
  );
};

export default ServiceItem;
