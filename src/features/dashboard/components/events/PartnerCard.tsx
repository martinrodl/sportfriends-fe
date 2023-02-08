import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { SLUGS } from '../../shared/constants';
import ProfileIcon from '../ProfileIcon';
import { PartnerPost as PartnerPostI } from 'models';

interface PartnerCardPropsI {
  post: PartnerPostI;
}

const PartnerCard = ({ post }: PartnerCardPropsI) => {
  const { id, title, description, address, sports, author, labels, createdAt } = post;
  const navigate = useNavigate();
  const navigateToChat = () => {
    navigate(`/dashboard/${SLUGS.Chat}`, {
      state: {
        userId: author.id,
        userName: author.name,
      },
    });
  };
  return (
    <div className="w-full mt-2 max-w-2xl rounded-lg bg-white shadow-md" key={'sportpartnercard' + id}>
      <div className="flex justify-between px-4 py-3">
        <div className="flex gap-x-2">
          <div>
            <ProfileIcon />
          </div>
          <div className="flex flex-col self-center">
            <p className="text-sm mb-1">{author.name}</p>
            <p className="text-xs text-[#9A9A9A] mb-1">{`${moment(createdAt).format('DD MMMM hh:mm')}`}</p>
          </div>
        </div>
      </div>
      <h2>{title}</h2>
      <div className="px-4 py-5">
        <p className="text-sm font-normal text-[#9A9A9A] pb-1">{description}</p>
      </div>
      <button
        className="w-[120px] min-h-[43px] rounded-lg text-white text-lg font-medium bg-[#047488] transition-all duration-300 hover:shadow-lg cursor-pointer md:flex hidden justify-center items-center"
        onClick={navigateToChat}
      >
        Message
      </button>
    </div>
  );
};

export default PartnerCard;
