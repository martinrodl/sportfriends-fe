import React from 'react';

import FriendsCard from '../components/FriendsCard';
import PlaceholderImg from '../assets/images/user.png';

export default function Friends() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div>
          <div className="flex justify-between py-10">
            <h1 className="text-xl font-semibold text-[#2D3F65] pb-7">Friend Request</h1>
            <h1 className="text-xl font-medium text-[#04A5C2] pb-7 cursor-pointer">See all</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {data.map((item, index) => (
              <FriendsCard item={item} index={index} key={'friendscard' + index} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <div>
          <div className="flex justify-between py-10">
            <h1 className="text-xl font-semibold text-[#2D3F65] pb-7">Friend Request</h1>
            <h1 className="text-xl font-medium text-[#04A5C2] pb-7 cursor-pointer">See all</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {data.map((item, index) => {
              return (
                <div className="min-w-[153px] shadow-xl rounded-lg" key={index}>
                  <div>
                    <img src={item.pic} alt="" className="w-full" />
                  </div>
                  <div className="px-3 py-6">
                    <h1 className="text-sm font-medium text-[#2D3F65]">{item.friendName}</h1>
                    <div className="flex before:py-4 items-center">
                      <img src={item.avatarPic} alt="" className="w-10" />
                      <h1 className="text-[10px] font-normal text-[#2D3F65] ml-3">{item.mutualFriend}</h1>
                    </div>
                    <a className="bg-[#04A5C2] text-white rounded-sm min-w-[133px] min-h-[29px] text-[9px] font-normal text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg mb-2">
                      {' '}
                      Send Message{' '}
                    </a>
                    <a className="bg-[#DADADA] text-white rounded-sm min-w-[133px] min-h-[29px] text-[9px] font-normal text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
                      {' '}
                      See Profile{' '}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    pic: PlaceholderImg,
    friendName: 'Ahmed hassan',
    avatarPic: PlaceholderImg,
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
  {
    pic: '/imgs/dark-haired-man-in-brown-leather-jacket 2.png',
    friendName: 'Ahmed hassan',
    avatarPic: '/imgs/Group 162901.svg',
    mutualFriend: '3 Mutual Friend',
  },
];
