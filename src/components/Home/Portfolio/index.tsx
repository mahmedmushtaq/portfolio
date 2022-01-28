import BasicLayout from "../../../template/BasicLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button, H3, P } from "../../UIWidgets";
import { portfolioList } from "./portfoliolist";
import "./index.css";
import { ArrowRight, ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const nextItem = () => {
    const next = selectedItem + 1;
    setSelectedItem(next % portfolioList.length);
  };

  const previousItem = () => {
    let next = selectedItem - 1;
    if (next < 0) next = 9;
    setSelectedItem(next % portfolioList.length);
  };

  return (
    <BasicLayout
      heading="Portfolio"
      secondaryHeading="My Word"
      contentTopMargin={0}
    >
      <div className="relative">
        <div className="absolute right-0 inset-y-1/2">
          <ChevronRight className="cursor-pointer" onClick={nextItem} />
        </div>
        <div className="w-11/12 mx-auto">
          <Carousel
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            selectedItem={selectedItem}
            swipeable={false}
          >
            {portfolioList.map((item) => (
              <div key={item.id} className="">
                <H3 bold className="pb-3">
                  {item.heading}
                </H3>
                <img alt="Portfolio" src={item.imgSrc} />
                <P className="text-left">{item.description}</P>
                <Button
                  text={"Visit"}
                  variant="outlined"
                  icon={<ArrowRight className="ml-2" />}
                  className="!mt-3 !py-2 px-5"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="absolute left-0 inset-y-1/2">
          <ChevronLeft className="cursor-pointer" onClick={previousItem} />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Portfolio;
