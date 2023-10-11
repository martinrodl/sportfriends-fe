import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthId } from 'store/slices';
import {
  useGetEventQuery,
  useJoinEventMutation,
  useLeaveEventMutation,
  useCreateCommentMutation,
} from 'services/eventApi';

import watch from '../assets/new/Watch.svg';
import point from '../assets/new/Point.svg';
import ProfileIcon from '../components/ProfileIcon';

const EventDetail = () => {
  const [comment, setComment] = useState('');
  const { id: eventId } = useParams();
  const { data: event, isLoading, isSuccess, error } = useGetEventQuery(eventId);
  const [joinEvent, { error: joinError, isLoading: joinLoading }] = useJoinEventMutation();
  const [leaveEvent, { error: leaveError, isLoading: leaveLoading }] = useLeaveEventMutation();
  const [createMoment, { error: commentError, isLoading: commentLoading }] = useCreateCommentMutation();
  const {
    id,
    title,
    address,
    timeStart,
    timeEnd,
    sport,
    outdoor,
    comments,
    minParticipants,
    maxParticipants,
    participants,
    author,
  } = event || {};
  const userId = useSelector(selectAuthId);

  const onClickSendComment = () => {
    createMoment({ text: comment, eventId });
    setComment('');
  };

  if (isLoading || !event.id) {
    <CircularProgress />;
  }

  const onClickJoin = () => {
    joinEvent(eventId);
  };

  const onClickLeave = () => {
    leaveEvent(eventId);
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className="p-10 flex flex-col items-center gap-y-2">
      <div className="w-full flex flex-col md:flex-row justify-between rounded-lg bg-white shadow-md  min-h-40 p-3 md:p-10">
        <div>
          <h2 className="font-semibold text-main3">{title}</h2>
          <div className="flex items-center my-2">
            <img src={point} />
            <p className="text-main3 body2 px-1 mr-1">{address}</p>
            <div className="h-1.5 w-1.5 bg-main3 rounded-full" />
            <p className="text-secondary body2 px-1">{outdoor ? 'Outdoor' : 'Indoor'}</p>
          </div>
          <div className="flex items-center">
            <p className="text-main3 body2 px-1 font-semibold mr-1">{sport}</p>
          </div>

          <div className="my-3 flex items-center">
            <ProfileIcon sizeDesktop={3} size={3} />
            <p className="ml-2 font-medium body2">{typeof author !== 'string' && author?.name}</p>
          </div>
          {participants?.some((participant) => participant.id === userId) ? (
            <div className="flex justify-center">
              <button
                onClick={onClickLeave}
                className="md:px-18 md:py-2 px-12 py-2 rounded-full text-white body1 font-medium bg-main3 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                Leave
              </button>
            </div>
          ) : (
            <div className="self-center">
              <button
                onClick={onClickJoin}
                className="md:px-18 md:py-2 px-12 py-2 rounded-full text-white body1 font-medium bg-main3 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                Join
              </button>
            </div>
          )}
        </div>
        <div className="flex md:flex-col gap-1 items-center flex-1 justify-start md:justify-center">
          <div className="flex flex-col md:flex-row"></div>
          <img src={watch} className="md:w-[40px] md:h-[40px] w-4 h-4 mr-1 md:mr-0" />
          <p className="font-semibold md:text-xl body1 my-1">{moment(timeStart).format('DD MMMM')}</p>
          <p className="font-semibold md:text-lg body2">
            {moment(timeStart).format('hh:mm')}&nbsp;-&nbsp;{moment(timeEnd).format('hh:mm')}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2 mt-3">
        <div className="flex gap-x-10 items-center">
          <div className="flex gap-x-2 items-center my-5">
            <h3>Joined</h3>
            <p className="text-xl text-accent3">{participants?.length}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <h3>Left</h3>
            <p className="text-xl text-accent2">{maxParticipants - participants?.length}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <h3>Min</h3>
            <p className="text-xl text-main3">{minParticipants}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <h3>Max</h3>
            <p className="text-xl text-main3">{maxParticipants}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full gap-x-5">
        <div className="flex flex-col bg-white shadow-md p-5 w-1/3">
          <h3>Participants</h3>
          {participants?.length === 0 && <p className="text-lg flex flex-col">No one joined</p>}
          {participants?.map((partcipant) => (
            <p className="text-lg flex flex-col">{partcipant?.name}</p>
          ))}
        </div>
        <div className="bg-white shadow-md flex flex-col p-5 flex-1">
          <h3>Comments</h3>
          <div className="flex flex-col  mx-6 bg-white">
            <div className="py-1 px-4 rounded-xl bg-whitedarker flex mb-4 mt-5">
              <input
                value={comment}
                onChange={handleChangeInput}
                type="text"
                placeholder="Write comment"
                className="pr-10 rounded-xl text-xs md:text-sm focus-within:outline-none placeholder-main4 w-full bg-[#F5F5F5]"
              />
              <button onClick={onClickSendComment} className="rounded-full bg-primary py-1.5 px-4">
                <p className="text-white text-sm">Comment</p>
              </button>
            </div>
            {comments?.map((comment) => {
              console.log(comment);
              return (
                <div className="flex flex-col flex-1 mb-3">
                  <p className="body2 mb-0.5">{comment.text}</p>
                  <div className="flex flex-1 justify-between items-center mb-0.5">
                    <div className="flex items-center">
                      <ProfileIcon sizeDesktop={2} size={2} />
                      <p className="ml-1 body3 text-main4">{comment.authorName}</p>
                    </div>
                    <p className="body3 text-main4">{moment(comment.createdAt).format('hh:mm DD.MM')}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
