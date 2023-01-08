import { useGetUserEventsQuery } from 'services/eventApi';

import EventCard from './EventCard';

interface EventsPropsI {
  type: 'joined' | 'created';
}

const Events = ({ type }: EventsPropsI): JSX.Element => {
  const { data, isLoading, isSuccess, error } = useGetUserEventsQuery('');
  const getEmptyText = (arg: string) => <h1>{`There is no event, ${arg} one`}</h1>;
  return (
    <div>
      {type === 'created'
        ? isSuccess && data.created.length
          ? data.created.map((event) => <EventCard event={event} key={event.id} />)
          : getEmptyText('create')
        : null}
      {type === 'joined'
        ? isSuccess && data.participated.length
          ? data.participated.map((event) => <EventCard event={event} key={event.id} />)
          : getEmptyText('join')
        : null}
    </div>
  );
};

export default Events;
