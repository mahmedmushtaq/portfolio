import BasicLayout from "../../../template/BasicLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button, Container, H3, P } from "../../UIWidgets";
import { portfolioList } from "./portfoliolist";
import "./index.css";
import { ArrowRight, ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const nextItem = () => {
    const next = selectedItem + 1;
    setSelectedItem(next % portfolioList.length);
  };

  const previousItem = () => {
    let next = selectedItem - 1;
    if (next < 0) next = portfolioList.length - 1;
    setSelectedItem(next % portfolioList.length);
  };

  return (
    <BasicLayout
      heading="Portfolio"
      secondaryHeading="My Word"
      contentTopMargin={0}
      id="portfolio"
    >
      <div className="relative mt-5 md:mt-0">
        <div
          className="absolute right-0  z-30 h-full flex items-center"
          onClick={nextItem}
        >
          <ChevronRight className="cursor-pointer " size={35} />
        </div>
        <div className="w-11/12 mx-auto">
          <Carousel
            showIndicators={false}
            showArrows={false}
            swipeable={false}
            selectedItem={selectedItem}
          >
            {portfolioList.map((item) => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </Carousel>
        </div>
        <div
          className="absolute top-0 left-0 w-fit inset-1/2  z-30 h-full flex items-center"
          onClick={previousItem}
        >
          <ChevronLeft className="cursor-pointer" size={35} />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Portfolio;
