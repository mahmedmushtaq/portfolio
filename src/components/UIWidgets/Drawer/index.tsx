import React, {
  useEffect,
  useState,
  CSSProperties,
  forwardRef,
  DetailedHTMLProps,
  useRef,
} from "react";
import useToCheckOutSideClick from "../../../common/hooks/useToCheckOutSideClick";
import Slide from "../Animations/Slide";
import PropTypes from "./PropTypes";

const fontStyle: CSSProperties = { fontFamily: "Gilroy-bold" };

const Drawer = (props: PropTypes) => {
  const { children, showDrawer, setShowDrawer } = props;

  const ref = useRef<HTMLDivElement>(null);

  useToCheckOutSideClick({
    ref,
    dependencies: [showDrawer],
    onClick: (value: any) => {
      if (showDrawer && value) {
        setShowDrawer(false);
      }
    },
  });

  return (
    <Slide
      showSlide={showDrawer}
      wrapperClassName="left-0 z-50 bg-lbg w-screen fixed bottom-0"
      slideDirection="bottomTop"
    >
      <div ref={ref} className="shadow-inner p-3 bg-white">
        {children}
      </div>
    </Slide>
  );
};

export default Drawer;
