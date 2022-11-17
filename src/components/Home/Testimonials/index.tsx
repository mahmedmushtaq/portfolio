import BasicLayout from "../../../template/BasicLayout";
import { H3, P } from "../../UIWidgets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialItem from "./TestimonialItem";
import { testimonialsReview } from "./list";
import { useTranslation } from "next-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const list = testimonialsReview(t);
  return (
    <BasicLayout
      heading={t("home:testimonials")}
      secondaryHeading={t("home:my_clients_saying")}
      contentTopMargin={12}
      className="mt-28"
      id="testimonials"
    >
      <div className="block grid md:grid-cols-2    align-center ">
        {list.map((item, index) => (
          <TestimonialItem key={item.id} className="my-5 md:my-0" {...item} />
        ))}
      </div>
    </BasicLayout>
  );
};

export default Testimonials;
