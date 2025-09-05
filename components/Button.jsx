import React from "react";

const Button = ({ children = "Shopping Now", className = "", ...props }) => {
  return (
    <button
      className={`mt-5 w-1/4 h-11 bg-[#38CB89] flex items-center justify-center font-medium text-lg text-[#141718] rounded-md leading-8 tracking-[-0.4px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
