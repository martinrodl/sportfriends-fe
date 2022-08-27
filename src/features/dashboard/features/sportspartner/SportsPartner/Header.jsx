import React, { useState } from "react";

const Header = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  return (
    <div className="w-full py-10">
      <div className="flex justify-between bg-[#04A5C2] py-5 px-8 rounded-sm shadow-xl mb-4">
        <h1 className="text-white text-2xl font-semibold flex self-center">
          Find Sport Partner
        </h1>
        <img src="/imgs/heaert.svg" alt="" className=" flex self-center" />
      </div>
      <div className="flex justify-between px-5 py-5">
        <div className="flex self-center">
          <a className="bg-primary text-white rounded-full min-w-[133px] min-h-[38px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
            Add
          </a>
        </div>
        <div
          className="flex self-center gap-x-6 cursor-pointer relative"
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <span className="text-[#9A9A9A] text-lg flex self-center">
            Filtered By
          </span>
          <img src="/imgs/filters.svg" alt="" className="cursor-pointer w-8" />
          {activeFilter && (
            <div className="absolute top-10 flex bg-white px-3 py-3 shadow-md flex-col">
              {filters.map((item, index) => {
                return (
                  <div key={index} className="flex  justify-between gap-x-8">
                    <span className="text-[#9A9A9A] text-lg flex self-center">
                      {item.title}
                    </span>
                    <img
                      src="/imgs/cross.svg"
                      alt=""
                      className="cursor-pointer w-[15px]"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

const filters = [
  {
    title: "Age",
  },
  {
    title: "Sport",
  },
  {
    title: "Distance",
  },
];
