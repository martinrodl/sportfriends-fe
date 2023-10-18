import ProfileIcon from '../ProfileIcon';

import watch from '../../assets/new/Watch.svg';
import point from '../../assets/new/Point.svg';

const EventPost = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between rounded-lg bg-white shadow-md  min-h-40 p-3">
      <div>
        <h3 className="font-semibold text-main3">Lorem ipsum dolor sit amet</h3>
        <div className="flex items-center my-2">
          <img src={point} />
          <p className="text-main3 body2 px-1 mr-1">Barca</p>
          <div className="h-1.5 w-1.5 bg-main3 rounded-full" />
          <p className="text-secondary body2 px-1">Outdoor</p>
        </div>
        <div className="flex items-center">
          <p className="text-main3 body2 px-1 font-semibold mr-1">Football</p>
          <div className="h-1.5 w-1.5 bg-main3 rounded-full" />
          <p className="text-main3 body2 px-1 font-semibold">3 Participants Joined</p>
        </div>
        <div className="my-2 flex items-center">
          <ProfileIcon />
          <p className="ml-2 font-medium body2">Jessica Milan</p>
        </div>
      </div>
      <div className="flex md:flex-col gap-1 items-center flex-1 justify-start md:justify-center">
        <div className="flex flex-col md:flex-row"></div>
        <img src={watch} className="md:w-[35px] md:h-[35px] w-4 h-4 mr-1 md:mr-0" />
        <p className="font-semibold body1 my-1">29&nbsp;Aug</p>
        <p className="font-medium body2">22:08&nbsp;-&nbsp;01:08</p>
      </div>
    </div>
  );
};

export default EventPost;
