import { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/all';
import { useSelector } from 'react-redux';

import { Comment as CommentI } from 'models';
import { selectAuthId } from 'store/slices';
import { useLikePostMutation, useUnlikePostMutation, useSendPostCommentMutation } from 'services/postApi';

import like from '../../assets/new/Like.svg';
import { ReactComponent as LikeButton } from '../../assets/new/LikeButton.svg';
import { ReactComponent as CommentButton } from '../../assets/new/CommentButton.svg';
import shareButton from '../../assets/new/ShareButton.svg';
import Comment from './Comment';

interface BottomPostProps {
  postId: string;
  likes: string[];
  comments: CommentI[];
}

const BottomPost = ({ postId, likes, comments }: BottomPostProps) => {
  const userId = useSelector(selectAuthId);
  const [comment, setComment] = useState('');
  const [isOpenedCommentsMenu, setIsOpenedCommentsMenu] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const [sendPostComment] = useSendPostCommentMutation();

  const onClickComments = () => {
    setOpenComments(!openComments);
  };

  const onClickLike = () => {
    if (likes.includes(userId)) {
      unlikePost(postId);
    } else {
      likePost(postId);
    }
  };

  const onClickCommentsButton = () => {
    setIsOpenedCommentsMenu(!isOpenedCommentsMenu);
  };

  const onClickSendComment = () => {
    sendPostComment({ postId: postId, text: comment });
    setComment('');
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-col  mx-6 bg-white">
      <div className="flex flex-1 justify-between mb-5">
        <div className="flex items-center">
          <img src={like} alt="Likes" className="w-6" /> <p className="ml-1 text-xs">{likes.length} Likes</p>
        </div>
        <p className="text-xs">{comments.length} Comments</p>
      </div>
      <div className="flex justify-around border-y border-[#A4A4A4] md:p-2 m-1.5 mb-4">
        <button onClick={onClickLike} className="flex items-center">
          <LikeButton stroke={likes.includes(userId) ? '#54D2E0' : '#A4A4A4'} />
          <p className={`ml-1 ${likes.includes(userId) ? 'text-primary' : 'text-[#A4A4A4]'}  text-xs font-medium`}>
            Like
          </p>
        </button>
        <button onClick={onClickCommentsButton} className="flex items-center">
          <CommentButton fill={isOpenedCommentsMenu ? '#54D2E0' : '#A4A4A4'} />
          <p className={`ml-1 ${isOpenedCommentsMenu ? 'text-primary' : 'text-[#A4A4A4]'} text-xs font-medium`}>
            Comments
          </p>
        </button>
        <div className="flex items-center">
          <img src={shareButton} alt="share button" />
          <p className="ml-1 text-[#A4A4A4] text-xs font-medium">Share</p>
        </div>
      </div>
      {isOpenedCommentsMenu && (
        <>
          <div className="py-1 px-4 rounded-xl bg-[#F5F5F5] flex mb-4">
            <input
              value={comment}
              onChange={handleChangeInput}
              type="text"
              placeholder="Write comment"
              className="pr-10 rounded-xl text-xs md:text-sm focus-within:outline-none placeholder-[#9A9A9A] w-full bg-[#F5F5F5]"
            />
            <button onClick={onClickSendComment} className="rounded-full bg-primary py-1.5 px-4">
              <p className="text-white text-sm">Comment</p>
            </button>
          </div>
          <button className="flex items-center" onClick={onClickComments}>
            <h2 className="text-xl mr-1 mb-2">Comments</h2>
            <div className="mb-1">{openComments ? <GoTriangleUp size={15} /> : <GoTriangleDown size={15} />}</div>
          </button>
          {openComments && comments.map((comment) => <Comment comment={comment} />)}
        </>
      )}
    </div>
  );
};

export default BottomPost;
