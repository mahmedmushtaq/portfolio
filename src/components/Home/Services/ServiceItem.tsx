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
    <div className="shadow-inner px-3 py-7 my-2">
      {icon}
      <H3 className="mt-3" bold>
        {heading}
      </H3>
    </div>
  );
};

export default ServiceItem;
