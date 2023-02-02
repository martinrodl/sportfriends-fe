import { useSelector } from 'react-redux';

import { useGetEventsQuery } from 'services/eventApi';
import { selectSpecificFilter, filterTypeEnum } from 'store/slices';
import { objectToParametrs } from 'shared/utils';

import Event from '../components/Event';
import SelectSports from '../components/filter/SelectSports';
import SelectDistance from '../components/filter/SelectDistance';

import SelectDateRange from '../components/filter/SelectDateRange';
import SelectTimeRange from '../components/filter/SelectTimeRange';

const Events = () => {
  const filters = useSelector(selectSpecificFilter(filterTypeEnum.listEvents));
  console.log(objectToParametrs(filters));
  const { data: events, isLoading, isSuccess, error } = useGetEventsQuery(objectToParametrs(filters));
  return (
    <div className="px-5 mt-12 flex justify-around max-w-5xl">
      <div>
        <div className="flex flex-wrap w-max-sm gap-2">
          {Array.isArray(events) && events.map((event) => <Event event={event} key={event.id} />)}
        </div>
      </div>
      <div className="w-[320px] flex flex-col gap-y-2">
        <h2>Filters</h2>
        <SelectSports type={filterTypeEnum.listEvents} />
        <SelectDistance type={filterTypeEnum.listEvents} />
        <SelectDateRange type={filterTypeEnum.listEvents} />
        <SelectTimeRange type={filterTypeEnum.listEvents} />
      </div>
    </div>
  );
};

export default Events;
