import { ReactChild } from "react";

interface PropsType {
  children: ReactChild | ReactChild[];
  className?: string;
  top?: number;
}

const P = ({ children, className = "", top = 5 }: PropsType) => {
  return <p className={`mt-${top} font-p ${className}`}>{children}</p>;
};

export default P;
