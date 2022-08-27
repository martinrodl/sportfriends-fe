import React from "react";

const Participants = () => {
  return (
    <div className="w-full border-t border-b border-dotted border-black my-9">
      <div className=" ">
        <h1 className="text-center text-base md:text-[28px] font-bold text-[#F1A038] md:text-[#000] pt-7">
          Participants
        </h1>
        <div className="flex justify-center gap-20 md:gap-32 text-[12px] md:text-2xl font-normal py-8">
          <h1>
            Left: <a className="text-[#E50027]">10</a>
          </h1>
          <h1>Min: 2</h1>
          <h1>Max: 6</h1>
        </div>
      </div>
    </div>
  );
};

export default Participants;
