import { Link } from 'react-router-dom';
import React from 'react';

import placeholderSVG from '../assets/images/placeholder.svg';

const EventFull = () => {
  return (
    <div className="w-full bg-[#FAFAFA] mb-4 mt-6 py-6">
      <div className="flex justify-between px-4 md:px-20">
        <div>
          <div className="mb-8">
            <h1 className="text-base md:text-2xl font-medium md:font-bold text-[#000]">Saturday Night Play</h1>
            <div className="flex gap-2 pt-4">
              <img src={placeholderSVG} />
              <p className="text-[12px] md:text-2xl font-normal md:font-medium text-error">Barca</p>
            </div>
          </div>
          <div className="bg-primary md:min-w-[250px] min-w-[100px] rounded-xl px-2 py-2 text-center">
            <h1 className="md:text-xl text-sm font-semibold md:font-black text-[#fff] py-1">29 Aug </h1>
            <div className="md:flex justify-center">
              <h1 className="text-base md:font-medium font-semibold text-[#000] md:py-1">22:08</h1>
              <h1 className="text-base md:font-medium font-semibold text-[#000] md:py-1 px-1">-</h1>
              <h1 className="text-base md:font-medium font-semibold text-[#000] md:py-1">01:08</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center flex-col mb-2">
            <h1 className="md:block hidden text-xl text-center font-normal tece text-[#000] py-3">Football</h1>
            <h1 className="text-[12px] md:text-base font-normal mb-4">Participants: 7/32</h1>
          </div>
          <div className="flex flex-col">
            <button className="min-w-[65px] md:min-w-[148px] min-h-[20px] md:min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer flex justify-center items-center mt-14 md:mt-0 mb-2">
              Join
            </button>
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
  );
};

export default EventFull;
