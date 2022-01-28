import React from "react";

const H3 = ({
  children,
  className = "",
  bold,
  size = "",
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  bold?: boolean;
  size?: number | string;
}) => {
  return (
    <h3 className={`text-2xl font-gilroy${bold ? "Bold" : ""} ${className}`}>
      {children}
    </h3>
  );
};

export default H3;
