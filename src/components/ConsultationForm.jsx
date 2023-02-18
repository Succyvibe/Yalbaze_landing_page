import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PopUp from "./PopUp";

const ConsultationForm = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      {toggleModal ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center mt-20 z-30">
          <PopUp />
        </div>
      ) : null}
      <form className=" w-[90%] lg:w-[80%] mx-auto pt-5 lg:pt-0 my-10  flex flex-col gap-6">
        <h2 className="font-[700] text-[16px] lg:text-[24px] leading-[31.2px] text-[white] text-center lg:text-start">
          Book a Consultation with us
        </h2>

        <Input placeholder="Enter your full name" type="text" />

        <Input type="text" placeholder="Enter your work email" />

        <Input type="number" placeholder="Mobile number" />
        <Input type="text" placeholder="Company Name" />

        <select
          type=""
          placeholder="Select Country"
          className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD] "
        ></select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Drop a message..."
          className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD]"
        ></textarea>

        <div className="w-full">
          <div class="formBtn ">
            <div className="inner"></div>
            <Button text="Send Request" />
          </div>
        </div>
      </form>
    </>
  );
};

export default ConsultationForm;
