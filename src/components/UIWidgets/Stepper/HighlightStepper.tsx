import React from "react";
import { Circle } from "react-feather";
import { H2 } from "..";

interface PropsType {
  children: React.ReactChild | React.ReactChild[];
  noLine?: boolean;
  circleSize?: number;
}

const HighLightStepper = ({ children, noLine, circleSize = 20 }: PropsType) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Circle className="mr-2" fill="#003060" size={circleSize} />
        {!noLine && (
          <div
            className="h-full bg-lprimary ml-2"
            style={{
              width: 2,
            }}
          />
        )}
      </div>

      <div className="pb-10 -mt-2">{children}</div>
    </div>
  );
};

export default HighLightStepper;
