import React from "react";
import Wrapper from "../ui/Wrapper";
import { BsArrowRight } from "react-icons/bs";
const ImpactSection = () => {
  return (
    <Wrapper styles="">
      <div className="py-[60px] bg-[#faf7f5] h-[836px]">
        <h1 className="text-[#cc4100] text-[38px] font-[300] leading-[56px] mb-[25px] max-w-[988px] mx-auto">
          Impact
        </h1>
        <div className="">
          <img
            className="object-cover h-[575px] w-full"
            src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1"
            alt=""
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="h-[179px] w-[484px] bg-white flex flex-col justify-between py-[25px] px-[30px]">
            <h1 className="text-[#008053] text-6 font-[300] leading-[36px]">
              Ukraine
            </h1>
            <p className="leading-[30px] text-[18px] ">
              Information and support
            </p>
            <BsArrowRight className="self-end" />
          </div>
          <div className="flex flex-col justify-between h-[179px] w-[484px] bg-white py-[25px] px-[30px]">
            <h1 className="text-[#3b2171] text-6 font-[300] leading-[36px]">
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
