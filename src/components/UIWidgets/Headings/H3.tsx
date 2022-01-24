import React from "react";

const H3 = ({
  children,
  className,
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}) => {
  return <h3 className={`text-xl font-gilroy ${className}`}>{children}</h3>;
};

export default H3;
