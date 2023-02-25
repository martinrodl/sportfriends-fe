import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetSpecificUserQuery, useGetUserQuery, useCreateFriendshipMutation } from 'services/userApi';
import { useGetSpecificUserEventsQuery } from 'services/eventApi';
import { useGetUserPostsQuery } from 'services/postApi';

import { SLUGS } from '../shared/constants';
import { getStatusFriendShipStatus } from '../shared/utils';
import { FriendStatus } from 'models';

import ProfileIcon from '../components/ProfileIcon';
import point from '../assets/new/Point.svg';
import Event from '../components/Event';
import UserPost from '../components/home/UserPost';
import { ReactComponent as ChatIcon } from '../assets/new/ChatMessage.svg';

const UserProfile = () => {
  const { id: userId } = useParams();
  const { data: loggedUser } = useGetUserQuery('');
  const { data: user, isLoading, isSuccess, error } = useGetSpecificUserQuery(userId);
  const { data: createdEvents, isSuccess: isEventsSuccess } = useGetSpecificUserEventsQuery(userId);
  const { data: posts, isSuccess: isPostsSuccess } = useGetUserPostsQuery(userId);
  const [createFriendship] = useCreateFriendshipMutation();

  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate(`/dashboard/${SLUGS.Chat}`, {
      state: {
        userId: user.id,
        userName: user.name,
      },
    });
  };

  const getFriendsButton = () => {
    const friendsAction = () => {
      createFriendship(user.id);
    };

    const status = getStatusFriendShipStatus(loggedUser, user);
    const getText = () => {
      switch (status) {
        case FriendStatus.Confirmend:
          return 'Friend';
        case FriendStatus.Pending:
          return 'Pending';
        default:
          return 'Ask friendship';
      }
    };

    return (
      <button
        onClick={friendsAction}
        disabled={!!status}
        className="p-1 px-2 rounded-full text-white body2 bg-main3  flex justify-center items-center"
      >
        {getText()}
      </button>
    );
  };

  return (
    <div className="w-full flex-col p-2">
      <div className="w-full max-w-3xl flex bg-white shadow-xl p-3 gap-x-4">
        <div className="flex items-center">
          <ProfileIcon />
        </div>
        <div className="flex flex-col">
          <h2>{user?.name}</h2>
          <div className="flex items-center gap-x-2">
            <img src={point} />
            <h3>{user?.address}</h3>
          </div>
          <div className="flex">
            {user?.gender ? (
              <>
                <h3>{user?.gender}</h3>
                <div className="h-1.5 w-1.5 bg-main3 rounded-full ml-1 shrink-0" />
              </>
            ) : null}
            <h3>{user?.birthDay && moment().diff(user.birthDay, 'years')}</h3>
            <p>{user?.description}</p>
          </div>
        </div>
        <div className="flex-1 flex flex- gap-x-2 justify-end items-center">
          <div>{getFriendsButton()}</div>
          <button
            className="w-[120px] min-h-[32px] rounded-full gap-x-2 text-primary body1 font-medium border-primary border bg-white transition-all
         duration-300 hover:shadow-lg md:flex hidden justify-center items-center"
            onClick={navigateToChat}
          >
            <ChatIcon />
            Message
          </button>
        </div>
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
