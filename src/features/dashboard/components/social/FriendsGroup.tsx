import { Friendship } from 'models';

import FriendsCard from './FriendsCard';
import { FriendStatus } from 'models';

interface FriendsGroupProps {
  friendships: Friendship[];
  groupType: FriendStatus;
}

const FriendsGroup = ({ friendships, groupType }: FriendsGroupProps) => {
  const getText = (type: FriendStatus) => {
    switch (type) {
      case FriendStatus.Pending:
        return 'Sent reuquests';
      case FriendStatus.Pending:
        return 'Waiting for response requests';
      case FriendStatus.Confirmend:
        return 'Friends';
    }
  };

  return (
    <div>
      <div className="flex justify-between py-5">
        <h3 className="text-xl font-semibold text-main2">{getText(groupType)}</h3>
        {/* <h3 className="text-xl font-medium text-primary pb-7 cursor-pointer">See all</h3> */}
      </div>
      {friendships?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {friendships?.map((friendShip) => (
            <FriendsCard friendShip={friendShip} key={'friendscard' + friendShip.id} />
          ))}
        </div>
      ) : (
        <p className="body1 text-main2">There is no friendships</p>
      )}
    </div>
  );
};

export default FriendsGroup;
