import { useState } from 'react';

import PostDialog from './PostDialog';

const PostCreation = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full mt-12">
      <div className="max-w-2xl border border-primary rounded-lg ">
        <div className="flex gap-x-4 border-b border-[#DADADA] py-4 px-4">
          <img src="/imgs/pen.svg" alt="" />
          <h1 className="text-dark text-sm flex self-center">Add my experience</h1>
        </div>
        <div className="flex gap-x-4 border-b border-[#DADADA] py-6 px-4">
          <h1 className="text-dark text-[#9A9A9A] text-xs flex self-center">
            Share your own experience and discuss with many!
          </h1>
        </div>
        <div className="py-5 px-4">
          <a
            onClick={handleClickOpen}
            className="bg-primary cursor-pointer transition-all duration-300 hover:shadow-xl text-white text-xs px-6 py-3 rounded-md"
          >
            Post creation
          </a>
        </div>
      </div>
      <PostDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default PostCreation;
