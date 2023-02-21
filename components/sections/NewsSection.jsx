import React from "react";
import Wrapper from "../ui/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";

const NewsSection = () => {
  return (
    <Wrapper>
      <div className="bg-primary-yellow-200">
      <div className="max-w-[1028px] mx-auto py-[60px] px-5 ">
        <h1 className="text-[#3b2171] text-[38px] font-light leading-[56px] mb-[25px]">
          News
        </h1>
        <div className="grid lg:grid-cols-8 max-w-[1028px] mx-auto py-[60px] px-5">
          <div className="flex flex-col col-span-5 gap-2">
            <div className="grid grid-cols-2 lg:h-[216px] gap-4">
              <img
                className="object-cover h-full"
                src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png"
                alt=""
              />
              <div className="flex flex-col justify-between lg:px-[30px]">
                <div>
                  <p className="text-[#3b2171] text-[18px] font-[700] leading-[30px] mb-[10px]">
                    08 Feb 2023
                  </p>
                  <p className="text-[18px] lg:text-[24px] font-light leading-[30px] lg:mr-[25px]">
                    Earthquakes Turkey and Syria
                  </p>
                </div>

                <AiOutlineArrowRight className="self-end" />
              </div>
            </div>
            <div className="grid grid-cols-2  lg:h-[216px] gap-4">
              <img
                className="object-cover h-full"
                src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png"
                alt=""
              />
              <div className="flex flex-col justify-between lg:px-[30px]">
                <div>
                  <p className="text-[#3b2171] text-[18px] font-[700] leading-[30px] mb-[10px]">
                    08 Feb 2023
                  </p>
                  <p className="text-[18px] lg:text-[24px] font-light leading-[30px] lg:mr-[25px]">
                    Earthquakes Turkey and Syria
                  </p>
                </div>

                <AiOutlineArrowRight className="self-end" />
              </div>
            </div>
          </div>
          <div className="w-full col-span-3 flex flex-col md:flex-row lg:flex-col gap-4 justify-between mt-2">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:h-[90px]">
            
              <img
                className="object-cover h-full"
                src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg"
                alt=""
              />
              <div className="flex flex-col lg:col-span-2  lg:pl-[30px]">
                <div>
                  <p className="text-[#3b2171] text-[18px] font-[700] leading-[30px] ">
                    08 Feb 2023
                  </p>
                  <p className="text-[18px]  font-light leading-[30px] lg:mr-[25px]">
                  Earthquakes Turkey and Syria
                  </p>
                </div>
                <span class="material-symbols-outlined self-end">
arrow_forward
</span>
              </div>
            </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:h-[90px]">
            
              <img
                className="object-cover h-full"
                src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720"
                alt=""
              />
              <div className="flex flex-col lg:col-span-2  lg:pl-[30px]">
                <div>
                  <p className="text-[#3b2171] text-[18px] font-[700] leading-[30px] ">
                    08 Feb 2023
                  </p>
                  <p className="text-[18px]  font-light leading-[30px] lg:mr-[25px]">
                  Earthquakes Turkey and Syria
                  </p>
                </div>
                <span class="material-symbols-outlined self-end">
arrow_forward
</span>
              </div>
            </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:h-[90px]">
            
              <img
                className="object-cover h-full"
                src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png"
                alt=""
              />
              <div className="flex flex-col lg:col-span-2  lg:pl-[30px]">
                <div>
                  <p className="text-[#3b2171] text-[18px] font-[700] leading-[30px] ">
                    08 Feb 2023
                  </p>
                  <p className="text-[18px]  font-light leading-[30px] lg:mr-[25px]">
                  Earthquakes Turkey and Syria
                  </p>
                </div>
                <span class="material-symbols-outlined self-end">
arrow_forward
</span>
              </div>
            </div>
          
          </div>
        </div>
      </div></div>
    </Wrapper>
  );
};

export default NewsSection;
