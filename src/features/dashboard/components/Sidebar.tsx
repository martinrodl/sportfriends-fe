import { Link, NavLink, useLocation } from 'react-router-dom';

import { SLUGS } from '../shared/constants';
import logo from '../assets/images/logo.svg';
import createIcon from '../assets/images/create-outline.svg';
import homeIcon from '../assets/images/fluent_home-16-regular.svg';
import userProfileIcon from '../assets/images/user.svg';
import eventListIcon from '../assets/images/calnder.svg';
import eventsMapIcon from '../assets/images/pin.svg';
import createEventIcon from '../assets/images/events.svg';
import sportsPartnerIcon from '../assets/images/users.svg';
import friendsIcon from '../assets/images/friends.svg';
import settingsIcon from '../assets/images/settings.svg';
import chatIcon from '../assets/images/BsChat.svg';

const Sidebar = () => {
  const location = useLocation();
  const getMatch = (slug: string) => {
    const re = new RegExp(slug);
    return Boolean(location?.pathname.match(re));
  };

  return (
    <div className=" bg-[#04A5C2] h-full pl-2  py-10">
      <Link to="/">
        <img src={logo} alt="" className="mb-10" />
      </Link>
      {links.map((item, index) => {
        return (
          <div key={index}>
            <NavLink
              to={item.slug}
              className="flex items-center px-4 py-3 gap-x-3 transition-all rounded-l-full duration-300 hover:bg-[#50bbce]"
              style={{ backgroundColor: getMatch(item.slug) ? '#50bbce' : '' }}
            >
              {<img src={item.icon} alt="" className="h-5 w-5" />}
              <span className="text-white text-base font-semibold flex">{item.title}</span>
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
    title: 'Create partner post',
    slug: SLUGS.CreateSportsPartnerPost,
    icon: createIcon,
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
