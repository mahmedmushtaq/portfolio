import { ArrowRight } from "react-feather";
import { H3, H2, P, Button } from "../../UIWidgets";

interface PropsType {
  id: string;
  heading: string;
  imgSrc: string;
  description: string;
  link: string;
}

const PortfolioItem = (props: PropsType) => {
  const { heading, imgSrc, description, link } = props;

  return (
    <div className="md:flex justify-around items-center">
      <div>
        <H3 bold className="pb-3">
          {heading}
        </H3>
        <img alt="Portfolio" style={{ width: 400 }} src={imgSrc} />
      </div>
      <div className=" basis-2/4 px-5">
        <P className="text-left">{description}</P>
        <a href={link} target="_blank" rel="noreferrer">
          <Button
            text={"Visit"}
            variant="outlined"
            icon={<ArrowRight className="ml-2" />}
            className="!mt-3 !py-2 px-5"
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
