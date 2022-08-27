import React, { useState } from "react";
import Slider from "@mui/material/Slider";
function valuetext(value) {
  return `${value}°C`;
}
const Header = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full">
      <div className="flex justify-between mb-5">
        <div className="flex w-full gap-x-4 ">
          <div className="flex self-center ">
            <label className="text-[#9A9A9A] text-lg font-normal   ">
              Select date of the Event
            </label>
          </div>
          <div className="flex self-center w-full max-w-[500px]">
            <div className="relative border-[#DADADA]  border w-full rounded-[5px] ">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="date"
                type="date"
              />
              <div className="absolute right-4 top-5 text-xl text-[#DADADA]">
                <img src="/imgs/calendr.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex self-center min-w-[200px] gap-x-6 cursor-pointer relative"
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <span className="text-[#9A9A9A] text-lg flex self-center">
            Filtered By
          </span>
          <img src="/imgs/filters.svg" alt="" className="cursor-pointer w-8" />
          {activeFilter && (
            <div className="absolute top-10 flex bg-white  min-w-[200px] shadow-md flex-col">
              {filters.map((item, index) => {
                return (
                  <div key={index} className="">
                    <span className="text-[#9A9A9A]  px-3 py-3 transition-all duration-300 hover:text-white hover:bg-[#46B1BD] text-lg flex self-center">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-[720px] mb-5">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
      <div className="flex gap-x-10 ">
        <div className="flex gap-x-4">
          <div className="flex self-center">
            <label className="text-[#9A9A9A] text-lg font-normal  min-w-[100px]">
              Time Start
            </label>
          </div>
          <div className="flex self-center">
            <div className="relative border-[#DADADA]  border w-full rounded-[5px] ">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="time"
                type="time"
              />
              <div className="absolute right-4 top-5 text-xl text-[#DADADA]">
                <img src="/imgs/calendr.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="flex self-center">
            <label className="text-[#9A9A9A] text-lg font-normal  min-w-[100px]">
              Ending Time
            </label>
          </div>
          <div className="flex self-center">
            <div className="relative border-[#DADADA]  border w-full rounded-[5px] ">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="time"
                type="time"
              />
              <div className="absolute right-4 top-5 text-xl text-[#DADADA]">
                <img src="/imgs/calendr.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const filters = [
  {
    title: "Date",
  },
  {
    title: "Sport",
  },
  {
    title: "Address",
  },
];
