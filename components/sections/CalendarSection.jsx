import React from "react";
import Wrapper from "../ui/Wrapper";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import AnnouncementCard from "../ui/AnnouncementCard";

const CalendarSection = () => {
  return (
    <div>
      <Wrapper styles="bg-white">
        <div className="w-full  max-w-[1008px] mx-auto py-[60px] px-5">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <h1 className="text-primary-blue text-[38px] font-light leading-[56px] w-full max-w-[224px]">
                Calendar
              </h1>
              <div className="flex items-center gap-6">
              <div className="flex items-center w-screen max-w-[232px]  whitespace-nowrap justify-between py-[10px] lg:px-5 bg-white shadow-3xl">
                
                <span className="leading-[30px] font-[500] text-[18px] pl-[30px]">
                  All categories
                </span>
                <span class="material-symbols-outlined font-light  text-[30px] leading-[30px]">
expand_more
</span>
              </div>
              <div className="flex items-center w-screen max-w-[232px]  justify-between py-[10px] lg:px-5 bg-white shadow-3xl">
                <span className="leading-[30px] font-[500] text-[18px] pl-[30px]">
                  Date
                </span>
                <span class="material-symbols-outlined font-light  text-[30px] leading-[30px]">
expand_more
</span>
              </div>
              </div>
            </div>
          <div className="flex overflow-x-scroll scrollbar-hide w-full max-w-[1008px] lg:gap-8 py-16">
            <div className="flex flex-col gap-16">
              
              <div className=" w-[232px]">
                <p className="underline text-[18px] font-light leading-[30px] mb-[5px]">
                  Other events
                </p>
                <p className="text-primary-blue text-[18px] leading-[30px] font-[700] mb-[5px]">
                  21 February 2023
                </p>
                <p className="text-[24px] font-light leading-[30px]">
                  ABRI Writing Boost
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16 w-[232px]">
            
              <div className=" w-[232px]">
                <p className="underline text-[18px] font-light leading-[30px] mb-[5px]">
                  Lectures
                </p>
                <p className="text-primary-blue text-[18px] leading-[30px] font-[700] mb-[5px]">
                  21 February 2023
                </p>
                <p className="text-[24px] font-light leading-[30px]">
                  ABRI lunch seminar Dr. Paula Jarzabkowski
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16 w-[232px]">
            
              <div className=" w-[232px]">
                <p className="underline text-[18px] font-light leading-[30px] mb-[5px]">
                Social events
                </p>
                <p className="text-primary-blue text-[18px] leading-[30px] font-[700] mb-[5px]">
                  21 February 2023
                </p>
                <p className="text-[24px] font-light leading-[30px]">
                Board game night - Life is Better in 3D
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16 w-[232px]">
            
              <div className=" w-[232px]">
                <p className="underline text-[18px] font-light leading-[30px] mb-[5px]">
                Other events
                </p>
                <p className="text-primary-blue text-[18px] leading-[30px] font-[700] mb-[5px]">
                  21 February 2023
                </p>
                <p className="text-[24px] font-light leading-[30px]">
                VU Pride TalkS!
                </p>
              </div>
            </div>
          </div>
          <hr className="hidden lg:block py-[0.5px] bg-primary-blue px-4" />
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-[18px] font-[500] leading-[30px] ">
                View calendar
              </span>
              <span class="material-symbols-outlined font-light leading-[30px] text-[28px]">
                arrow_right_alt
              </span>
            </div>

            <div className="hidden lg:block bg-primary-sky text-[24px] leading-6 self-end">
              <span class="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]">
                arrow_back_ios
              </span>
              <span className="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>{" "}
      </Wrapper>
      <Wrapper styles="">
      <AnnouncementCard title="Working at VU Amsterdam?" subTitle="Take a look at our vacancies!"/>
       
      </Wrapper>
    </div>
  );
};

export default CalendarSection;
