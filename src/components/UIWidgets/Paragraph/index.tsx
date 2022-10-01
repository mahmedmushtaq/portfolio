import { ReactChild, CSSProperties } from "react";

interface PropsType {
  children: ReactChild | ReactChild[];
  className?: string;
  top?: number;
  style?: CSSProperties;
}

const P = ({ children, className = "", top = 5, style }: PropsType) => {
  return (
    <p className={`mt-${top} font-p ${className}`} style={style}>
      {children}
    </p>
  );
};

export default P;
