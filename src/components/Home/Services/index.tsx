import { Code } from "react-feather";
import BasicLayout from "../../../template/BasicLayout";
import { Container, H2, H3 } from "../../UIWidgets";
import { servicesList } from "./list";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <BasicLayout heading="Services" secondaryHeading="What I Offer">
      <div className="grid grid-cols-3 gap-4">
        {servicesList.map((service) => (
          <ServiceItem
            key={service.id}
            icon={service.icon}
            heading={service.heading}
          />
        ))}
      </div>
    </BasicLayout>
  );
};

export default Services;
