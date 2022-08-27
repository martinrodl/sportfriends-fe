import React from "react";

const Join = () => {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[11px]">
      <div className=" py-14 px-14">
        <h1 className="text-[24px] font-bold text-[#000] text-center">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="block md:flex justify-between gap-10 pt-10">
          <div className="bg-primary rounded-[14px] text-center px-16">
            <h1 className="text-2xl font-black text-[#ffff] pt-5">29 Aug </h1>
            <h1 className="text-2xl font-medium text-[#000] pt-4">22:08</h1>
            <h1 className="text-3xl font-medium text-[#000] pt-3">-</h1>
            <h1 className="text-2xl font-medium text-[#000] pt-2 pb-5">
              01:08
            </h1>
          </div>
          <div className="text-center">
            <div className="flex justify-center gap-2 md:pt-0 pt-10">
              <img src="/imgs/placeholder 1.svg" />
              <a className="text-2xl font-medium text-[#E50027]">Barca</a>
            </div>
            <h1 className="text-2xl font-medium text-[#F1A038] py-10 md:py-16">
              [Outdoor]
            </h1>
            <a className="md:px-20 md:py-4 px-14 py-3 rounded-full text-white text-2xl font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              Join
            </a>
          </div>
          <div className="text-center pt-12">
            <img className="ml-16" src="/imgs/Frame.svg" />
            <h1 className="text-2xl font-normal text-[#000] py-8">Football</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
