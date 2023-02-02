import moment from 'moment';

import { Event as EventI } from 'models';

import point from '../assets/new/Point.svg';

interface EventPros {
  event: EventI;
}

const Event = ({ event }: EventPros) => {
  const { id, title, participants, sport, timeEnd, timeStart, address, outdoor } = event;
  return (
    <div className="h-[200px] w-80 bg-white shadow-2xl rounded-2xl p-5">
      <h2>{title}</h2>
      <div className="flex items-center my-2">
        <img src={point} />
        <p className="text-[##282828] text-sm px-1">{address}</p>
        <div className="h-1.5 w-1.5 bg-[#282828] rounded-full" />
        <p className="text-[#FAB447] text-sm px-1">{outdoor ? 'Outdoor' : 'Indoor'}</p>
      </div>
      <div className="flex items-center">
        <p className="text-[##282828] text-sm px-1 font-medium">{sport}</p>
        <div className="h-1.5 w-1.5 bg-[#282828] rounded-full" />
        <p className="text-[##282828] text-sm px-1 font-medium">{participants.length} Participants Joined</p>
      </div>
      <div className=" h-10 p-5 bg-primary rounded-full flex items-center">
        <h2 className="text-white">
          {moment(timeStart).format('DD MM HH:mm')} - {moment(timeEnd).format('HH:mm')}
        </h2>
      </div>
    </div>
  );
};

export default Event;
