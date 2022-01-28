import React from "react";
import styles from "./styles.module.css";
import Step, { StepPropTypes } from "./Step";

interface PropTypes extends StepPropTypes {
  isCompleted?: boolean;
  noLabel?: boolean;
  currentStep: number;
  steps: { content: React.ReactChild | string }[];
  isVertical?: boolean;
}

const Stepper = ({
  steps,
  currentStep,
  noLabel = false,
  isVertical = true,
  ...rest
}: PropTypes) => {
  const defualtStep = 1;

  return (
    <div
      className={styles.Stepper}
      style={{
        transform: isVertical ? "rotate(90deg)" : undefined,
        transformOrigin: isVertical ? "0 100%" : undefined,
      }}
    >
      {steps?.map((step, i) => (
        <Step
          key={i}
          showLine={i > 0}
          color="#23b561"
          fontSize="20px"
          fontColor="#18aed6"
          showVIcon={
            currentStep === steps?.length || currentStep > i + defualtStep
          }
          content={noLabel ? undefined : step.content}
          isCompleted={currentStep >= i + defualtStep}
          {...rest}
        />
      ))}
    </div>
  );
};

export default Stepper;
