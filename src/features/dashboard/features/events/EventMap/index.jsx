import React from 'react';
import { Link } from 'react-router-dom';

const EventMap = () => {
  return (
    <div className="w-full mx-auto">
      <div className="map-main h-screen">
        <div className="flex items-center justify-center w-full h-full 2xl:max-w-[771px] max-w-[440px] m-auto">
          <div className="bg-white md:px-8 px-4 md:py-7 py-4">
            <div className="flex justify-between ">
              <h1 className="text-base md:text-2xl font-medium md:font-bold text-[#000]">Saturday Night Play</h1>
              <img src="/imgs/cross.svg" alt="" />
            </div>
            <div className="flex items-center justify-between  py-4">
              <div className="lg:hidden flex items-center gap-2">
                <img src="/imgs/placeholder 1.svg" />
                <a className="text-[12px] md:text-2xl font-normal md:font-medium text-[#E50027]">Barca</a>
              </div>
              <div>
                <img src="/imgs/Frame (1).svg" alt="" className="w-[25px] lg:hidden flex self-end" />
              </div>
            </div>
            <div className="lg:flex gap-x-2 mb-4 hidden">
              <img src="/imgs/Frame (1).svg" alt="" className="w-8" />
              <h1 className="md:block hidden text-xl text-center font-normal tece text-[#000] py-3">Football</h1>
            </div>
            <div className="flex lg:flex-row md:flex-col flex-row items-center md:gap-9 gap-4">
              <div className="bg-primary md:min-w-[250px] min-w-[100px] rounded-xl px-4 py-4 text-center">
                <h1 className="md:text-2xl text-sm font-semibold md:font-black text-[#fff] py-2">29 Aug </h1>
                <div className="md:flex justify-center">
                  <h1 className="md:text-xl text-[12px] md:font-medium font-semibold text-[#000] md:py-2">22:08</h1>
                  <h1 className="md:text-xl text-[12px] md:font-medium font-semibold text-[#000] md:py-2 px-1">-</h1>
                  <h1 className="md:text-xl text-[12px] md:font-medium font-semibold text-[#000] md:py-2">01:08</h1>
                </div>
              </div>
              <div className="flex flex-col self-center">
                <div>
                  <h1 className="text-[12px] md:text-2xl font-normal mb-5">Participants: 7/32</h1>
                  <img className="md:block hidden" src="/imgs/Group 4688.svg" alt="" />
                  <img className="md:hidden block" src="/imgs/Group 4616.svg" alt="" />
                </div>
              </div>
              <div>
                <Link
                  to="event-detail"
                  className="md:min-w-[148px] min-w-[100px] min-h-[43px] rounded-full mb-6 text-white md:text-lg text-base font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer flex  justify-center items-center"
                >
                  Join
                </Link>
                <Link
                  to="event-detail"
                  className="min-w-[148px] min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMap;
