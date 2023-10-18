import { User, FriendStatus } from '@sportfriends-fe/shared/models';

export const getStatusFriendShipStatus = (
  loggedUser: User,
  secondUser: User,
): FriendStatus | null => {
  if (!loggedUser || !secondUser) {
    return null;
  }
  const friendship = loggedUser.friendships.filter(
    (friendship) =>
      friendship.recipient === secondUser.id ||
      friendship.requester === secondUser.id,
  );

  if (friendship.length) {
    if (friendship[0].status === FriendStatus.Pending) {
      return FriendStatus.Pending;
    }
    return FriendStatus.Confirmend;
  }
  return null;
};
