import React from "react";
import check from "../img/check.png";

const PopUp = () => {
  return (
    <>
      <div className="w-full md:w-[446px] h-[475px] bg-[#15141B] rounded-[20px]">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4  text-white">
          <div>
            <img src={check} alt="" />
          </div>
          <div className="w-[80%] mx-auto">
            <h4 className="text-white font-[700] text-[]24px leading-[32.4px] text-center">
              Congratulations
            </h4>
            <p className="text-[16px] leading-[21.6px] text-white/90 text-center">
              Great move! You're one step closer to getting your hands on the
              product. Please check your mail for more information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
