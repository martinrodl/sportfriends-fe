import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { useConfirmFriendshipMutation, useRejectFriendshipMutation } from 'services/userApi';
import { Friendship, FriendStatus } from 'models';

interface FriendCardProps {
  friendShip: Friendship;
  status: FriendStatus;
}

export default function FriendsCard({ friendShip, status }: FriendCardProps) {
  const { id, name } = friendShip;

  const [confirmedFriendship, { isSuccess, error }] = useConfirmFriendshipMutation();
  const [rejectFriendship] = useRejectFriendshipMutation();

  const confirmCallback = () => {
    confirmedFriendship(id);
  };
  const rejectCallback = () => {
    rejectFriendship(id);
  };

  const getButtons = () => {
    if (status === FriendStatus.WaitingResponse) {
      return (
        <div className="w-full flex flex-col gap-y-2">
          <button
            onSubmit={confirmCallback}
            className="bg-main3 text-white rounded-full body4 w-full min-h-[29px] text-center"
          >
            Confirm
          </button>
          <button
            onSubmit={rejectCallback}
            className="bg-main4 text-white rounded-full body4 w-full min-h-[29px] text-center"
          >
            Reject
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-w-[153px] shadow-xl rounded-lg flex flex-col items-center gap-y-2 p-2" key={id}>
      <div className="w-full flex justify-center">
        <Avatar sx={{ width: 56, height: 56 }} />
      </div>

      <h4 className=" text-main2">{name}</h4>
      {/* <div className="flex before:py-4 items-center">
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 12, height: 12 }} />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 12, height: 12 }} />
          </AvatarGroup>
          <h1 className="text-[10px] font-normal text-[#2D3F65] ml-3">{0}</h1>
        </div> */}

      {getButtons()}
    </div>
  );
}
