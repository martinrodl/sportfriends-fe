import { Link, NavLink, useLocation } from 'react-router-dom';

import { SLUGS } from '../../shared/constants';
import logo from 'shared/assets/images/sportfriendsLogo.svg';
import createIcon from '../../assets/images/create-outline.svg';
import homeIcon from '../../assets/new/Home.svg';
import userProfileIcon from '../../assets/new/User.svg';
import eventListIcon from '../../assets/new/Calendar.svg';
import eventsMapIcon from '../../assets/new/MapPointer.svg';
import createEventIcon from '../../assets/images/events.svg';
import sportsPartnerIcon from '../../assets/new/SportPartner.svg';
import socialIcon from '../../assets/new/Social.svg';
import settingsIcon from '../../assets/images/settings.svg';
import chatIcon from '../../assets/new/Chat.svg';

interface SideBarProps {
  onClose: () => void;
  isClosed: boolean;
}

const Sidebar = ({ onClose, isClosed }: SideBarProps) => {
  const location = useLocation();
  const getMatch = (slug: string) => {
    const re = new RegExp(slug);
    return Boolean(location?.pathname.match(re));
  };

  return (
    <div>
      <div className="flex flex-col align-items bg-white h-full w-60 px-3.5 py-5 rounded-3xl shadow-xl">
        <Link to="/" className="mt-4 mb-10 w-3/4">
          <img src={logo} alt="" />
        </Link>
        {links.map((item, index) => {
          return (
            <div key={index}>
              <NavLink
                to={item.slug}
                className="flex items-center px-4 py-3 gap-x-3 transition-all rounded-xl duration-300 hover:bg-[#54D2E0]"
                style={{ backgroundColor: getMatch(item.slug) ? '#54D2E0' : '' }}
              >
                {<img src={item.icon} alt="" className="h-5 w-5 fill-black" />}
                <span className="text-black text-sm font-semibold flex-1">{item.title}</span>
                <div className="bg-white rounded-full h-2 w-2" />
              </NavLink>
            </div>
          );
        })}
      </div>
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
    title: 'Sports partner',
    slug: SLUGS.SportsPartner,
    icon: sportsPartnerIcon,
  },
  {
    title: 'Social',
    slug: SLUGS.Social,
    icon: socialIcon,
  },
  {
    title: 'Chat',
    slug: SLUGS.Chat,
    icon: chatIcon,
  },
];
