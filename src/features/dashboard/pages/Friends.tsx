import CircularProgress from '@mui/material/CircularProgress';

import { useGetFriendshipsQuery } from 'services/userApi';

import FriendsCard from '../components/friends/FriendsCard';

export default function Friends() {
  const { data, isLoading, isSuccess, error } = useGetFriendshipsQuery('');
  const { waitingResponseFriendships, requestedFriendships, confirmedFriendships } = data || {};

  if (isLoading) {
    <CircularProgress />;
  }

  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12 min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div>
          <div className="flex justify-between py-10">
            <h1 className="text-xl font-semibold text-[#2D3F65] pb-7">Waiting for response requests</h1>
            <h1 className="text-xl font-medium text-[#04A5C2] pb-7 cursor-pointer">See all</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {waitingResponseFriendships?.map((friendShip) => (
              <FriendsCard friendShip={friendShip} key={'friendscard' + friendShip.id} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between py-10">
            <h1 className="text-xl font-semibold text-[#2D3F65] pb-7">Sent reuquests</h1>
            <h1 className="text-xl font-medium text-[#04A5C2] pb-7 cursor-pointer">See all</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {requestedFriendships?.map((friendShip) => (
              <FriendsCard friendShip={friendShip} key={'friendscard' + friendShip.id} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between py-10">
            <h1 className="text-xl font-semibold text-[#2D3F65] pb-7">Friends</h1>
            <h1 className="text-xl font-medium text-[#04A5C2] pb-7 cursor-pointer">See all</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {confirmedFriendships?.map((friendShip) => (
              <FriendsCard friendShip={friendShip} key={'friendscard' + friendShip.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// const data = [
//   {
//     pic: PlaceholderImg,
//     friendName: 'Ahmed hassan',
//     avatarPic: PlaceholderImg,
//     mutualFriend: '3 Mutual Friend',
//   },
//   {
//     pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
//     friendName: 'Ahmed hassan',
//     avatarPic: '/imgs/Group 162901.svg',
//     mutualFriend: '3 Mutual Friend',
//   },
// ]
