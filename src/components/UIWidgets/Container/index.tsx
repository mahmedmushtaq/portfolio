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
        padding: "0 82px",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Container;
