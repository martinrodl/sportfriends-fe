import { useGetUserEventsQuery } from 'services/eventApi';

import EventCard from './components/EventCard';

interface EventsPropsI {
  type: 'joined' | 'created';
}

const Events = ({ type }: EventsPropsI): JSX.Element => {
  const { data, isLoading, isSuccess, error } = useGetUserEventsQuery('');
  return (
    <div>
      {type === 'created' && isSuccess && data.created.map((event) => <EventCard event={event} key={event.id} />)}
      {type === 'joined' && isSuccess && data.participated.map((event) => <EventCard event={event} key={event.id} />)}
    </div>
  );
};

export default Events;
