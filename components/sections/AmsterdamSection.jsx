import React from "react";
import Wrapper from "../ui/Wrapper";
import AmsterdamCard from "../ui/AmsterdamCard";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const AmsterdamSection = () => {
  return (
    <Wrapper className="">
      <div className="flex flex-col bg-white py-[60px]">
      <h1 className="text-primary-blown text-[30px] leading-[36px] mb-[15px] lg:text-[38px] font-light leading-[56px] lg:mb-[25px] whitespace-nowrap w-full max-w-[988px] mx-auto">
        We are VU Amsterdam
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {[
          {
            image:
              "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1",
            title: "Vrije Schrijver (Writer in Residence)",
          },
          {
            image:
              "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&dpr=1",
            title: "VU Dream Teams",
          },
          {
            image:
              "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1",
            title: "Gravitation Grant recipient Frank van Harmelen",
          },
          {
            image:
              "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1",
            title: "NWO Spinoza Prize winner Yvette van Kooyk",
          },
        ].map((item, index) => (
          <AmsterdamCard key={index} {...item} />
        ))}
      </div>
      <div className="hidden lg:block bg-primary-orange text-[24px] leading-6 self-end w-[120px] ml-auto">
        <span class="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-thin">
          arrow_back_ios
        </span>
        <span className="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-thin">
          arrow_forward_ios
        </span>
      </div></div>
    </Wrapper>
  );
};

export default AmsterdamSection;
