import React from 'react';

import anouncementSvg from '../../../assets/images/announcment.svg';

const Post = () => {
  return (
    <div className="flex p-2 bg-white gap-x-2 shadow-xl w-full rounded-lg">
      <div className="md:w-24 w-12 md:h-24 h-12  bg-primary p-3  rounded-lg flex items-center justify-center">
        <img src={anouncementSvg} />
      </div>
      <div className="flex flex-col">
        <h3>Title</h3>
        <p>12.10.2023</p>
        <p>Content</p>
      </div>
    </div>
  );
};

export default Post;
