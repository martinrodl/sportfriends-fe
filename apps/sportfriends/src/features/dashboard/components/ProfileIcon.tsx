import { FaUserAlt } from 'react-icons/fa';

import { useGetUserQuery } from '@sportfriends-fe/shared/data/services';

interface ProfileIconPros {
  size?: number;
  sizeDesktop?: number;
}

const ProfileIcon = ({ size = 3, sizeDesktop = 5 }: ProfileIconPros) => {
  const { data: userData } = useGetUserQuery('');
  const { profileImg } = userData || {};

  return (
    <div
      className={`flex md:w-${2 * sizeDesktop} md:h-${2 * sizeDesktop} w-${
        2 * size
      } h-${
        2 * size
      }  flex-col justify-center items-center bg-white rounded-full border flex-shrink-0`}
    >
      {profileImg ? (
        <img src={profileImg} alt="" className="cursor-pointer" />
      ) : (
        <FaUserAlt
          className={`h-${size} w-${size} md:h-${sizeDesktop} md:w-${sizeDesktop}`}
          style={{ color: '#303030' }}
        />
      )}
    </div>
  );
};

export default ProfileIcon;
