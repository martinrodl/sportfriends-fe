import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { setCredentials } from '@sportfriends-fe/shared/data/store';
import { useGetUserQuery } from '@sportfriends-fe/shared/data/services';
import { Modal2 } from '@sportfriends-fe/shared/ui';
import { colors } from '@sportfriends-fe/shared/constants';

import { SLUGS } from '../../shared/constants';
import ProfileIcon from '../ProfileIcon';
import menu from '../../assets/new/Menu.svg';
import NotificationIcon from '../../assets/new/Notification.svg';
import MessageIcon from '../../assets/new/Message.svg';
import AddIcon from '../../assets/new/Add.svg';
import CreateEventIcon from '../../assets/new/CreateEventIcon.svg';
import CreateSportparnerIcon from '../../assets/new/CreateSportparnerIcon.svg';
import CreateTeamIcon from '../../assets/new/CreateTeamIcon.svg';
import CreateOrganization from '../../assets/new/CreateOrganizationIcon.svg';
import ViewProfileIcon from '../../assets/new/ProfileMenuIcon.svg';
import SetProfileIcon from '../../assets/new/SetProfileMenuIcon.svg';
import CredentialsIcon from '../../assets/new/CredentialsMenuIcon.svg';
import SettingsIcon from '../../assets/new/SettingsMenuIcon.svg';
import LogoutIcon from '../../assets/new/LogoutMenuIcon.svg';

type MenuI =
  | {
      title: string;
      slug: string;
      icon: React.ReactNode;
    }
  | {
      title: string;
      action: () => void;
      icon: React.ReactNode;
    };

interface NavbarProps {
  openSideBar: () => void;
}

const Navbar = ({ openSideBar }: NavbarProps) => {
  const { data: userData } = useGetUserQuery('');
  const { name, profileImg } = userData || {};
  const [isOpenedCreateMenu, setIsOpenedCreateMenu] = useState(false);
  const [isOpenedUserMenu, setIsOpenedUserMenu] = useState(false);

  const navigate = useNavigate();

  const onLogout = () => {
    setCredentials({ accessToken: '' });
    navigate('/');
  };

  const plusMenu = [
    {
      title: 'Create Event',
      slug: SLUGS.CreateEvent,
      icon: <CreateEventIcon />,
    },
    {
      title: 'Add Sportpartner',
      slug: SLUGS.CreateSportsPartnerPost,
      icon: <CreateSportparnerIcon />,
    },
    {
      title: 'Create Organization',
      slug: SLUGS.Home,
      icon: <CreateTeamIcon />,
    },
    {
      title: 'Create Team',
      slug: SLUGS.Home,
      icon: <CreateOrganization />,
    },
    {
      title: 'Create Slot',
      slug: SLUGS.CreateSlot,
      icon: <CreateEventIcon />,
    },
  ];

  const profileMenu = [
    {
      title: 'View Profile',
      slug: SLUGS.UserProfile,
      icon: <ViewProfileIcon />,
    },
    {
      title: 'Set Profile',
      slug: SLUGS.Settings,
      icon: <SetProfileIcon />,
    },
    {
      title: 'Credentials',
      slug: SLUGS.Settings,
      icon: <CredentialsIcon />,
    },
    {
      title: 'Settings',
      slug: SLUGS.Settings,
      icon: <SettingsIcon />,
    },
    {
      title: 'Logout',
      action: onLogout,
      icon: <LogoutIcon />,
    },
  ];

  const getLinkItem = (item: MenuI, index: number, menuArray: MenuI[]) => {
    if ('slug' in item) {
      return (
        <Link
          key={'navbarlink' + index}
          onClick={() => {
            setIsOpenedCreateMenu(false);
          }}
          to={'/dashboard/' + item.slug}
          className={`flex items-center bg-white gap-x-3 px-3 h-11 shadow-xl hover:bg-primary
        hover:text-white
         ${menuArray.length - 1 === index ? '' : 'border-b'} 
         ${0 !== index ? '' : 'rounded-t-xl'} ${
            menuArray.length - 1 === index ? 'rounded-b-xl' : ''
          }
        `}
        >
          {item.icon}
          <h4>{item.title}</h4>
        </Link>
      );
    } else {
      return (
        <button
          key={'navbarlink' + index}
          onClick={() => {
            setIsOpenedCreateMenu(false);
            item.action();
          }}
        >
          <div
            className={`flex w-full items-center bg-white gap-x-3 px-3 h-11 shadow-xl hover:bg-primary
          hover:text-white
          ${menuArray.length - 1 === index ? '' : 'border-b'} 
          ${0 !== index ? '' : 'rounded-t-xl'} ${
              menuArray.length - 1 === index ? 'rounded-b-xl' : ''
            }
          `}
          >
            {item.icon}
            <h4>{item.title}</h4>
          </div>
        </button>
      );
    }
  };

  const modalMenu = (menuArray: MenuI[]) => menuArray.map(getLinkItem);

  const getProfileIcon = () => {
    if (profileImg) {
      return <img src={profileImg} alt="" className="cursor-pointer" />;
    } else {
      return (
        <div className="flex md:w-10 md:h-10 w-6 h-6  flex-col justify-center items-center bg-white rounded-full">
          <FaUserAlt
            className="h-3 w-3 md:h-5 md:w-5"
            style={{ color: '#303030' }}
          />
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
          <FiSearch
            className="absolute top-2.5 left-2"
            size="1.5rem"
            style={{ color: colors.secondary }}
          />
        </div>

        <div className="order-2 flex flex-1 justify-end items-center">
          <button
            onClick={openSideBar}
            className="flex-1 ml-5 md:hidden flex-shrink-0"
          >
            <img src={menu} alt="menu" className="w-5 md:w-3 " />
          </button>
          <button
            className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0 ml-2"
            onClick={() => {
              if (!isOpenedCreateMenu) {
                setIsOpenedCreateMenu(true);
              }
            }}
          >
            <AddIcon />
            <Modal2
              isOpened={isOpenedCreateMenu}
              onRequestClose={() => {
                setIsOpenedCreateMenu(false);
              }}
            >
              {modalMenu(plusMenu)}
            </Modal2>
          </button>
          <button className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0 ml-2">
            <NotificationIcon />
          </button>
          <button className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0 ml-2 mr-2">
            <MessageIcon />
          </button>
          <div className="lg:border-l border-l-[#DADADA] md:px-10">
            <div className="flex flex-col self-center  gap-x-2">
              <button
                className="flex gap-x-2"
                onClick={() => {
                  if (!isOpenedUserMenu) {
                    setIsOpenedUserMenu(true);
                  }
                }}
              >
                <ProfileIcon />
                <h4 className=" font-semibold md:flex self-center">
                  {'' || name}
                </h4>
              </button>
              <div className="relative md:right-10 right-24 top-2">
                <Modal2
                  isOpened={isOpenedUserMenu}
                  onRequestClose={() => {
                    setIsOpenedUserMenu(false);
                  }}
                >
                  {modalMenu(profileMenu)}
                </Modal2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
