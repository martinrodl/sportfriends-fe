import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { useJoinEventMutation, useLeaveEventMutation } from 'services/eventApi';
import { ErrorMessage } from 'shared/components';
import { selectAuthId } from 'store/slices';

import { SLUGS } from '../shared/constants';
import placeholderSVG from '../assets/images/placeholder.svg';

const EventFull = ({ event }) => {
  const userId = useSelector(selectAuthId);
  const { title, address, timeStart, timeEnd, participants, maxParticipants, sport, id } = event;
  const [joinEvent, { error: joinError, isLoading: joinLoading }] = useJoinEventMutation();
  const [leaveEvent, { error: leaveError, isLoading: leaveLoading }] = useLeaveEventMutation();

  const onClickJoin = () => {
    joinEvent(event.id);
  };

  const onClickLeave = () => {
    leaveEvent(event.id);
  };

  return (
    <div className="w-full bg-[#FAFAFA] mb-4 mt-6 py-6">
      <div className="flex justify-between px-4 md:px-20">
        <div>
          <div className="mb-8">
            <h1 className="text-base md:text-2xl font-medium md:font-bold text-[#000]">{title}</h1>
            <div className="flex gap-2 pt-4">
              <img src={placeholderSVG} />
              <p className="text-[12px] md:text-lg font-normal md:font-medium text-error">{address}</p>
            </div>
          </div>
          <div className="bg-primary md:min-w-[250px] min-w-[100px] rounded-xl px-2 py-2 text-center">
            <h1 className="md:text-xl text-sm font-semibold md:font-black text-[#fff] py-1">
              {moment(timeStart).format('DD MMMM')}
            </h1>
            <div className="md:flex justify-center">
              <h1 className="text-base md:font-medium font-semibold text-[#000] md:py-1">
                {moment(timeStart).format('hh:mm')}
              </h1>
              <h1 className="text-base md:font-medium font-semibold text-[#000] md:py-1 px-1">-</h1>
              <h1 className="text-base md:font-medium font-semibold text-[#000] md:py-1">
                {moment(timeEnd).format('hh:mm')}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center flex-col mb-2">
            <h1 className="md:block hidden text-xl text-center font-normal tece text-[#000] py-3">{sport}</h1>
            <h1 className="text-[12px] md:text-base font-normal mb-4">
              Participants: {participants?.length}/{maxParticipants}
            </h1>
          </div>
          <div className="flex gap-2 flex-col">
            {participants?.some((participant) => participant.id === userId) ? (
              <>
                <button
                  onClick={onClickLeave}
                  className="min-w-[148px] min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
                >
                  Leave
                </button>
                {leaveError && <ErrorMessage apiErrors={leaveError.data.errors} />}
              </>
            ) : (
              <>
                <button
                  onClick={onClickJoin}
                  className="min-w-[148px] min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
                >
                  Join
                </button>
                {joinError && <ErrorMessage apiErrors={joinError.data.errors} />}
              </>
            )}
            <Link
              to={'/dashboard/' + SLUGS.Event + '/' + id}
              className="min-w-[148px] min-h-[43px] rounded-full text-white text-lg font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
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
