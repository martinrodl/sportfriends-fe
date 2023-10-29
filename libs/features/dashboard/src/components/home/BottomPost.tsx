import { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useSelector } from 'react-redux';

import { Comment as CommentI } from '@sportfriends-fe/shared/models';
import { selectAuthId } from '@sportfriends-fe/shared/data/store';
import {
  useLikePostMutation,
  useUnlikePostMutation,
  useSendPostCommentMutation,
} from '@sportfriends-fe/shared/data/services';
import { colors } from '@sportfriends-fe/shared/constants';

import { ReactComponent as Like } from '../../assets/new/Like.svg';
import { ReactComponent as LikeButton } from '../../assets/new/LikeButton.svg';
import { ReactComponent as CommentButton } from '../../assets/new/CommentButton.svg';
import { ReactComponent as ShareButton } from '../../assets/new/ShareButton.svg';
import Comment from './Comment';

interface BottomPostProps {
  postId: string;
  likes: string[];
  comments: CommentI[];
}

const BottomPost = ({ postId, likes, comments }: BottomPostProps) => {
  const userId = useSelector(selectAuthId) as string;
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
      <div className="flex flex-1 justify-between items-center mb-5">
        <div className="flex items-center">
          <Like className="w-6" />
          <p className="ml-1 body3">{likes.length} Likes</p>
        </div>
        <p className="body3">{comments.length} Comments</p>
      </div>
      <div className="flex justify-around border-y border-accent4 p-1 md:p-2 m-1.5 mb-4">
        <button onClick={onClickLike} className="flex items-center">
          <LikeButton
          // stroke={likes.includes(userId) ? colors.primary : colors.accent4}
          />
          <p
            className={`ml-1 ${
              likes.includes(userId) ? 'text-primary' : 'text-accent4'
            }  body3 font-medium`}
          >
            Like
          </p>
        </button>
        <button onClick={onClickCommentsButton} className="flex items-center">
          <CommentButton
          // fill={isOpenedCommentsMenu ? colors.primary : colors.accent4}
          />
          <p
            className={`ml-1 ${
              isOpenedCommentsMenu ? 'text-primary' : 'text-accent4'
            } body3 font-medium`}
          >
            Comments
          </p>
        </button>
        <div className="flex items-center">
          <ShareButton />
          <p className="ml-1 text-accent4 body3 font-medium">Share</p>
        </div>
      </div>
      {isOpenedCommentsMenu && (
        <>
          <div className="py-1 px-4 rounded-xl bg-whitedarker flex mb-4">
            <input
              value={comment}
              onChange={handleChangeInput}
              type="text"
              placeholder="Write comment"
              className="pr-10 rounded-xl text-xs md:text-sm focus-within:outline-none placeholder-main4 w-full bg-[#F5F5F5]"
            />
            <button
              onClick={onClickSendComment}
              className="rounded-full bg-primary py-1.5 px-4"
            >
              <p className="text-white text-sm">Comment</p>
            </button>
          </div>
          <button className="flex items-center" onClick={onClickComments}>
            <h4 className="mr-1 mb-2">Comments</h4>
            <div className="mb-1">
              {openComments ? (
                <GoTriangleUp size={15} />
              ) : (
                <GoTriangleDown size={15} />
              )}
            </div>
          </button>
          {openComments &&
            comments.map((comment) => <Comment comment={comment} />)}
        </>
      )}
    </div>
  );
};

export default BottomPost;
