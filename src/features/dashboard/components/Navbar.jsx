import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDetectClickOutside } from 'react-detect-click-outside';

import userAvatar from '../assets/images/user.svg';
import bellImg from '../assets/images/bell.svg';
import notificationCircle from '../assets/images/ion_notifications-circle.svg';
import searchImg from '../assets/images/fe_search.svg';
import bubbleImg from '../assets/images/bubble.svg';
import horidotImg from '../assets/images/horidot.svg';
import ellipseImg from '../assets/images/Ellipse 53.svg';

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const closeDropdown = () => {
    setShowNotification(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div className="w-full md:px-10 px-4 md:pt-8 pb-2 pt-6" ref={ref}>
      <div>
        <div className="flex justify-between">
          <div>
            <div className="relative lg:block hidden border-2 border-primary rounded-md">
              <input
                type="text"
                placeholder="Search friends...."
                className="pl-8 pr-3 py-3 text-[#8695A0]  focus-within:outline-none"
              />
              <img src={searchImg} alt="" className="absolute top-[10px] " />
            </div>
          </div>
          <div className="lg:border-l border-l-[#DADADA] md:px-10">
            <div className="flex gap-x-2 items-center">
              <img src={notificationCircle} alt="" className="cursor-pointer" />
              <img
                src={bellImg}
                alt=""
                className="cursor-pointer"
                onClick={() => setShowNotification(!showNotification)}
              />
              <div className="flex self-center  gap-x-2">
                <img src={ellipseImg} alt="" className="cursor-pointer md:block  hidden" />
                <span className="hidden text-base font-semibold md:flex self-center">Smith</span>
                <BsSearch className="w-full cursor-pointer -mt-2 text-2xl text-white flex self-center" />
              </div>
              <img src={bubbleImg} alt="" className="pl-4 cursor-pointer  md:block  hidden" />
            </div>
          </div>
        </div>
      </div>
      {showNotification && (
        <div className="absolute right-10 top-[96px]">
          <div className="bg-[#F4F4F4] max-w-[391px] p-4">
            {notification.map((item, index) => {
              return (
                <div className="flex gap-x-3 mb-6" key={index}>
                  <div>
                    <img src={item.userAvatar} alt="" />
                  </div>
                  <div className="flex self-center">
                    <div>
                      <h1 className="text-[11px] font-medium max-w-[200px]">{item.title}</h1>
                      <p className="text-[8px] font-normal">{item.time}</p>
                    </div>
                  </div>
                  <div className="flex self-center pb-6 cursor-pointer">
                    <img src={horidotImg} alt="" />
                  </div>
                </div>
              );
            })}
            <div>
              <button className="w-full bg-[#46B1BD] py-2 text-white transition-all duration-300 hover:shadow-xl cursor-pointer flex justify-center">
                See all
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

const notification = [
  {
    userAvatar: userAvatar,
    title: 'Lorem ipsum dolor sit amet,ipsum dolor sit amet.',
    time: '7 minutes ago',
  },
  {
    userAvatar: userAvatar,
    title: 'Lorem ipsum dolor sit amet,ipsum dolor sit amet.',
    time: '7 minutes ago',
  },
  {
    userAvatar: userAvatar,
    title: 'Lorem ipsum dolor sit amet,ipsum dolor sit amet.',
    time: '7 minutes ago',
  },
  {
    userAvatar: userAvatar,
    title: 'Lorem ipsum dolor sit amet,ipsum dolor sit amet.',
    time: '7 minutes ago',
  },
  {
    userAvatar: userAvatar,
    title: 'Lorem ipsum dolor sit amet,ipsum dolor sit amet.',
    time: '7 minutes ago',
  },
  {
    userAvatar: userAvatar,
    title: 'Lorem ipsum dolor sit amet,ipsum dolor sit amet.',
    time: '7 minutes ago',
  },
];
