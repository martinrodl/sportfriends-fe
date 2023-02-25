import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { FiMapPin } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs';

import { useJoinEventMutation, useLeaveEventMutation } from 'services/eventApi';
import { ErrorMessage } from 'shared/components';
import { selectAuthId } from 'store/slices';

import { SLUGS } from '../../shared/constants';

interface ParticipantT {
  id: string;
}

interface EventI {
  id: string;
  title: string;
  address: string;
  sport: string;
  timeStart: Date;
  timeEnd: Date;
  maxParticipants: number;
  participants: ParticipantT[];
}

interface EventPropsI {
  event: EventI;
}

const EventFullCard = ({ event }: EventPropsI) => {
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
    <div className="grid grid-cols-2 border border-gray-200 p-6 shadow mb-4">
      <h2 className="col-span-2 text-xl font-semibold mb-2">{title}</h2>

      <p className="text-sm font-medium mb-4">{sport}</p>

      <p className="text-sm text-right font-medium align">
        {participants.length}/{maxParticipants}
      </p>
      <div className="flex gap-3 items-center mb-4">
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
      <div className="col-span-2 flex gap-10 items-center">
        {participants?.some((participant) => participant.id === userId) ? (
          <>
            <button
              onClick={onClickLeave}
              className="min-w-[120px] min-h-[43px] rounded-lg text-white text-lg font-medium bg-[#047488] transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
            >
              Leave
            </button>
            {/* {leaveError && <ErrorMessage apiErrors={leaveError.data.errors} />} */}
          </>
        ) : (
          <>
            <button
              onClick={onClickJoin}
              className="min-w-[120px] min-h-[43px] rounded-lg text-white text-lg font-medium bg-[#047488] transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
            >
              Join
            </button>
            {/* {joinError && <ErrorMessage apiErrors={joinError.data.errors} />} */}
          </>
        )}
        <Link to={'/dashboard/' + SLUGS.Event + '/' + id}>
          <p className="text-[#047488]">More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default EventFullCard;
