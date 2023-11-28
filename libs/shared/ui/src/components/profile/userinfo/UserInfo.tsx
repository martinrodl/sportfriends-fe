import React from 'react';
import ProfileImg from './ProfileImg';
import SportsInfo from './SportsInfo';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const UserInfo = () => {
  const [fullView, setFullView] = React.useState(false);
  const toggleFullView = () => setFullView(!fullView);
  return (
    <div className="bg-white  flex flex-col p-3 shadow-lg rounded-xl">
      <div className="flex mb-4">
        <div className="w-[120px] h-[120px] shrink-0">
          <ProfileImg />
        </div>
        <div className="flex flex-col px-2 w-full">
          <div className="flex items-center gap-y-1 gap-x-1 flex-1 flex-wrap">
            <h1 className="font-bold flex-1">John Doe</h1>
            <div className="bg-primary rounded-full px-3 font-bold ml-3">
              <h2>PRO</h2>
            </div>
            <SportsInfo sports={['Soccer', 'Basketball', 'Tennis']} />
          </div>
          <h4 className="font-semibold">Address</h4>
          <div className="flex items-center gap-x-2 flex-wrap">
            <h4>Male</h4>
            <div className="w-2 h-2 rounded-full bg-accent5" />
            <h4>Age</h4>
            <button
              onClick={toggleFullView}
              className="text-primary flex flex-1 items-center justify-end"
            >
              <h3 className="text-primary font-bold">
                {fullView ? 'See Less' : 'See More'}
              </h3>
              {fullView ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          </div>
        </div>
      </div>
      {fullView && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      )}
    </div>
  );
};

export default UserInfo;
