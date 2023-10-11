import { FaUserAlt } from 'react-icons/fa';

import { useGetUserQuery } from 'services/userApi';

interface ProfileIconPros {
  size?: number;
}

const ProfileIcon = ({ size = 32 }: ProfileIconPros) => {
  const { data: userData } = useGetUserQuery('');
  const { profileImg } = userData || {};

  return (
    <div
      className={`flex h-${size} flex-col justify-center items-center bg-white flex-shrink-0`}
    >
      {profileImg ? (
        <img src={profileImg} alt="" className="cursor-pointer" />
      ) : (
        <FaUserAlt className={`h-full w-full`} style={{ color: '#303030' }} />
      )}
    </div>
  );
};

export default ProfileIcon;
