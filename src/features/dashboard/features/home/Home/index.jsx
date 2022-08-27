import React from 'react';

import Post from './Post';
import PostCreation from './PostCreation';

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <PostCreation />
        <Post />
      </div>
    </div>
  );
};

export default Home;
