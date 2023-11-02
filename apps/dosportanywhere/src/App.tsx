import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-200 p-4 flex justify-between">
        <span>DoSportAnywhere</span>
        <div className="hidden md:flex">
          <button className="mr-2 bg-white px-4 py-2 rounded">Register</button>
          <button className="bg-white px-4 py-2 rounded">Login</button>
        </div>
        <div className="md:hidden flex">
          <button className="mr-2 bg-white px-2 py-2 rounded">Register</button>
          <button className="bg-white px-2 py-2 rounded">Login</button>
        </div>
      </div>

      <div className="flex-1 flex md:flex-row flex-col-reverse">
        <div className="md:w-1/4 bg-gray-100 p-4 flex flex-col">
          <div className="flex-1">
            <button className="bg-blue-200 w-full p-4 mb-2">Home</button>
            <button className="bg-blue-200 w-full p-4 mb-2">Events list</button>
            <button className="bg-blue-200 w-full p-4 mb-2">Events map</button>
          </div>
          <div className="border-t mt-4 pt-4">
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur.</p>
            <button className="bg-blue-200 w-full p-4 mb-2">Login</button>
            <button className="bg-blue-200 w-full p-4">Register</button>
          </div>
        </div>

        <div className="md:w-3/4 p-4">
          <div className="mb-4">
            <h2 className="text-2xl mb-2">Training Lessons Anywhere</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed a voluptate sed vel
              felis arcu. Morbi feugiat aliquam et diam orci. Quis gravida
              lectus luctus ultrices massa.
            </p>
            <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">
              Start Now
            </button>
          </div>
          <div>
            <h3 className="text-xl mb-2">Available Lessons</h3>
            <div className="relative h-64 bg-green-300 rounded">
              <span className="absolute top-1/4 left-1/4">
                Lorem ipsum dolor sit amet
              </span>
              <span className="absolute top-1/2 left-1/2">Outdoor</span>
              <span className="absolute bottom-1/4 left-3/4">
                Yoga - 3/10 Participants
              </span>
              <span className="absolute bottom-1/10 left-1/10">
                29 Aug 22:08 - 23:59
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 p-4 flex justify-between text-sm">
        <span>About us • Contacts • Blog</span>
        <span>Vote for new features • Forum</span>
      </div>
    </div>
  );
};

export default App;
