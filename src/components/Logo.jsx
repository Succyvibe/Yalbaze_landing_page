import React from "react";
import logo from "../img/logo.png";

const Logo = () => {
  return (
    <>
      <div className="w-[100px] xl:w-[231px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
    </>
  );
};

export default Logo;
