import CircularProgress from '@mui/material/CircularProgress';

import { useGetFriendshipsQuery } from 'services/userApi';

import FriendsGroup from '../components/social/FriendsGroup';
import { FriendStatus } from 'models';

export default function Friends() {
  const { data, isLoading, isSuccess, error } = useGetFriendshipsQuery('');
  const { waitingResponseFriendships, requestedFriendships, confirmedFriendships } = data || {};

  if (isLoading) {
    <CircularProgress />;
  }

  console.log(data);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-12 min-h-screen">
      {waitingResponseFriendships?.length ? (
        <FriendsGroup friendships={waitingResponseFriendships} groupType={FriendStatus.WaitingResponse} />
      ) : null}
      {requestedFriendships?.length ? (
        <FriendsGroup friendships={requestedFriendships} groupType={FriendStatus.Requested} />
      ) : null}
      {<FriendsGroup friendships={confirmedFriendships} groupType={FriendStatus.Confirmend} />}
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
