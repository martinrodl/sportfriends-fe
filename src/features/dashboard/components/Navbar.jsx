import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { setCredentials } from 'store/slices';
import { useGetUserQuery } from 'services/userApi';

import userAvatar from '../assets/images/user.svg';
import userImg from '../assets/images/avatar.png';
import bellImg from '../assets/images/bell.svg';
import notificationCircle from '../assets/images/ion_notifications-circle.svg';
import horidotImg from '../assets/images/horidot.svg';

const Navbar = () => {
  const { data: userData } = useGetUserQuery();
  const { name, profileImg } = userData || {};

  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    setCredentials({ accessToken: '' });
    navigate('/');
  };

  return (
    <div className="w-full md:px-10 px-4 md:pt-8 pb-2 pt-6">
      <div>
        <div className="flex justify-between">
          <div />
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
                <img src={profileImg || userImg} alt="" className="cursor-pointer md:block w-10 h-10 hidden" />
                <span className="hidden text-base font-semibold md:flex self-center">{'' || name}</span>
              </div>
              <button onClick={onLogout}>
                <FiLogOut className="h-6 w-6 ml-6" style={{ color: '#303030' }} />
              </button>
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
