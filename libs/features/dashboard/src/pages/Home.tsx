import UserPost from '../components/home/UserPost';
import PostCreation from '../components/home/PostCreation';
import EventPost from '../components/home/EventPost';

import { useGetPostsQuery } from '@sportfriends-fe/shared/services';

const Home = () => {
  const { data, isLoading, isSuccess, error } = useGetPostsQuery('');

  return (
    <div className="w-full h-screen max-w-5xl">
      <div className="flex flex-col md:flex-row-reverse mx-auto md:p-8 p-2">
        <div className="my-4 mx-4 max-w-xs">
          <PostCreation />
        </div>
        <div className="flex flex-col flex-auto mx-4">
          <EventPost />
          {isSuccess &&
            data.map((post, index) => (
              <UserPost key={index + post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
