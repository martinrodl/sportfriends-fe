import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import {
  useGetSpecificUserQuery,
  useGetUserQuery,
  useCreateFriendshipMutation,
} from 'services/userApi';
import { useGetSpecificUserEventsQuery } from 'services/eventApi';
import { useGetUserPostsQuery } from 'services/postApi';

import Event from '../components/Event';
import UserPost from '../components/home/UserPost';
import UserInfo from '../components/profile/UserInfo';
import ProUserInfo from '../components/profile/ProUserInfo';
import ReservationTimetable from '../components/profile/ReservationTimetable';

const UserProfile = () => {
  const { data: loggedUser } = useGetUserQuery('');
  const { id: userId = loggedUser.id } = useParams();
  const {
    data: user,
    isLoading,
    isSuccess,
    error,
  } = useGetSpecificUserQuery(userId);
  const { data: createdEvents, isSuccess: isEventsSuccess } =
    useGetSpecificUserEventsQuery(userId);
  const { data: posts, isSuccess: isPostsSuccess } =
    useGetUserPostsQuery(userId);
  console.log('userid ', user?.id || loggedUser.id);
  return (
    <div className="w-full flex-col p-2">
      <div className="flex flex-col gap-2">
        <ProUserInfo
          user={user}
          loggedUser={loggedUser}
          self={loggedUser.id === userId}
        />

        <ReservationTimetable userId={user?.id || loggedUser.id} />
        {/* <UserInfo
          user={user}
          loggedUser={loggedUser}
          self={loggedUser.id === userId}
        /> */}
      </div>
      {isEventsSuccess && (
        <div className="flex flex-col mt-5">
          <h3 className="font-semibold mb-2">Created Events</h3>
          <div className="flex gap-2 my-2 flex-wrap">
            {createdEvents.map((event) => (
              <Event event={event} key={event.id} />
            ))}
          </div>
        </div>
      )}
      {isPostsSuccess && (
        <div className="w-full">
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Post</h3>
            {posts.map((post, index) => (
              <UserPost key={index + post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
