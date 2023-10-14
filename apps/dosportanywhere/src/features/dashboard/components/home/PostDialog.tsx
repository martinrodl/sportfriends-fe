import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

import { useCreatePostMutation } from '@sportfriends-fe/shared/data/services';

interface PostDialogProps {
  open: boolean;
  handleClose: () => void;
}

const PostDialog = ({ open, handleClose }: PostDialogProps) => {
  const [createPost, { isSuccess, error, isLoading }] = useCreatePostMutation();
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createPost({
      text,
    });
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="relative">
        <h1 className="text-center text-xl py-4 border-b">Create post</h1>
        <div className="absolute right-4 top-4 cursor-pointer">
          <span>
            <CloseIcon
              onClick={handleClose}
              className="text-white bg-primary w-[26px] h-[26px] p-[3px] flex justify-center items-center rounded-full"
            />
          </span>
        </div>
      </div>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <textarea
            rows={10}
            onChange={(e) => setText(e.target.value)}
            className="focus-within:outline-none p-4"
            placeholder="What’s your mind?"
          />
          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center text-white py-3 rounded-sm bg-primary cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              Post creation
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
