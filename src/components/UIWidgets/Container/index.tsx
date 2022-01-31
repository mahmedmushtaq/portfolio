import { ReactChild } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactChild | ReactChild[];
  className?: string;
}) => {
  return (
    <div
      style={{
        maxWidth: 1334,
        margin: "0 auto",
      }}
      className={`md:px-8 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
