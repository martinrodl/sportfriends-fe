import ProfileIcon from '../ProfileIcon';

import watch from '../../assets/new/Watch.svg';
import point from '../../assets/new/Point.svg';

const EventPost = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between rounded-lg bg-white shadow-md  min-h-40 p-3">
      <div>
        <h1 className="font-medium text-[#282828] text-xl">Lorem ipsum dolor sit amet</h1>
        <div className="flex items-center my-2">
          <img src={point} />
          <p className="text-[##282828] text-sm px-1">Barca</p>
          <div className="h-1.5 w-1.5 bg-[#282828] rounded-full" />
          <p className="text-[#FAB447] text-sm px-1">Outdoor</p>
        </div>
        <div className="flex items-center">
          <p className="text-[##282828] text-sm px-1 font-medium">Football</p>
          <div className="h-1.5 w-1.5 bg-[#282828] rounded-full" />
          <p className="text-[##282828] text-sm px-1 font-medium">3 Participants Joined</p>
        </div>
        <div className="my-2 flex items-center">
          <ProfileIcon />
          <p className="ml-2 font-medium text-sm">Jessica Milan</p>
        </div>
      </div>
      <div className="flex md:flex-col items-center flex-1 justify-start md:justify-center">
        <div className="flex flex-col md:flex-row"></div>
        <img src={watch} className="md:w-[35px] md:h-[35px] w-4 h-4" />
        <p className="font-bold text-base my-1">29&nbsp;Aug</p>
        <p className="font-medium text-sm">22:08&nbsp;-&nbsp;01:08</p>
      </div>
    </div>
  );
};

export default EventPost;
