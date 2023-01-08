import { Friendship } from 'models';

import FriendsCard from './FriendsCard';

interface FriendsGroupProps {
  friendships: Friendship[];
  groupType: 'requests' | 'requested' | 'confirmed';
}

const FriendsGroup = ({ friendships, groupType }: FriendsGroupProps) => {
  const getText = () => {
    switch (groupType) {
      case 'requests':
        return 'Sent reuquests';
      case 'requested':
        return 'Waiting for response requests';
      case 'requests':
        return 'Friends';
    }
  };

  return (
    <div>
      <div className="flex justify-between py-10">
        <h1 className="text-xl font-semibold text-[#2D3F65] pb-7">Sent reuquests</h1>
        <h1 className="text-xl font-medium text-[#04A5C2] pb-7 cursor-pointer">See all</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {friendships?.map((friendShip) => (
          <FriendsCard friendShip={friendShip} key={'friendscard' + friendShip.id} />
        ))}
      </div>
    </div>
  );
};

export default FriendsGroup;
