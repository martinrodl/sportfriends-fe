import moment from 'moment';

import { Comment as CommentI } from '@sportfriends-fe/shared/models';

import ProfileIcon from '../ProfileIcon';

interface CommentProps {
  comment: CommentI;
}

const Comment = ({ comment }: CommentProps) => {
  const { author, text, createdAt } = comment;
  return (
    <div className="flex flex-col flex-1 mb-3">
      <div className="flex flex-1 justify-between items-center mb-0.5">
        <div className="flex items-center">
          <ProfileIcon sizeDesktop={2} size={2} />
          <p className="ml-1 body3 text-main4">{author.name}</p>
        </div>
        <p className="body3 text-main4">
          {moment(createdAt).format('hh:mm DD.MM')}
        </p>
      </div>
      <p className="body2 ">{text}</p>
    </div>
  );
};

export default Comment;
