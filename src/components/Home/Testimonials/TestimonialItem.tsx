import { H3, P } from "../../UIWidgets";

interface PropsType {
  imgSrc: string;
  clientName: string;
  companyName: string;
  review: string;
}

const TestimonialItem = ({
  imgSrc,
  clientName,
  companyName,
  review,
}: PropsType) => {
  return (
    <div className="text-left">
      <div className="flex">
        <div>
          <img
            alt="My Client"
            src={imgSrc}
            style={{ borderRadius: 50, width: 100 }}
          />
        </div>
        <div className="ml-2">
          <H3 bold>{clientName}</H3>
          <P top={0}>{companyName}</P>
          <P top={2}>{review}</P>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
