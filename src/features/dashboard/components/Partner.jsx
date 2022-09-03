import React from 'react';

export default function Partner() {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-6  px-5 bg-[#fafafa] md:mx-20 my-2 rounded-xl drop-shadow-xl">
      <div className="">
        <div className="py-6 ">
          <h2 className="text-xl font-bold">Looking for sparring partner</h2>
        </div>
        <div className="py-2">
          <p className="md:text-left text-center text-[12px] md:text-xl font-normal text-[#9A9A9A] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras consequat Lorem ipsum{' '}
          </p>
        </div>
      </div>
      <div className="my-6">
        <div className="flex justify-end my-6 mr-6">
          <h2 className="text-xl font-normal">Box</h2>
        </div>
        <div className="flex justify-end my-6">
          <button className="bg-primary text-white rounded-full md:min-w-[148px] md:min-h-[43px] min-w-[120px] min-h-[35px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
