import React from "react";
import Wrapper from "../ui/Wrapper";
import { BsArrowRight } from "react-icons/bs";
const ImpactSection = () => {
  return (
    <Wrapper styles="">
      <div className="py-[60px] bg-[#faf7f5] h-[836px]">
        <h1 className="text-primary-blown text-[38px] font-light leading-[56px] mb-[25px] max-w-[988px] mx-auto">
          Impact
        </h1>
        <div className=" h-[576px] relative">
          <img
            className="object-contain lg:object-cover h-full w-full"
            src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1"
            alt=""
          />

          <div className=" flex flex-col gap-1 bg-white pt-[45px] pb-[60px] absolute lg:-bottom-16 -bottom-36  mx-auto inset-x-0 w-full max-w-[576px] h-[306px]">
            <h1 className="text-primary-blown text-[24px] font-light leading-9 mx-[60px]">
              Science to Impact
            </h1>
            <p className="text-[18px] leading-[30px] my-[15px] mx-[60px]">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[18px] leading-[30px] font-[500] ml-[60px]">
                Read more
              </span>
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>

            <div>
              <div className="flex items-center gap-4 justify-end ">
                <div className="hidden lg:flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary-blown rounded-full" />
                  <div className="w-3 h-3 bg-primary-rose rounded-full" />
                  <div className="w-3 h-3 bg-primary-rose rounded-full" />
                  <div className="w-3 h-3 bg-primary-rose rounded-full" />
                </div>
                <div className="bg-primary-orange text-[24px] leading-6 self-end  absolute -top-16 w-[120px] ">
                  <span class="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]">
                    arrow_back_ios
                  </span>
                  <span className="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  w-full flex items-center justify-center py-[44px]">
        <div className="grid lg:grid-cols-2 gap-6 max-w-[1008px] w-full m-4">
          <div className="h-[179px]  bg-white shadow-3xl flex flex-col justify-between py-[25px] px-[30px]">
            <h1 className="text-primary-green text-6 font-light leading-9">
              Ukraine
            </h1>
            <p className="leading-[30px] text-[18px] ">
              Information and support
            </p>
            <BsArrowRight className="self-end" />
          </div>
          <div className="flex flex-col justify-between shadow-3xl h-[179px]  bg-white py-[25px] px-[30px]">
            <h1 className="text-[#3b2171] text-6 font-light leading-9">
              VU & Corona
            </h1>
            <BsArrowRight className="self-end" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImpactSection;
