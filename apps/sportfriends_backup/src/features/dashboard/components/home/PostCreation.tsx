import { useState } from 'react';

import PostDialog from './PostDialog';
import ProfileIcon from '../ProfileIcon';

const PostCreation = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full">
      <h3 className="font-semibold flex self-center color-main3 my-2">Add my experience</h3>
      <div className="flex flex-col h-44 max-w-2xl border border-accent6 rounded-lg p-5">
        <div className="flex gap-x-2">
          <ProfileIcon />
          <p className="text-dark text-main4 p2 flex self-center">Share your own experience and discuss with many!</p>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            onClick={handleClickOpen}
            className="bg-primary cursor-pointer transition-all duration-300 hover:shadow-xl px-5 py-2 rounded-full self-end text-white body1 font-medium"
          >
            Create Post
          </button>
        </div>
      </div>
      <PostDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default PostCreation;
