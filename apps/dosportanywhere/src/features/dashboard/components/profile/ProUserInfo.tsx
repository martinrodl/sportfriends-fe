import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import { FriendStatus } from 'models';
import {
  useGetSpecificUserQuery,
  useGetUserQuery,
  useCreateFriendshipMutation,
} from 'services/userApi';

import { SLUGS } from '../../shared/constants';

import RectangleProfileIcon from '../RectangleProfileIcon';
import point from '../../assets/new/Point.svg';
import { ReactComponent as ChatIcon } from '../../assets/new/ChatMessage.svg';
import { getStatusFriendShipStatus } from '../../shared/utils';

interface User {
  id: string;
  name: string;
  address: string;
  gender: string;
  birthDay: string;
}

interface UserInfoProps {
  id: string;
  user: User;
  loggedUser: User;
  self: boolean;
}

const ProUserInfo = ({ user, loggedUser, self }) => {
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
    <div className="bg-white shadow-xl px-2 pt-2">
      <div className="w-full max-w-3xl flex p-3 gap-x-4">
        <div className="flex items-center mx-6 my-6">
          <RectangleProfileIcon />
        </div>
        <div className="flex flex-col w-1/2 gap-y-2">
          <div className="flex flex-1 justify-between">
            <h2>{user?.name}</h2>
            <h2>PRO</h2>
          </div>
          <div className="flex items-center gap-x-2">
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
          {self && (
            <div className="flex flex-1 items-center justify-between">
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
          )}
        </div>
      </div>
      <div className="flex mt-5 gap-x-0">
        <button
          className="w-[120px] min-h-[32px] rounded-t-md  gap-x-2 text-primary body1 font-medium border-primary border-x border-t bg-white transition-all
         duration-300 hover:shadow-lg md:flex hidden justify-center items-center"
        >
          Profile
        </button>
        <button
          className="w-[120px] min-h-[32px] rounded-t-md gap-x-2 text-primary body1 font-medium border-primary border-x border-t bg-white transition-all
         duration-300 hover:shadow-lg md:flex hidden justify-center items-center ml-[-1px]"
        >
          Timetable
        </button>
      </div>
    </div>
  );
};

export default ProUserInfo;
