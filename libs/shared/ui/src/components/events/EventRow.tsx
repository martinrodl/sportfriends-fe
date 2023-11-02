import moment from 'moment';
import { Link } from 'react-router-dom';

import { Event as EventI } from '@sportfriends-fe/shared/models';

import point from '../../assets/images/Point.svg';

interface EventRowProps {
  event: EventI;
  slug: string;
}

const EventRow = ({ event, slug }: EventRowProps) => {
  const {
    id,
    title,
    participants,
    sport,
    timeEnd,
    timeStart,
    address,
    outdoor,
    author,
  } = event;
  console.log(author);
  return (
    <Link to={'/dashboard/' + slug + '/' + id}>
      <div className="h-[100px] max-w-[700px] md:px-3 px-1 py-1 flex items-center">
        <div className="md:w-32 w-24 border-black border-opacity-20 border rounded-xl flex flex-col flex-shrink-0 justify-between items-center py-3 md:px-5 px-1 md:mx-5 mr-2">
          <p className="text-main3 md:base2 base3 font-semibold">
            {moment(timeStart).format('DD MMM')}
          </p>
          <p className="text-main3 base4">
            {moment(timeStart).format('HH:mm')} -
            {moment(timeEnd).format('HH:mm')}
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-start mx-1 overflow-hidden">
          <h4 className="font-semibold truncate">{title}</h4>
          <div className="flex items-center mb-0.5">
            <img src={point} className="h-3" />
            <p className="text-main3 base4 px-1 font-light truncate">
              {address}
            </p>
          </div>
          <div className="flex items-center">
            <div className="h-1.5 w-1.5 bg-main3 rounded-full mr-1" />
            <p className="text-main3 base3 mr-3 font-medium">{sport}</p>
            <p className="text-secondary base3 px-1">
              {outdoor ? 'Outdoor' : 'Indoor'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventRow;
