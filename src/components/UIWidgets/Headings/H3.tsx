import React from "react";

const H3 = ({
  children,
  className = "",
  bold,
  size = "",
  style,
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  bold?: boolean;
  size?: number | string;
  style?: React.CSSProperties;
}) => {
  return (
    <h3
      className={`text-2xl font-gilroy${bold ? "Bold" : ""} ${className}`}
      style={style}
    >
      {children}
    </h3>
  );
};

export default H3;
