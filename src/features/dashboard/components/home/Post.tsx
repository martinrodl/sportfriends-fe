import { useState } from 'react';
import moment from 'moment';

import { Post as PostI } from 'models';

interface PostProps {
  post: PostI;
}

const Post = ({ post }: PostProps) => {
  const { id, text, comments, author, createdAt } = post;
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="w-full mt-12">
      <div className="max-w-2xl border border-primary rounded-lg ">
        <div className="flex justify-between border-b border-primary px-4 py-3">
          <div className="flex gap-x-4">
            <div className="flex flex-col self-center">
              <p className="text-sm text-[#505050] mb-1">{author.name}</p>
              <p className="text-xs text-[#9A9A9A] mb-1">{`${moment(createdAt).format('DD MMMM hh:mm')}`}</p>
            </div>
          </div>
        </div>
        <div className="px-4 py-5">
          <p className="text-sm font-normal text-[#9A9A9A] pb-1">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

// <div className="flex justify-between mb-1.5">
//   <div className="flex gap-3">
//     <img src="/imgs/likee.svg" alt="" />
//     <h2 className="text-[10px] flex self-center text-[#DADADA]">4.5k</h2>
//   </div>
//   <div className="flex gap-3">
//     <h2 className="text-[10px] flex self-center text-[#DADADA]">100 comments</h2>
//   </div>
// </div>
// <div className="flex justify-between border-t border-b border-[#DADADA] py-2">
//   <div className="flex gap-1.5 cursor-pointer">
//     <img src="/imgs/like.svg" alt="" />
//     <h2 className="text-[10px] flex self-center">Like</h2>
//   </div>
//   <div className="flex gap-1.5 cursor-pointer">
//     <img src="/imgs/comment.svg" alt="" />
//     <h2 className="text-[10px] flex self-center">Comments</h2>
//   </div>
//   <div className="flex gap-1.5 cursor-pointer">
//     <img src="/imgs/share.svg" alt="" />
//     <h2 className="text-[10px] flex self-center">Share</h2>
//   </div>
// </div>
// <div>
//   <div className="flex justify-end cursor-pointer gap-x-2 mt-4">
//     <p className="text-[#505050] text-xs">Top comments</p>
//     <img src="/imgs/arrowDoenn.svg" alt="" className="flex self-center pt-1" />
//   </div>
//   <div className="flex gap-x-4 shadow-md px-4 py-1.5 rounded-lg border mt-3">
//     <img
//       src="/imgs/dark-haired-man-in-brown-leather-jacket 2.png"
//       alt=""
//       className="w-[34px] h-[34px] rounded-full"
//     />
//     <input
//       type="text"
//       placeholder="Submit your first comments"
//       className="w-full border-none focus-within:outline-none"
//     />
//   </div>
//   <div className="flex gap-x-4 mt-5">
//     <div>
//       <img
//         src="/imgs/dark-haired-man-in-brown-leather-jacket 2.png"
//         alt=""
//         className="w-[55px] rounded-full"
//       />
//     </div>
//     <div>
//       <h1 className="text-sm">username</h1>
//       <p className="text-sm text-[#9A9A9A]">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus nulla volutpat feugiat sed
//         scelerisque{' '}
//       </p>
//     </div>
//   </div>
// </div>
