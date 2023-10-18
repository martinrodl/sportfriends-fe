import moment from 'moment';
import { Link } from 'react-router-dom';

import { Event as EventI } from 'models';

import { SLUGS } from '../../shared/constants';
import Event from '../Event';

interface MarkerPopupPropsI {
  data: { event: EventI }[];
}

const MarkerPopup = ({ data }: MarkerPopupPropsI) => {
  const getOneRow = (item: { event: EventI }) => {
    const { id, sport, timeStart, title } = item.event;
    return (
      <Link
        className="hover:bg-primary hover:opacity-50 rounded-md overflow-hidden content-center grid grid-cols-4 h-[38px]"
        to={'/dashboard/' + SLUGS.Event + '/' + id}
      >
        <div className="flex justify-center items-center">
          <p className="body4 text-main3 truncate">{title}</p>
        </div>
        <div className=" flex justify-start items-center">
          <p className="body4 text-main3 truncate">{sport}dsfasdfasdf </p>
        </div>
        <div className="flex justify-center items-center ">
          <p className="body4 text-main3">{moment(timeStart).format('DD.MM')}</p>
        </div>
        <div className="flex justify-center items-center ">
          <p className="body4 text-main3">{moment(timeStart).format('hh.mm')}</p>
        </div>
      </Link>
    );
  };

  const getTable = () => (
    <div className="bg-white p-2 rounded-lg w-[230px] relative top-[11px]">
      <div className="grid grid-cols-4 bg-accent6 h-[38px] rounded-lg content-center">
        <div className="h-full flex justify-center  items-center p-1">
          <p className="body3 text-main3">Title</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="body3 text-main3">Sport</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="body3 text-main3">Date</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="body3 text-main3">Start</p>
        </div>
      </div>
      <div className="bg-white divide-y divide-gray-200">{data.map(getOneRow)}</div>
    </div>
  );

  const getEvent = () => {
    const { event } = data[0];
    return (
      <div className="relative top-[11px]">
        <Event event={event} />
      </div>
    );
  };

  return data.length > 1 ? getTable() : getEvent();
};

export default MarkerPopup;
