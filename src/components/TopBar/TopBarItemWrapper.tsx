import { X } from "react-feather";
import ScrollIntoView from "react-scroll-into-view";
import { H3, LinkWrapper } from "../UIWidgets";
import React from "react";

interface IProps {
  redirectToHome?: boolean;
  id: number;
  pageLink?: string;
  heading: string;
  Icon: React.ElementType;
  isComputerScreen?: boolean;
  redirectLink?: string;
}

const TopBarItemWrapper = ({
  redirectToHome,
  id,
  pageLink,
  heading,
  Icon,
  isComputerScreen = false,
  redirectLink,
}: IProps) => {
  const isRedirection = redirectToHome || redirectLink;
  const Link = isRedirection ? LinkWrapper : ScrollIntoView;

  return (
    <Link
      key={id}
      {...(!isRedirection
        ? { selector: pageLink }
        : ({ link: redirectLink || "/", noHoverEffect: true } as any))}
    >
      {!isComputerScreen ? (
        <div className="mb-4" key={id}>
          <Icon className="mx-auto cursor-pointer hover:text-lprimary" />
          <h3 className="text-sm font-p">{heading}</h3>
        </div>
      ) : (
        <H3 className="!text-lg mx-3 cursor-pointer hover:text-lprimary" bold>
          {heading}
        </H3>
      )}
    </Link>
  );
};

export default TopBarItemWrapper;
