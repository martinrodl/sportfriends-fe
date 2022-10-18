import React from 'react';
import { Formik, Form } from 'formik';
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
import { Button, TextAreaInput, ErrorMessage } from 'shared/components';

import placeholderSVG from '../assets/images/placeholder.svg';

const EventDetail = () => {
  const { id: eventId } = useParams();
  const { data: event, isLoading, isSuccess, error } = useGetEventQuery(eventId);
  const [joinEvent, { error: joinError, isLoading: joinLoading }] = useJoinEventMutation();
  const [leaveEvent, { error: leaveError, isLoading: leaveLoading }] = useLeaveEventMutation();
  const [createMoment, { error: commentError, isLoading: commentLoading }] = useCreateCommentMutation();
  const {
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
  } = event || {};
  const userId = useSelector(selectAuthId);

  if (isLoading) {
    <CircularProgress />;
  }

  const onClickJoin = () => {
    joinEvent(eventId);
  };

  const onClickLeave = () => {
    leaveEvent(eventId);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-8">
        <div className="w-full bg-[#FAFAFA] rounded-[11px]">
          <div className=" py-14 px-14">
            <h1 className="text-[24px] font-bold text-[#000] text-center">{title}</h1>
            <div className="block md:flex justify-between gap-10 pt-10">
              <div className="bg-primary rounded-[14px] text-center px-16">
                <h1 className="text-2xl font-black text-[#ffff] pt-5"> {moment(timeStart).format('DD MMMM')}</h1>
                <h1 className="text-2xl font-medium text-[#000] pt-4"> {moment(timeStart).format('hh:mm')}</h1>
                <h1 className="text-3xl font-medium text-[#000] pt-3">-</h1>
                <h1 className="text-2xl font-medium text-[#000] pt-2 pb-5"> {moment(timeEnd).format('hh:mm')}</h1>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-2 md:pt-0 pt-10">
                  <img src={placeholderSVG} />
                  <p className="text-lg font-medium text-[#E50027]">{address}</p>
                </div>
                <h1 className="text-2xl font-medium text-[#F1A038] py-10 md:py-16">{outdoor ? 'Outdoor' : 'Indoor'}</h1>
                {participants?.some((participant) => participant.id === userId) ? (
                  <>
                    <button
                      onClick={onClickLeave}
                      className="md:px-20 md:py-4 px-14 py-3 rounded-full text-white text-2xl font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      Leave
                    </button>
                    {leaveError && <ErrorMessage apiErrors={leaveError.data.errors} />}
                  </>
                ) : (
                  <>
                    <button
                      onClick={onClickJoin}
                      className="md:px-20 md:py-4 px-14 py-3 rounded-full text-white text-2xl font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      Join
                    </button>
                    {joinError && <ErrorMessage apiErrors={joinError.data.errors} />}
                  </>
                )}
              </div>
              <div className="text-center pt-12">
                <h1 className="text-2xl font-normal text-[#000] py-8">{sport}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-b border-dotted border-black my-9">
          <div className=" ">
            <h1 className="text-center text-base md:text-[28px] font-bold text-[#F1A038] md:text-[#000] pt-7">
              Participants
            </h1>
            <div className="flex justify-center gap-20 md:gap-32 text-[12px] md:text-2xl font-normal py-8">
              <h1>
                Left: <a className="text-[#E50027]">{maxParticipants - participants?.length}</a>
              </h1>
              <h1>Min: {minParticipants}</h1>
              <h1>Max: {maxParticipants}</h1>
            </div>
          </div>
        </div>
        <div className="w-full px-10 py-10">
          <div className="md:grid md:grid-cols-2 block justify-center gap-10">
            <div>
              {participants?.map((user, index) => {
                return (
                  <div className="md:flex hidden gap-x-7 mb-4" key={index}>
                    {/* <img src={item.pic} alt="" /> */}
                    <span className="text-base text-[#0A043C] font-semibold flex self-center">{user.name}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <h1 className="text-2xl font-normal text-black mb-10">Comments</h1>
              <div className="max-w-[335px]">
                {comments?.map((comment) => {
                  return (
                    <div key={comment.id} className="mb-8 ">
                      <p className="text-sm text-[#9A9A9A] font-normal mb-3">{comment.text}</p>
                      <div className="flex justify-end gap-x-1">
                        <span className="text-[#9A9A9A] text-[10px] font-normal md:flex hidden">
                          {moment(comment.createdAt).format('DD.MM.YYYY hh:mm')}
                        </span>
                        <span className="text-[#9A9A9A] text-[10px] font-normal md:flex hidden">-</span>
                        <span className="text-[#9A9A9A] text-[10px] font-normal md:flex hidden">
                          {comment.authorName}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-end">
                  <Formik
                    initialValues={{
                      comment: '',
                    }}
                    onSubmit={(formData, { resetForm }) => {
                      createMoment({ eventId, comment: formData.comment });
                      resetForm();
                    }}
                  >
                    <Form>
                      <div className="relative">
                        <TextAreaInput label="comment" placeholder="Comment" rows={3} />
                      </div>
                      <button
                        type="submit"
                        className="bg-primary text-white rounded-full min-w-[133px] min-h-[38px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg"
                      >
                        {commentLoading && <CircularProgress className="mr-5" size={10} style={{ color: 'white' }} />}
                        Comment
                      </button>
                      {commentError?.data?.errors && <ErrorMessage apiErrors={commentError.data.errors} />}
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
