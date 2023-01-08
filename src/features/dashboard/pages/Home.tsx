import Post from '../components/home/Post';
import PostCreation from '../components/home/PostCreation';

import { useGetPostsQuery } from 'services/postApi';

const Home = () => {
  const { data, isLoading, isSuccess, error } = useGetPostsQuery('');

  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <PostCreation />
        {isSuccess && data.map((post, index) => <Post key={index + post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
