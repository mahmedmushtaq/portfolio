import React from "react";
import styles from "./styles.module.css";

export interface StepPropTypes {
  isCompleted?: boolean;
  content?: string | React.ReactChild;
  showLine?: boolean;
  showVIcon?: boolean;
  fontSize?: number | string;
  fontColor?: string;
  color?: string;
  iconSize?: number;
}

const Step = ({
  isCompleted,
  content,
  showLine,
  showVIcon,
  fontSize,
  fontColor,
  color,
  iconSize = 15,
}: StepPropTypes) => {
  return (
    <div className={styles.Step}>
      {showLine && (
        <div
          className={`${styles.StepLineThrough}`}
          style={{
            backgroundColor: isCompleted ? color || "#000000" : "",
            transform: `translateY(-${+iconSize / 2}px)`,
          }}
        ></div>
      )}
      <div
        style={{ color: fontColor || "#000000", fontSize: fontSize || "24px" }}
        className={styles.StepName}
      >
        {content}
      </div>
      <div
        style={{
          backgroundColor: isCompleted ? color || "#000000" : "",
          borderColor: color || "#000000",
          width: iconSize,
          height: iconSize,
        }}
        className={`${styles.StepShape} ${isCompleted ? styles.stepDone : ""}`}
      >
        {showVIcon && (
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="icons/20/v"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="Shape"
                fill="#ffffff"
                points="7 14.17 2.83 10 1.41 11.41 7 17 19 5 17.59 3.59"
              ></polygon>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Step;
