import moment from 'moment';
import { Link } from 'react-router-dom';

import { SLUGS } from '../../shared/constants';

interface EventI {
  id: string;
  title: string;
  sport: string;
  timeStart: Date;
  timeEnd: Date;
  participants: { id: string }[];
  maxParticipants: number;
}

interface MarkerPopupTablePropsI {
  data: { event: EventI }[];
}

const MarkerPopupTable = ({ data }: MarkerPopupTablePropsI) => {
  const headTableArray = ['Title', 'Sport', 'Date', 'Time', 'Option'];
  const getHeadTable = (text) => (
    <th scope="col" className="w-[92px] h-[56px] text-[#080E0B] bg-[#54D2E0] text-center font-medium">
      {text}
    </th>
  );

  const getOneRow = (item: { event: EventI }) => {
    const { id, title, sport, timeStart } = item.event;
    return (
      <tr className="h-[56px] text-[#080E0B] text-base text-center ">
        <td>{title}</td>
        <td className="text-center">{sport}</td>
        <td className="text-center px-2 whitespace-nowrap">{moment(timeStart).format('DD.MM')}</td>
        <td className="text-center px-2 whitespace-nowrap">{moment(timeStart).format('hh:mm')}</td>
        <td>
          <Link to={'/dashboard/' + SLUGS.Event + '/' + id}>
            <p className="text-xs">View More</p>
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
};

export default MarkerPopupTable;
