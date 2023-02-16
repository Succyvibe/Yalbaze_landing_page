import React from "react";
import houseIcon from "../img/house.png";
import phoneIcon from "../img/phone.png";

const Footer = () => {
  return (
    <footer>
      <section className="mt-[80px] xl:mt-[140px] border-t py-8 xl:pt-8 xl:pb-16">
        <div className="w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-between items-center px-4 xl:px-0 space-y-4">
          <div className="flex space-x-4 items-center md:items-start">
            <div>
              <img src={houseIcon} alt="" />
            </div>
            <p className="font-[400] text-[13px] md:text-[16px]  text-white leading-[21.6px]">
              2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
              Nigeria.
            </p>
          </div>
          <div>
            <p className="font-[700] text-[16px] md:text-[20px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]/80 leading-[27px] text-center xl:text-end t-4">
              Loyalbaze is almost here.
            </p>
          </div>
          <div className="flex space-x-4 xl:justify-end">
            <div>
              <img src={phoneIcon} alt="" />
            </div>
            <p className="font-[400] text-[13px] md:text-[16px] text-white leading-[21.6px]">
              +2349036189485
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
