import { H3, P } from "../../UIWidgets";

interface PropsType {
  imgSrc: string;
  clientName: string;
  companyName: string;
  review: string;
  className?: string;
}

const TestimonialItem = ({
  imgSrc,
  clientName,
  companyName = "",
  className,
  review,
}: PropsType) => {
  return (
    <div className={`text-left  ${className}`}>
      <div className="flex">
        <div>
          <img
            alt="My Client"
            src={imgSrc}
            style={{ borderRadius: 50, minWidth: 50, maxWidth: 50 }}
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
