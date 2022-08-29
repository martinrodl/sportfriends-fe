import React from 'react';
import { Link } from 'react-router-dom';

import { SLUGS } from '../shared/constants';

const Event = () => (
  <div className="flex lg:flex-row flex-col justify-between gap-6  px-10 bg-[#fafafa] md:mx-20 my-4 rounded-xl drop-shadow-xl">
    <div className="">
      <div className="py-8 ">
        <h1 className="text-2xl font-bold">Saturday Night Play</h1>
      </div>
      <div className="flex gap-6 py-4">
        <img className="cursor-pointer" src="/imgs/Vector.svg" alt="" />
        <h1 className="text-2xl font-normal ">Football</h1>
        <h1 className="text-xl font-normal  ml-14">7/32</h1>
      </div>
    </div>
    <div className="">
      <div className="flex gap-6 py-8">
        <img className="cursor-pointer" src="/imgs/placeholder 1 copy.svg" alt="" />
        <h1 className="text-2xl font-normal ">Event Address</h1>
      </div>
      <div className="flex bg-[#54D2E0] 2xl:px-12 px-8 py-4 gap-8 mb-8 rounded-xl">
        <h1 className="text-xl font-black text-white">29 Aug </h1>
        <h1 className="text-xl font-medium">22:08</h1>
        <h1 className="text-xl font-medium">-</h1>
        <h1 className="text-xl font-medium">01:08</h1>
      </div>
    </div>
  </div>
);

export default function EventsList({ title, addButton = false }) {
  return (
    <div>
      <div className="md:mx-20 flex justify-between bg-[#04A5C2] lg:py-10 py-3 items-center lg:px-10 px-4 rounded-lg">
        <h1 className="lg:text-[26px] text-xl font-semibold text-white">{title}</h1>
        {addButton && (
          <Link to={'/dashboard/' + SLUGS.CreateEvent}>
            <h1 className="text-[16px] font-normal text-[#04A5C2] px-12 py-3 rounded-full bg-white">Add</h1>
          </Link>
        )}
      </div>
      <Event />
    </div>
  );
}
