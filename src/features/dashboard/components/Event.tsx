import moment from 'moment';

import { Event as EventI } from 'models';

import point from '../assets/new/Point.svg';

interface EventPros {
  event: EventI;
}

const Event = ({ event }: EventPros) => {
  const { id, title, participants, sport, timeEnd, timeStart, address, outdoor } = event;
  return (
    <div className="max-h-[200px] w-[280px] bg-white shadow-2xl rounded-2xl p-5">
      <h4 className="font-semibold truncate mb-1">{title}</h4>
      <div className="flex items-center my-2">
        <img src={point} />
        <p className="text-main3 base3 px-1 truncate">{address}</p>
        <div className="h-1.5 w-1.5 bg-main3 rounded-full ml-1 shrink-0" />
        <p className="text-secondary base3 px-1">{outdoor ? 'Outdoor' : 'Indoor'}</p>
      </div>
      <div className="flex items-center">
        <p className="text-main3 base3 px-1 font-medium">{sport}</p>
        <div className="h-1.5 w-1.5 bg-main3 rounded-full ml-1 shrink-0" />
        <p className="text-main3 base3 px-1 font-medium truncate">{participants.length} Participants Joined</p>
      </div>
      <div className="h-10 p-3 border-primary border rounded-full flex justify-between items-center px-5 mt-2 md:mt-4 mb-2">
        <p className="text-main3 base2 font-semibold">{moment(timeStart).format('DD.MM')}</p>
        <p className="text-main3 base2 font-semibold">
          {moment(timeStart).format('HH:mm')} - {moment(timeEnd).format('HH:mm')}
        </p>
      </div>
    </div>
  );
};

export default Event;
