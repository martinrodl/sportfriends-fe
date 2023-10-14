import { useState } from 'react';

import { useGetUserEventsQuery } from '@sportfriends-fe/shared/data/services';
import { Event as EventI } from '@sportfriends-fe/shared/models';
import moment, { Moment } from 'moment';

import Calender from '../components/Calendar';
import Event from '../components/Event';

const MyActions = () => {
  const { data, isLoading, isSuccess, error } = useGetUserEventsQuery();
  const [pickedDate, setPickedDate] = useState(null);

  const getPickedDate = (pickedDate: Moment) => {
    setPickedDate(pickedDate);
  };

  const getCreatedAction = (data: { created: EventI[] }) =>
    data.created.map((event) => <Event event={event} key={event.id} />);
  const getJoindAction = (data: { participated: EventI[] }) =>
    data.participated.map((event) => <Event event={event} key={event.id} />);

  const getAllEvents = (data: {
    created: EventI[];
    participated: EventI[];
  }) => {
    let allEvents = [] as EventI[];
    if (data?.created.length) {
      allEvents = [...data.created];
    }
    if (data?.participated.length) {
      allEvents = [...allEvents, ...data.participated];
    }
    return (allEvents = allEvents.filter((item, index, self) => {
      return (
        index ===
        self.findIndex((t) => JSON.stringify(t) === JSON.stringify(item))
      );
    }));
  };

  const getAllEventsFilteredByDay = (
    data: { created: EventI[]; participated: EventI[] },
    date: Moment,
  ) =>
    getAllEvents(data).filter((event) =>
      moment(event.timeStart).startOf('day').isSame(date?.startOf('day')),
    );

  return (
    <div className="px-10 max-w-[1080px] mt-12 flex flex-col gap-y-4 mb-5">
      <div>
        <h3 className="font-semibold mb-2">Upcomming events</h3>
        <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-2 flex-nowrap  md:overflow-scroll md:py-2">
          <Calender
            getPickedDate={getPickedDate}
            dates={getAllEvents(data).map((event) => moment(event.timeStart))}
          />
          {isSuccess
            ? getAllEventsFilteredByDay(data, pickedDate).map((event) => (
                <Event event={event} key={'all' + event.id} />
              ))
            : null}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Created events</h3>
        <div className="flex gap-2 flex-wrap">
          {isSuccess ? getCreatedAction(data) : null}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Joined events</h3>
        <div className="flex gap-x-2 flex-wrap">
          {isSuccess ? getJoindAction(data) : null}
        </div>
      </div>
    </div>
  );
};

export default MyActions;
