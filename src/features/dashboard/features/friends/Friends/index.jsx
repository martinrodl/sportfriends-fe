import React from 'react';

import FriendRequest from './FriendRequest';
import ConfirmedFriends from './ConfirmedFriends';

const Friends = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <FriendRequest />
        <ConfirmedFriends />
      </div>
    </div>
  );
};

export default Friends;
