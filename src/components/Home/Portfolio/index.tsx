import BasicLayout from "../../../template/BasicLayout";
import { Carousel } from "react-responsive-carousel";
import { portfolioList } from "./portfoliolist";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { useTranslation } from "next-i18next";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { t } = useTranslation();
  const list = portfolioList(t);

  const nextItem = () => {
    const next = selectedItem + 1;
    setSelectedItem(next % list.length);
  };

  const previousItem = () => {
    let next = selectedItem - 1;
    if (next < 0) next = list.length - 1;
    setSelectedItem(next % list.length);
  };

  return (
    <BasicLayout
      heading={t("common:portfolio")}
      secondaryHeading={t("home:my_word")}
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
            {list.map((item) => (
              <PortfolioItem
                btnText={t("home:visit")}
                key={item.id}
                {...item}
              />
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
