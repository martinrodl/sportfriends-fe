import { useNavigate } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';

import { SLUGS } from '../../shared/constants';
import AvaratIMG from '../../assets/images/avatar.png';

interface PartnerCardPropsI {
  id: string;
  title: string;
  description: string;
  address: string;
  sport: string;
  author: {
    id: string;
    name: string;
  };
}

const PartnerCard = ({ title, description, address, sport, author }: PartnerCardPropsI) => {
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
    <div className="grid grid-cols-2 border border-gray-200 p-6 shadow mb-4">
      <div className="flex gap-4">
        <div className="h-14 w-14">
          <img src={AvaratIMG} />
        </div>
        <div className="mb-4">
          <h2 className=" text-xl font-semibold">{title}</h2>
          <h3 className="text-sm font-medium">{sport}</h3>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-self-end">
        <FiMapPin />
        <h3 className="text-lg font-normal">{address}</h3>
      </div>
      <p className="col-span-2 my-4">{description}</p>
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
