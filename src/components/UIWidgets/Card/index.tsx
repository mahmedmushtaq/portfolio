import { ReactChild } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactChild | ReactChild[];
  className?: string;
}) => {
  return (
    <div className={`shadow-inner p-3 bg-white ${className}`}>{children}</div>
  );
};

export default Card;
