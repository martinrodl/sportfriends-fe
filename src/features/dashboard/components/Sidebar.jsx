import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { SLUGS } from '../shared/constants';
import logo from '../assets/images/logo.svg';
import homeIcon from '../assets/images/fluent_home-16-regular.svg';
import userProfileIcon from '../assets/images/user.svg';
import eventListIcon from '../assets/images/calnder.svg';
import eventsMapIcon from '../assets/images/pin.svg';
import createEventIcon from '../assets/images/events.svg';
import sportsPartnerIcon from '../assets/images/users.svg';
import friendsIcon from '../assets/images/friends.svg';
import settingsIcon from '../assets/images/settings.svg';
import chatIcon from '../assets/images/chat.svg';

const Sidebar = () => {
  return (
    <div className=" bg-[#04A5C2] h-full pl-2  py-10">
      <Link to="/">
        <a>
          <img src={logo} alt="" className="mb-10" />
        </a>
      </Link>
      {links.map((item, index) => {
        return (
          <div key={index}>
            <NavLink
              to={item.slug}
              className="flex px-4 py-3 gap-x-3 transition-all rounded-l-full duration-300 hover:bg-[#50bbce]"
            >
              <img src={item.icon} alt="" />
              <span className="text-white text-base font-semibold flex self-center">{item.title}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
const links = [
  {
    title: 'Home',
    slug: SLUGS.Home,
    icon: homeIcon,
  },
  {
    title: 'My Actions',
    slug: SLUGS.MyActions,
    icon: userProfileIcon,
  },
  {
    title: 'Events list',
    slug: SLUGS.Events,
    icon: eventListIcon,
  },
  {
    title: 'Events map ',
    slug: SLUGS.EventsMap,
    icon: eventsMapIcon,
  },
  {
    title: 'Create Event',
    slug: SLUGS.CreateEvent,
    icon: createEventIcon,
  },
  {
    title: 'Sports partner',
    slug: SLUGS.SportsPartner,
    icon: sportsPartnerIcon,
  },
  {
    title: 'Friends',
    slug: SLUGS.Friends,
    icon: friendsIcon,
  },
  {
    title: 'Chat',
    slug: SLUGS.Chat,
    icon: chatIcon,
  },
  {
    title: 'Settings',
    slug: SLUGS.Settings,
    icon: settingsIcon,
  },
];
