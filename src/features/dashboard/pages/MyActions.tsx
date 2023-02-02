import { useState } from 'react';

import { useGetUserEventsQuery } from 'services/eventApi';
import { Event as EventI } from 'models';
import moment, { Moment } from 'moment';

import Calender from '../components/Calendar';
import Event from '../components/Event';

const MyActions = () => {
  const { data, isLoading, isSuccess, error } = useGetUserEventsQuery('');
  const [pickedDate, setPickedDate] = useState(null);

  const getPickedDate = (pickedDate: Moment) => {
    setPickedDate(pickedDate);
  };

  const getCreatedAction = (data: { created: EventI[] }) =>
    data.created.map((event) => <Event event={event} key={event.id} />);
  const getJoindAction = (data: { participated: EventI[] }) =>
    data.participated.map((event) => <Event event={event} key={event.id} />);

  const getAllEvents = (data: { created: EventI[]; participated: EventI[] }) => {
    let allEvents = [] as EventI[];
    if (data?.created.length) {
      allEvents = [...data.created];
    }
    if (data?.participated.length) {
      allEvents = [...allEvents, ...data.participated];
    }
    return (allEvents = allEvents.filter((item, index, self) => {
      return index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(item));
    }));
  };

  const getAllEventsFilteredByDay = (data: { created: EventI[]; participated: EventI[] }, date: Moment) =>
    getAllEvents(data).filter((event) => moment(event.timeStart).startOf('day').isSame(date.startOf('day')));

  return (
    <div className="px-10 max-w-[1080px] mt-12 flex flex-col gap-y-4">
      <div>
        <h2>Upcomming events</h2>
        <div className="flex gap-x-2 flex-nowrap overflow-scroll">
          <Calender getPickedDate={getPickedDate} dates={getAllEvents(data).map((event) => moment(event.timeStart))} />
          {isSuccess
            ? getAllEventsFilteredByDay(data, pickedDate).map((event) => <Event event={event} key={'all' + event.id} />)
            : null}
        </div>
      </div>
      <div>
        <h2>Created events</h2>
        <div className="flex gap-2 flex-wrap">{isSuccess ? getCreatedAction(data) : null}</div>
      </div>
      <div>
        <h2>Joined events</h2>
        <div className="flex gap-x-2 flex-wrap">{isSuccess ? getJoindAction(data) : null}</div>
      </div>
    </div>
  );
};

export default MyActions;
