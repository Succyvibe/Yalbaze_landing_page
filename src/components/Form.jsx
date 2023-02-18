import React, { useState } from "react";
import hook from "../img/hookLine.png";
import userIcon from "../img/profilecircle.png";
import Button from "./Button";
import PopUp from "./PopUp";

const Form = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      {toggleModal ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center mt-20 z-30">
          <PopUp />
        </div>
      ) : null}

      <form className=" md:w-[443px] mx-auto flex flex-col gap-[24px] mt-10 xl:mt-12 relative px-4 lg:px-0">
        <div className=" w-[57.4px] h-[126.94px] absolute bottom-[65%] right-[-30%] hidden lg:block rotate-45">
          <img
            src={hook}
            alt="hook line"
            className="w-full h-full rotate-[-20deg]"
          />
        </div>
        <div className="flex items-center py-[14px] px-[12px] gap-[8px] rounded-[8px]  border-[1px] border-white">
          <div className="w-[20px] h-[20px] rounded-full">
            <img
              src={userIcon}
              alt="user icon"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <input
            type="text"
            placeholder="Tell us your name"
            className="bg-transparent flex-1"
          />
        </div>
        <div className="flex items-center py-[14px] px-[12px] gap-[8px] rounded-[8px]  border-[1px] border-white">
          <div className="w-[20px] h-[20px] rounded-full">
            <img
              src={userIcon}
              alt="user icon"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <input
            type="text"
            placeholder="Tell us your name"
            className="bg-transparent flex-1"
          />
        </div>
        <div className="flex justify-center md:block">
          <div class="btn">
            <div className="inner"></div>
            <Button text="Get early access" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
