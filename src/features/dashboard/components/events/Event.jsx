import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { SLUGS } from '../../shared/constants';
import placeholderSVG from '../../assets/images/placeholder.svg';

const Event = ({ event }) => {
  const { id, title, address, sport, timeEnd, timeStart, maxParticipants, participants } = event;
  return (
    <Link to={'/dashboard/' + id}>
      <div className="flex lg:flex-row flex-col justify-between gap-6  px-5 bg-[#fafafa] md:mx-20 my-2 rounded-xl drop-shadow-xl">
        <div className="">
          <div className="py-6 ">
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <div className="flex gap-3 py-2">
            <h2 className="text-xl font-normal ">{sport}</h2>
            <h1 className="text-xl font-normal  ml-14">
              {participants.length}/{maxParticipants}
            </h1>
          </div>
        </div>
        <div className="">
          <div className="flex gap-3 py-5">
            <img className="cursor-pointer" src={placeholderSVG} alt="" />
            <h2 className="text-xl font-normal ">{address}</h2>
          </div>
          <div className="flex bg-[#54D2E0] 2xl:px-10 px-8 py-4 gap-6 mb-4 rounded-xl">
            <h1 className="text-lg font-black text-white">{moment(timeStart).format('DD MMMM')}</h1>
            <h1 className="text-lg font-medium">{moment(timeStart).format('hh:mm')}</h1>
            <h1 className="text-lg font-medium">-</h1>
            <h1 className="text-lg font-medium">{moment(timeEnd).format('hh:mm')}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Event;
