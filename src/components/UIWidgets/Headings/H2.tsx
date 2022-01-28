import React from "react";

const H2 = ({
  children,
  className = "",
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}) => {
  return (
    <h2 className={`text-4xl font-gilroyBold ${className}`}>{children}</h2>
  );
};

export default H2;
