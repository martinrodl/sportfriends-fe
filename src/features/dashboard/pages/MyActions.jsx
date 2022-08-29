import React from 'react';

import { useGetUserEventsQuery } from 'services/eventApi';

import EventsList from './EventsList';

const MyActions = () => {
  const { data = { created: [], participated: [] }, isSuccess, error } = useGetUserEventsQuery();
  return (
    <div className="w-full mx-auto px-4 mt-12">
      <div className="">
        <div className="flex justify-end w-full px-4 py-4">
          <img className="cursor-pointer" src="/imgs/dropdown.svg" alt="" />
        </div>

        <EventsList title="Created Events" events={data.created} addButton />
        <EventsList title="Joined Events" events={data.created} icon />
        {/* <div className="flex justify-end w-full px-4 py-4 mt-12">
          <img className="cursor-pointer" src="/imgs/dropdown.svg" alt="" />
        </div>
        <div className="md:mx-20 flex items-center justify-between bg-[#04A5C2] md:py-10 py-3 px-10 rounded-lg">
          <h1 className="md:text-[26px] text-lg font-semibold text-white">Joined Events</h1>
          <img src="/imgs/bandy.svg" />
        </div>
        <div className="flex lg:flex-row flex-col justify-between px-10 bg-[#fafafa] md:mx-20 my-4 rounded-xl drop-shadow-xl">
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
        </div> */}
      </div>
    </div>
  );
};

export default MyActions;
