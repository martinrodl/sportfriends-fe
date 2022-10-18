import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function stringAvatar(name) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function FriendsCard({ item, index }) {
  return (
    <div className="min-w-[153px] shadow-xl rounded-lg" key={index}>
      <div className="w-full flex justify-center">
        <Avatar {...stringAvatar('Kent Dodds')} sx={{ width: 56, height: 56 }} />
      </div>
      <div className="px-3 py-6">
        <h1 className="text-sm font-medium text-[#2D3F65]">{item.friendName}</h1>
        <div className="flex before:py-4 items-center">
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 12, height: 12 }} />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 12, height: 12 }} />
          </AvatarGroup>
          <h1 className="text-[10px] font-normal text-[#2D3F65] ml-3">{item.mutualFriend}</h1>
        </div>
        <button className="bg-[#04A5C2] text-white rounded-sm min-w-[133px] min-h-[29px] text-[9px] font-normal text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg mb-2">
          {' '}
          Confirm{' '}
        </button>
        <button className="bg-[#DADADA] text-white rounded-sm min-w-[133px] min-h-[29px] text-[9px] font-normal text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
          {' '}
          Delete{' '}
        </button>
      </div>
    </div>
  );
}
