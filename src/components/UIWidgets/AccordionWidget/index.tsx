import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { H2, P } from "..";

type AccordionProps = {
  icon: React.ReactChild;
  description: string;
  heading: string;
  children?: React.ReactChild;
};
const Accordion = ({
  heading,
  description,
  children,
  icon,
}: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef<HTMLDivElement>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement!.current!.scrollHeight}px` : "0px");
  };
  return (
    <div className="cursor-pointer" onClick={HandleOpening}>
      <div className={"flex text-white"}>
        <div className="mt-2 mr-2">{icon}</div>
        <div>
          <H2 className="!text-lg">{heading}</H2>
          <P className="!mt-0">{description}</P>
          <div
            ref={contentElement}
            style={{ height: height }}
            className="overflow-hidden transition-all duration-1000"
          >
            {children}
          </div>
        </div>
        <div className=" cursor-pointer">
          {isOpened ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
