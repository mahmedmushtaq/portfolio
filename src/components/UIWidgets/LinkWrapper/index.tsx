import Link from "next/link";
import React from "react";

interface IProps {
  text?: string;
  link: string;
  children?: React.ReactChild;
  noHoverEffect?: boolean;
  className?: string;
}

const LinkWrapper = ({
  text,
  link,
  children,
  noHoverEffect,
  className,
}: IProps) => {
  return (
    <Link href={link}>
      <a
        className={`${noHoverEffect ? "" : "hover:text-lprimary"} ${className}`}
      >
        {text || children}
      </a>
    </Link>
  );
};

export default LinkWrapper;
