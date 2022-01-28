import { ReactChild } from "react";
import { H2, H3 } from "../components/UIWidgets";

interface PropsType {
  heading: string;
  secondaryHeading: string;
  children: ReactChild | ReactChild[];
  contentTopMargin?: 12 | 5 | 0;
  className?: string;
}

const BasicLayout = ({
  heading,
  secondaryHeading,
  children,
  contentTopMargin = 5,
  className = "",
}: PropsType) => {
  return (
    <div className={`mt-16 ${className}`}>
      <div className="text-center">
        <H2 className="text-2xl">{heading}</H2>
        <H3 className="text-lg">{secondaryHeading}</H3>
      </div>
      <div className={`mt-${contentTopMargin}`}>{children}</div>
    </div>
  );
};

export default BasicLayout;
