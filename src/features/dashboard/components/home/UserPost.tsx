import { useState } from 'react';
import moment from 'moment';

import { Post as PostI } from 'models';
import ProfileIcon from '../ProfileIcon';
import BottomPost from './BottomPost';

interface PostProps {
  post: PostI;
}

const UserPost = ({ post }: PostProps) => {
  const { id, text, comments, author, createdAt, likes } = post;
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="w-full mt-2 max-w-2xl rounded-lg bg-white shadow-md">
      <div className="flex justify-between px-4 py-3">
        <div className="flex gap-x-2">
          <div>
            <ProfileIcon />
          </div>
          <div className="flex flex-col self-center">
            <p className="text-sm mb-1">{author.name}</p>
            <p className="text-xs text-[#9A9A9A] mb-1">{`${moment(createdAt).format('DD MMMM hh:mm')}`}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-5">
        <p className="text-sm font-normal text-[#9A9A9A] pb-1">{text}</p>
      </div>
      <BottomPost comments={comments} likes={likes} postId={id} />
    </div>
  );
};

export default UserPost;
