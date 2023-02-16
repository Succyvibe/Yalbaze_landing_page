import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD] "
      />
    </>
  );
};

export default Input;
