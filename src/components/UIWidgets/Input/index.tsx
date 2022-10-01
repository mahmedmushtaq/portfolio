import React, { PropsWithChildren, RefAttributes, HTMLAttributes } from "react";
import { Search } from "react-feather";

interface IProps extends RefAttributes<any>, HTMLAttributes<HTMLElement> {
  icon?: "search" | React.ReactNode;
}

const Input = ({ className, icon, placeholder = "Input Box" }: IProps) => {
  return (
    <div style={{ position: "relative" }}>
      {icon === "search" ? (
        <Search className="absolute left-[15px] bottom-[15%]" />
      ) : (
        icon
      )}
      <input
        placeholder={placeholder}
        className={`pl-12 pr-5 py-3  border-lsecondary border-2 rounded-md  ${className}`}
      />
    </div>
  );
};

export default Input;
