import BasicLayout from "../../../template/BasicLayout";
import { H3, P } from "../../UIWidgets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialItem from "./TestimonialItem";
import { testimonialsReview } from "./list";
import { useTranslation } from "next-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <BasicLayout
      heading={t("home:testimonials")}
      secondaryHeading={t("home:my_clients_saying")}
      contentTopMargin={12}
      className="mt-28"
      id="testimonials"
    >
      <div className="hidden md:grid grid-cols-2">
        {testimonialsReview(t).map((item) => (
          <TestimonialItem key={item.id} {...item} />
        ))}
      </div>

      <div className="block md:hidden">
        <Carousel>
          {testimonialsReview(t).map((item) => (
            <TestimonialItem key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </BasicLayout>
  );
};

export default Testimonials;
