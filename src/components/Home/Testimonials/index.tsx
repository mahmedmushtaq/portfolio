import BasicLayout from "../../../template/BasicLayout";
import { H3, P } from "../../UIWidgets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialItem from "./TestimonialItem";
import { testimonialsReview } from "./list";

const Testimonials = () => {
  return (
    <BasicLayout
      heading="Testimonials"
      secondaryHeading="My Clients saying"
      contentTopMargin={12}
      className="mt-28"
      id="testimonials"
    >
      <div className="hidden md:grid grid-cols-2">
        {testimonialsReview.map((item) => (
          <TestimonialItem key={item.id} {...item} />
        ))}
      </div>

      <div className="block md:hidden">
        <Carousel>
          {testimonialsReview.map((item) => (
            <TestimonialItem key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </BasicLayout>
  );
};

export default Testimonials;
