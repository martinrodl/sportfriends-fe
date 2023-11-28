import React from 'react';
import ProfileImg from '../userinfo/ProfileImg';
import reviewStarSvg from '../../../assets/images/reviewStar.svg';

interface ReviewProps {
  name: string;
  imgUrl?: string;
  rating: number;
  review: string;
  date: string;
}

const Review = ({ name, imgUrl, rating, review, date }: ReviewProps) => {
  return (
    <div className="flex flex-col bg-white p-2 shadow-lg rounded-lg">
      <div className="flex flex-row md:h-[50px] gap-x-2">
        <div className="md:w-[50px] w-[35px]">
          <ProfileImg imgUrl={imgUrl} rounded={true} />
        </div>
        <div className="flex flex-col">
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
        <div className="flex flex-row flex-1 justify-end self-start items-center mr-3">
          <img className="h-3" src={reviewStarSvg} alt="review star" />
          <p>{rating}</p>
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default Review;
