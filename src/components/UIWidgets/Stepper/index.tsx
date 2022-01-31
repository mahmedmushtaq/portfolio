import React from "react";
import { Circle } from "react-feather";
import { H2 } from "..";

interface PropsType {
  children: React.ReactChild | React.ReactChild[];

  circleSize?: number;
}

const Stepper = ({ children, circleSize = 20 }: PropsType) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Circle className="mr-2" fill="#003060" size={circleSize} />

        <div
          className={`md:hidden h-full bg-lprimary ml-2`}
          style={{
            width: 2,
          }}
        />
      </div>

      <div className="pb-10 -mt-2">{children}</div>
    </div>
  );
};

export default Stepper;
