import React from "react";
import Wrapper from "../ui/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";

const LookSection = () => {
  return (
    <Wrapper styles="bg-[#faf7f5] h-[441px] flex items-center justify-center">
      <div className="grid lg:grid-cols-8">
        <div />
        <div className="col-span-2">
          <div className="h-[321px]">
            <h1 className="text-primary-green text-[38px] font-light leading-[56px] mb-[25px]">
              Take a look
            </h1>
            <div className="flex flex-col justify-between bg-white w-[316px] h-[240px] p-[30px] shadow-3xl">
              <h1 className="text-primary-green text-[24px] font-light leading-9 mb-15">
                VU Campus Tour
              </h1>
              <AiOutlineArrowRight className="font-light text-[18px] leading-[18px] mt-[5px] mb-15 self-end" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LookSection;
