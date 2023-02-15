import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { PartnerPost as PartnerPostI } from 'models';

import { ReactComponent as ChatIcon } from '../../assets/new/ChatMessage.svg';
import { SLUGS } from '../../shared/constants';
import ProfileIcon from '../ProfileIcon';

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
    <div className="w-full max-w-2xl rounded-lg bg-white shadow-md px-3 pb-3 flex flex-col">
      <div className="flex justify-between px-4 py-3">
        <div className="flex gap-x-2">
          <div>
            <ProfileIcon />
          </div>
          <div className="flex flex-col self-center">
            <p className="body2">{author.name}</p>
            <p className="text-xs text-main4 mb-1">{`${moment(createdAt).format('DD MMMM hh:mm')}`}</p>
          </div>
        </div>
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="body2 font-normal text-main4 mb-2">{description}</p>
      <button
        className="w-[120px] min-h-[32px] rounded-full gap-x-2 text-primary body1 font-medium border-primary border bg-white transition-all
         duration-300 hover:shadow-lg md:flex hidden justify-center items-center self-end"
        onClick={navigateToChat}
      >
        <ChatIcon />
        Message
      </button>
    </div>
  );
};

export default PartnerCard;
