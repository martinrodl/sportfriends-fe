import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';

import { BsThreeDotsVertical } from 'react-icons/bs';

import { setCredentials } from 'store/slices';
import { useGetUserQuery } from 'services/userApi';

import menu from '../../assets/new/Menu.svg';

import notificationCircle from '../../assets/images/ion_notifications-circle.svg';
import messageCircle from '../../assets/images/bell.svg';

interface NavbarProps {
  openSideBar: () => void;
}

const Navbar = ({ openSideBar }: NavbarProps) => {
  const { data: userData } = useGetUserQuery('');
  const { name, profileImg } = userData || {};

  const navigate = useNavigate();

  const onLogout = () => {
    setCredentials({ accessToken: '' });
    navigate('/');
  };

  const getProfileIcon = () => {
    if (profileImg) {
      return <img src={profileImg} alt="" className="cursor-pointer" />;
    } else {
      return (
        <div className="flex md:w-10 md:h-10 w-6 h-6  flex-col justify-center items-center bg-white rounded-full">
          <FaUserAlt className="h-3 w-3 md:h-5 md:w-5" style={{ color: '#303030' }} />
        </div>
      );
    }
  };

  return (
    <div className="w-full md:px-10 px-4 md:pt-8 pb-2 pt-6">
      <div className="flex-1 justify-between flex flex-wrap md:flex-nowrap gap-x-2 items-center gap-y-3">
        <div className="relative md:block border-2 rounded-xl border-primary  order-last md:order-1 mx-auto flex-1 min-w-fit max-w-xs">
          <input
            type="text"
            placeholder="Search friends..."
            className="pl-10 pr-3 py-3 rounded-xl text-xs md:text-sm focus-within:outline-none placeholder-black w-full"
          />
          <FiSearch className="absolute top-2.5 left-2" size="1.5rem" style={{ color: '#FAB447' }} />
        </div>

        <div className="order-2 flex flex-1 justify-end items-center">
          <button onClick={openSideBar} className="flex-1 ml-5 md:hidden flex-shrink-0">
            <img src={menu} alt="menu" className="w-5 md:w-3 " />
          </button>
          <button className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0">
            <img src={notificationCircle} alt="notification" />
          </button>
          <button className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0">
            <img src={messageCircle} alt="messages" />
          </button>
          <div className="lg:border-l border-l-[#DADADA] md:px-10">
            <div className="flex self-center  gap-x-2">
              <button className="flex">
                {getProfileIcon()}
                <span className="hidden text-base font-semibold md:flex self-center">{'' || name}</span>
              </button>
              <button onClick={onLogout}>
                <BsThreeDotsVertical className="h-6 w-6" style={{ color: '#303030' }} />
              </button>
              <button onClick={onLogout}>
                <FiLogOut className="h-6 w-6" style={{ color: '#303030' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
