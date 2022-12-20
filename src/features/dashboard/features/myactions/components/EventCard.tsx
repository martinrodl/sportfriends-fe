import { Link } from 'react-router-dom';
import moment from 'moment';
import { FiMapPin } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs';

interface EventI {
  id: string;
  title: string;
  address: string;
  sport: string;
  timeStart: Date;
  timeEnd: Date;
  maxParticipants: number;
  participants: string[];
}

interface EventPropsI {
  event: EventI;
}

const EventCard = ({ event }: EventPropsI) => {
  const { id, title, address, sport, timeEnd, timeStart, maxParticipants, participants } = event;
  return (
    <Link to={'/dashboard/event/' + id}>
      <div className="grid grid-cols-2 border border-gray-200 p-6 shadow mb-4">
        <h2 className="col-span-2 text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm font-medium mb-4">{sport}</p>
        <p className="text-sm text-right font-medium align">
          {participants.length}/{maxParticipants}
        </p>
        <div className="flex gap-3 items-center">
          <FiMapPin />
          <h3 className="text-lg font-normal">{address}</h3>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <BsClock />
          <h3 className="text-lg font-normal">
            {`${moment(timeStart).format('DD MMMM')} ${moment(timeStart).format('hh:mm')}-${moment(timeEnd).format(
              'hh:mm',
            )}`}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
