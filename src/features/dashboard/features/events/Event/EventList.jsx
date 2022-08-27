import { Link } from 'react-router-dom';
import React from 'react';

const EventList = () => {
  return (
    <div className="py-20">
      <div className="w-full bg-[#FAFAFA] mb-4">
        <div>
          <div className="flex justify-between px-4 md:px-20 py-8">
            <div>
              <div className="mb-[70px]">
                <h1 className="text-base md:text-2xl font-medium md:font-bold text-[#000]">Saturday Night Play</h1>
                <div className="flex gap-2 pt-4">
                  <img src="/imgs/placeholder 1.svg" />
                  <a className="text-[12px] md:text-2xl font-normal md:font-medium text-[#E50027]">Barca</a>
                </div>
              </div>
              <div className="flex gap-x-10">
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
              </div>
            </div>
            <div>
              <div className="flex justify-center flex-col mb-10">
                <div className="flex justify-center">
                  <img src="/imgs/Frame (1).svg" alt="" className="w-24" />
                </div>
                <h1 className="md:block hidden text-xl text-center font-normal tece text-[#000] py-3">Football</h1>
              </div>
              <div className="flex flex-col">
                <a className="min-w-[65px] md:min-w-[148px] min-h-[20px] md:min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer flex justify-center items-center mt-14 md:mt-0 mb-3">
                  Join
                </a>
                <Link
                  to="/event-detail"
                  className=" min-w-[148px] min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAFAFA] mb-4">
        <div>
          <div className="flex justify-between px-4 md:px-20 py-8">
            <div>
              <div className="mb-[70px]">
                <h1 className="text-base md:text-2xl font-medium md:font-bold text-[#000]">Saturday Night Play</h1>
                <div className="flex gap-2 pt-4">
                  <img src="/imgs/placeholder 1.svg" />
                  <a className="text-[12px] md:text-2xl font-normal md:font-medium text-[#E50027]">Barca</a>
                </div>
              </div>
              <div className="flex gap-x-10">
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
              </div>
            </div>
            <div>
              <div className="flex justify-center flex-col mb-10">
                <div className="flex justify-center">
                  <img src="/imgs/Frame (1).svg" alt="" className="w-24" />
                </div>
                <h1 className="md:block hidden text-xl text-center font-normal tece text-[#000] py-3">Football</h1>
              </div>
              <div className="flex flex-col">
                <a className="min-w-[60px] md:min-w-[148px] min-h-[20px] md:min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer flex justify-center items-center mt-14 md:mt-0 mb-3">
                  Join
                </a>
                <Link to="/event-detail">
                  <a className=" min-w-[148px] min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center">
                    More Info
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
