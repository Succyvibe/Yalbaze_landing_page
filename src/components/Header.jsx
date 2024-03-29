import React from "react";
import btn from "../img/btn-border.png";
import Logo from "./Logo";
// import smallelipse from "../img/elipseLarge.png";

const Header = () => {
  return (
    <header className="relative max-w-[1240px] mx-auto px-4 lg:px-8 xl:px-0">
      <div className="lg:pt-10">
        <div className="w-full flex justify-between items-center py-4">
          {/* Logo */}
          <Logo />

          <div className="w-[100px] xl:w-[190px]">
            <button className="w-full border-none outline-none">
              <img src={btn} alt="" className="w-full" />
            </button>
          </div>
        </div>
        <div className="elipseSmall"></div>
      </div>
    </header>
  );
};

export default Header;
