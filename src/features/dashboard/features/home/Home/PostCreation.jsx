import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
const PostCreation = () => {
  const [open, setOpen] = React.useState(false);

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
          <h1 className="text-dark text-sm flex self-center">
            Add my experience
          </h1>
        </div>
        <div className="flex gap-x-4 border-b border-[#DADADA] py-6 px-4">
          <img
            src="/imgs/Ellipse 60.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-dark text-[#9A9A9A] text-xs flex self-center">
            Share your own experience and educate many!
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
      <Dialog open={open} onClose={handleClose}>
        <div className="relative">
          <h1 className="text-center text-xl py-4 border-b">Create post</h1>
          <div className="absolute right-4 top-4 cursor-pointer">
            <span>
              <CloseIcon
                onClick={handleClose}
                className="text-white bg-[#04A5C2] w-[26px] h-[26px] p-[3px] flex justify-center items-center rounded-full"
              />
            </span>
          </div>
        </div>
        <DialogContent>
          <div className="flex gap-x-4">
            <img
              src="/imgs/Ellipse 53.svg"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <h2 className="text-lg flex self-center">Denney Smith</h2>
          </div>
          <textarea
            rows={10}
            className="focus-within:outline-none p-4"
            placeholder="What’s your mind, Smith?"
          />
          <div className="relative flex justify-between rounded border py-3 px-5 mt-5">
            <p>Add to your post</p>
            <img
              src="/imgs/bx_images.svg"
              alt=""
              className="flex self-center"
            />
          </div>
          <div className="mt-4">
            <a className="flex justify-center text-white py-3 rounded-sm bg-[#04A5C2] cursor-pointer transition-all duration-300 hover:shadow-xl">
              Post creation
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostCreation;
