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
      <h1 className="text-xl font-semibold flex self-center color-[#282828] my-2">Add my experience</h1>
      <div className="flex flex-col h-44 max-w-2xl border border-[#E0E0E0] rounded-lg p-5">
        <div className="flex gap-x-2">
          <ProfileIcon />
          <h1 className="text-dark text-[#9A9A9A] text-xs flex self-center">
            Share your own experience and discuss with many!
          </h1>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            onClick={handleClickOpen}
            className="bg-primary cursor-pointer transition-all duration-300 hover:shadow-xl px-6 py-3 rounded-full w-32 self-end text-white text-sm font-medium"
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
