import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { useJoinEventMutation, useLeaveEventMutation } from 'services/eventApi';

import { SLUGS } from '../../shared/constants';

export default function MarkerPopupTable({ data }) {
  const [joinEvent, { error: joinError, isLoading: joinLoading }] = useJoinEventMutation();
  const [leaveEvent, { error: leaveError, isLoading: leaveLoading }] = useLeaveEventMutation();

  const onClickJoin = () => {
    joinEvent(event.id);
  };

  const onClickLeave = () => {
    leaveEvent(event.id);
  };

  const headTableArray = ['Title', 'Sport', 'Time', '', ''];
  const getHeadTable = (text) => (
    <th scope="col" className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
      {text}
    </th>
  );

  const getOneRow = (item) => {
    const { id, title, sport, timeStart, timeEnd, participants, maxParticipants } = item.event;
    return (
      <tr>
        <td className="text-center">{title}</td>
        <td className="text-center">{sport}</td>
        <td className="text-center px-2 whitespace-nowrap">
          {moment(timeStart).format('DD.MM')} {moment(timeStart).format('hh:mm')}
        </td>
        <td className="text-center px-2 whitespace-nowrap">
          {participants.length}/{maxParticipants}
        </td>
        <td>
          <Link
            to={'/dashboard/' + SLUGS.Event + '/' + id}
            className="min-w-[50px] min-h-[20px] rounded-full text-white text-xs font-medium bg-primary transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
          >
            Info
          </Link>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <table className="min-w-full border-0 divide-y divide-gray-200 border-collapse border border-slate-500">
        <thead className="bg-gray-50">
          <tr>{headTableArray.map(getHeadTable)}</tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{data.map(getOneRow)}</tbody>
      </table>
    </div>
  );
}
