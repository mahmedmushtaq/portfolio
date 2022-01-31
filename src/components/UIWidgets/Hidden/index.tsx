import { ReactChild } from "react";


const Hidden = ({ children, hidden }: { children: ReactChild | ReactChild[], hidden: "sm" | "md" | "lg" }) => {
  return <div className={`${hidden}:hidden`}>{children}</div>;
};

export default Hidden;
