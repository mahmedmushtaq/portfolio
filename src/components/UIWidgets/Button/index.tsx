import React, { ComponentType } from "react";

interface PropsType {
  text: string | React.ReactChild;
  icon?: React.ReactChild;
}

const Button = ({ text, icon }: PropsType) => {
  return (
    <button className="border-solid border-2 p-4 border-lprimary rounded-xl bg-lsecondary text-lbg flex">
      {text} {icon}
    </button>
  );
};

export default Button;
