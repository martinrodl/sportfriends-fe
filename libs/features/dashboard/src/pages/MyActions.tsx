import { useGetUserEventsQuery } from '@sportfriends-fe/shared/data/services';
import { Event as EventI } from '@sportfriends-fe/shared/models';

import Event from '../components/Event';

const MyActions = () => {
  const { data, isLoading, isSuccess, error } = useGetUserEventsQuery();

  const getCreatedAction = (data: { created: EventI[] }) =>
    data.created.map((event) => <Event event={event} key={event.id} />);
  const getJoindAction = (data: { participated: EventI[] }) =>
    data.participated.map((event) => <Event event={event} key={event.id} />);

  return (
    <div className="md:p-8 p-2 max-w-[1080px] md:mt-12 mt-2 flex flex-col gap-y-4 mb-5">
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
