import { FaUserAlt } from 'react-icons/fa';
import { twJoin } from 'tailwind-merge';
import clsx from 'clsx';

interface ProfileIconPros {
  rounded?: boolean;
  imgUrl?: string;
  props?: string;
}

const ProfileImg = ({ imgUrl, rounded = true, ...props }: ProfileIconPros) => {
  if (imgUrl) {
    return <img src={imgUrl} alt="" className="cursor-pointer" />;
  }
  return (
    <div
      className={twJoin(
        'flex flex-col justify-center items-center bg-white border flex-shrink ',
        clsx(rounded && 'rounded-full overflow-hidden'),
        'w-full h-full',
      )}
      {...props}
    >
      {imgUrl ? (
        <img src={imgUrl} alt="" className="cursor-pointer" />
      ) : (
        <FaUserAlt className={`w-1/2 h-1/2`} style={{ color: '#303030' }} />
      )}
    </div>
  );
};

export default ProfileImg;
