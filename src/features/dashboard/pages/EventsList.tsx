import React from 'react';
import { useSelector } from 'react-redux';

import { useGetEventsQuery } from 'services/eventApi';
import { selectFilter } from 'store/slices';
import { objectToParametrs } from 'shared/utils';

import EventFullCard from '../components/events/EventFullCard';
import Filter from '../components/filter/Filter';

const Events = () => {
  const filters = useSelector(selectFilter);
  const { data: events, isLoading, isSuccess, error } = useGetEventsQuery(objectToParametrs(filters));
  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <Filter enableFilters={['sport', 'distance', 'date', 'startTime']} />
        </div>
        {Array.isArray(events) && events.map((event) => <EventFullCard event={event} key={event.id} />)}
      </div>
    </div>
  );
};

export default Events;
