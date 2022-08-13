import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full md:px-10 px-4 md:pt-8 pb-2 pt-6">
      <div>
        <div className="flex justify-between">
          <div>
            <div className="relative lg:block hidden border-2 border-primary rounded-md">
              <input
                type="text"
                placeholder="Search friends...."
                className="pl-8 pr-3 py-3 text-[#8695A0]  focus-within:outline-none"
              />
              <img
                src="/imgs/fe_search.svg"
                alt=""
                className="absolute top-[10px] "
              />
            </div>
          </div>
          <div className="lg:border-l border-l-[#DADADA] md:px-10">
            <div className="flex gap-x-2 items-center">
              <img
                src="/imgs/ion_notifications-circle.svg"
                alt=""
                className="cursor-pointer"
              />

              <img src="/imgs/bell.svg" alt="" className="cursor-pointer" />
              <div className="flex self-center  gap-x-2">
                <img
                  src="/imgs/Ellipse 53.svg"
                  alt=""
                  className="cursor-pointer md:block  hidden"
                />

                <span className="hidden text-base font-semibold md:flex self-center">
                  Smith
                </span>
                <BsSearch className="w-full cursor-pointer -mt-2 text-2xl text-white flex self-center" />
              </div>

              <img
                src="/imgs/bubble.svg"
                alt=""
                className="pl-4 cursor-pointer  md:block  hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
