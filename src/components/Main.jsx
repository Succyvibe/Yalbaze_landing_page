import React from "react";
// import elipse from "../img/elipseLarge.png";
import userIcon from "../img/profilecircle.png";
import zigzagLine from "../img/zizagLine.png";
import houseIcon from "../img/house.png";
import phoneIcon from "../img/phone.png";
// import starBig from "../img/Starbig.png";
import starSmall from "../img/StarSm.png";
import hook from "../img/hookLine.png";
import highlight from "../img/Highlight.png";
import bg from "../img/elipseBg.png";

const Main = () => {
  return (
    <main className="max-w-[1240px] mx-auto relative">
      {/* ======================POSITIONED ITEMS=== */}

      <section className="w-full xl:mb-[50px]">
        <div className="w-full">
          <div className="w-full xl:w-[802px] mx-auto lg:text-center pt-12 relative">
            <div className="w-[20px] h-[24px] md:w-[32px] md:h-[40px] absolute top-[5%] left-[20%]">
              <img src={starSmall} alt="" className="w-full h-full" />
            </div>
            <div className=" w-[20px] h-[24px] md:w-[32px] md:h-[40px] absolute top-[40%] right-[8px] md:top-[70%] md:right-[8px] lg:top-[60%] lg:right-[4%] xl:right-[-4%] ">
              <img src={starSmall} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[40px] xl:w-[48px] xl:h-[64px] absolute bottom-[-210%] right-[8px] md:right-[-30%] hidden">
              <img src={starSmall} alt="" className="w-full h-full" />
            </div>
            <div className=" xl:w-[48px] xl:h-[64px] absolute bottom-[-230%] left-[-34%] hidden">
              <img src={starSmall} alt="" className="w-full h-full" />
            </div>

            <div className="relative px-4">
              <h1 className="text-center text-white font-[900]  text-[25px] md:text-[40px] lg:text-[60px] leading-1 md:leading-[50px] lg:leading-[83.2px]">
                Turn your best customers into{" "}
                <span className="text-[#A75FD2] font-[900]   md:leading-[50px] lg:leading-[83.2px]">
                  Loyal fans
                </span>{" "}
              </h1>
              <div className="absolute top-[20%] left-[40%] w-40 h-40 lg:h-48 lg:w-48">
                <img src={bg} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[938px] mx-auto text-center  px-4 xl:px-0">
            <p className="text-white font-[400] text-[18px] lg:text-[24px] md:leading-[31.2px] ">
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </p>
          </div>
          <form className=" md:w-[443px] mx-auto flex flex-col gap-[24px] mt-10 relative px-4 lg:px-0">
            <div className=" w-[57.4px] h-[126.94px] absolute bottom-[65%] right-[-30%] hidden">
              <img src={hook} alt="hook line" className="w-full h-full" />
            </div>
            <div className="flex py-[14px] px-[12px] gap-[8px] rounded-[8px]  border-[1px] border-white">
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
            <div className="flex py-[14px] px-[12px] gap-[8px] rounded-[8px]  border-[1px] border-white">
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
                <button className=" leading-[22px] text-[16px] font-[700]">
                  Get early access
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="elipse"></div>
        <div className="elipseBlur"></div>
        <div className=" w-full pt-4">
          <div className="w-[206px] mx-auto flex  items-center ">
            <div className=" w-[80px] lg:w-[110px] flex relative">
              <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-[#175CE1] rounded-full flex items-center justify-center text-white z-[50]">
                <p>G</p>
              </div>
              <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-[#A75FD2] rounded-full flex items-center justify-center text-white z-[40] absolute top-[0] left-[20%]">
                <p>O</p>
              </div>
              <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-[#175CE1] rounded-full flex items-center justify-center text-white z-[30]  absolute top-[0] left-[40%]">
                <p>U</p>
              </div>
              <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-[#A75FD2] rounded-full flex items-center justify-center text-white z-[20]  absolute top-[0] left-[60%]">
                <p>M</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white leading-[22px] text-[12px] md:text-[16px] font-[700]">
                +57 Joined
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative">
        <div className="w-full pt-20 md:pt-28 xl:pt-40">
          <div className="elipseSmallTwo "></div>
          <div className="higlight absolute top-[29%]  left-[5%] lg:top-[15%] lg:left-[40%] ">
            <img src={highlight} alt="" />
          </div>
          <div className="hidden lg:block higlight absolute top-[6%] lg:right-12 xl:right-[0%] ">
            <img src={highlight} alt="" />
          </div>
          <div className=" w-[32px] h-[40px] absolute top-[10%] left-[18%] hidden">
            <img src={starSmall} alt="" className="w-full h-full" />
          </div>
          <div className="lg:flex items-center justify-between lg:px-8 xl:px-0">
            <div className="w-full px-4 md:px-0 md:w-[60%] md:mx-auto lg:mx-0 lg:w-[50%] xl:w-[525px] relative ">
              {/* =================bg-============= */}
              <div className="absolute top-[20%] left-[-5%] w-40 h-40 lg:h-48 lg:w-48">
                <img src={bg} alt="" />
              </div>
              <h2 className="text-[#FCFCFC] font-[700] text-[30px] lg:text-[64px] leading-[130%] text-center lg:text-start">
                Priority Access
              </h2>
              <div className="w-full xl:w-[525px]">
                <div className="w-[100px] xl:w-[169px] xl:h-[64px] mx-auto ">
                  <img src={zigzagLine} alt="line" className="w-full h-full" />
                </div>
              </div>
              <p className="text-[#FCFCFC] text-center lg:text-start font-[500] text-[16px] xl:text-[24px] leading-[31.2px] mt-4 lg:mt-8">
                Get ready to revolutionize the way you interact with your
                customers and drive sales with Loyalbaze. Skip the waitlist and
                get exclusive priority access to LoyalBaze. Limited slots
                available. Please tell us a bit about your business and needs
                and of our consultants will be in touch Immediately!
              </p>

              <div className=" w-[32px] h-[40px] absolute bottom-[-10%] right-[0%] ">
                <img src={starSmall} alt="" className="w-full h-full" />
              </div>
            </div>

            {/* ==========FORM============= */}
            <div className="w-full md:w-[60%] md:mx-auto lg:w-[50%] xl:w-[633px] lg:mx-0 bg-[#1D2939] rounded-[20px] h-[837px] relative">
              <div className=" w-[32px] h-[40px] absolute bottom-[-6%] lg:bottom-[-10%] right-[0%] ">
                <img src={starSmall} alt="" className="w-full h-full" />
              </div>
              <form className=" w-[90%] lg:w-[80%] mx-auto pt-5 lg:pt-0 my-10 flex flex-col gap-6">
                <h2 className="font-[700] text-[16px] lg:text-[24px] leading-[31.2px] text-[white] text-center lg:text-start">
                  Book a Consultation with us
                </h2>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD] "
                />
                <input
                  type="text"
                  placeholder="Enter your work email"
                  className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD] "
                />
                <input
                  type="number"
                  placeholder="Mobile number"
                  className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD] "
                />
                <input
                  type="Company Name"
                  placeholder="Mobile number"
                  className="bg-transparent p-[16px] text-white w-full  rounded-[8px]  border-[1px] border-[#DDDDDD] "
                />

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
                    <button className=" leading-[22px] text-[16px] font-[700]">
                      Send Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <section className="mt-[80px] xl:mt-[200px] border-t py-8">
          <div className="w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-between items-center px-4 xl:px-0 space-y-4">
            <div className="flex space-x-4 items-center md:items-start">
              <div>
                <img src={houseIcon} alt="" />
              </div>
              <p className="font-[400] text-[13px] md:text-[16px]  text-white leading-[21.6px]">
                2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway,
                Lagos, Nigeria.
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
    </main>
  );
};

export default Main;
