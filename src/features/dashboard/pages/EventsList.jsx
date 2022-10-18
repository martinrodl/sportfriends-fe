import React from 'react';
import { useSelector } from 'react-redux';

import { useGetEventsQuery } from 'services/eventApi';
import { selectFilter } from 'store/slices';
import { objectToParametrs } from 'shared/utils';

import EventFull from '../components/EventFull';
import Filter from '../components/filter/Filter';

const Events = () => {
  const filters = useSelector(selectFilter);
  const { data: events, isLoading, isSuccess, error } = useGetEventsQuery(objectToParametrs(filters));
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <Filter enableFilters={['sport', 'distance', 'date', 'startTime']} />
        </div>
        {Array.isArray(events) && events.map((event) => <EventFull event={event} key={event.id} />)}
      </div>
    </div>
  );
};

export default Events;
