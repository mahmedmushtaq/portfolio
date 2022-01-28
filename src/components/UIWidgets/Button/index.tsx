import React from "react";
import useToSetClassNamePriority from "../../../common/hooks/useToSetClassNamePriority";

interface PropsType {
  text: string | React.ReactChild;
  icon?: React.ReactChild;
  className?: string;
  variant?: "contained" | "outlined";
  center?: boolean;
}

const Button = ({
  text,
  icon,
  className,
  variant = "contained",
  center,
}: PropsType) => {
  const bg = variant === "contained" ? "bg-lsecondary" : "";
  const textColor = variant === "contained" ? "text-lbg" : "";
  const centerBtn = center ? "mx-auto" : "";
  return (
    <button
      className={`border-solid border-2 p-4 border-lprimary rounded-xl ${bg} ${textColor} flex ${className} ${centerBtn}`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
