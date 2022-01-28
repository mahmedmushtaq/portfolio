import React, { useEffect, useState, ReactChild } from "react";

interface PropTypes {
  children: ReactChild;
  showSlide: boolean;
  setShowSlide?: Function;
  wrapperClassName?: string;
  slideDirection: "bottomTop" | "topBottom";
}

const Slide = (props: PropTypes) => {
  const { children, showSlide, wrapperClassName = "", slideDirection } = props;


  const visibilityDirection =
    slideDirection === "bottomTop" ? "translate-y-full" : "-translate-y-full";

  const [componentVisibility, setComponentVisibility] =
    useState<string>(visibilityDirection); // hide className

  const [componentHeight, setComponentHeight] = useState<string | number>(
    "h-0"
  );

  useEffect(() => {
    const className = !!showSlide ? "translate-y-0" : visibilityDirection;
    setComponentVisibility(className);
    if (className !== "translate-y-0") {
      setComponentHeight(0);
    } else {
      setComponentHeight("100%");
    }
  }, [showSlide]);

  return (
    <div className="overflow-hidden">
      <div
        className={`trasition ease-in-out duration-1000 transform ${componentVisibility} ${wrapperClassName}`}
      >
        <div
          style={{ height: componentHeight }}
          className={`transition-all duration-1000`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slide;
