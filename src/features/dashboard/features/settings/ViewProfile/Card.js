import React from "react";

const Card = () => {
  return (
    <div>
      <div>
        <div className="flex justify-end px-28 py-4">
          <img className="cursor-pointer" src="/imgs/dropdown.svg" alt="" />
        </div>
        <div className="mx-20 flex justify-between bg-[#04A5C2] py-10 px-10 rounded-lg">
          <h1 className="text-[26px] font-semibold text-white">
            Favourites Sport
          </h1>
          <img src="/imgs/heart.svg" />
        </div>
        <div className="bg-[#FAFAFA] px-16 py-10 mx-20 flex justify-between rounded-sm">
          <div>
            <img src="/imgs/Group 162902.svg" />
          </div>
          <div>
            <img src="/imgs/Group 162903.svg" />
          </div>
          <div>
            <img src="/imgs/Group 162902.svg" />
          </div>
          <div>
            <img src="/imgs/Group 162905.svg" />
          </div>
          <div>
            <img src="/imgs/Group 162903.svg" />
          </div>
          <div>
            <img src="/imgs/Group 162903.svg" />
          </div>
          <div>
            <img src="/imgs/Group 162903.svg" />
          </div>
        </div>
        <div className="mx-20 flex justify-between bg-[#04A5C2] py-10 px-10 rounded-lg my-20">
          <h1 className="text-[26px] font-semibold text-white">
            Created Events
          </h1>
        </div>
        <div className="mx-20 flex justify-between bg-[#04A5C2] py-10 px-10 rounded-lg">
          <h1 className="text-[26px] font-semibold text-white">
            Joined Events
          </h1>
          <img src="/imgs/bandy.svg" />
        </div>
      </div>
    </div>
  );
};

export default Card;
