import { Link } from 'react-router-dom';

import { useGetUserDatingPostsQuery } from 'services/datingApi';

import PartnerCard from './PartnerCard';

const SportPartner = (): JSX.Element => {
  const { data, isSuccess, error } = useGetUserDatingPostsQuery('');
  return (
    <div>
      {isSuccess && Array.isArray(data?.posts) && data.posts.length ? (
        data.posts.map((post) => (
          <PartnerCard
            id={post.id}
            title={post.title}
            description={post.description}
            sport={post.sports[0]}
            key={post.id}
          />
        ))
      ) : (
        <h1>You have not created any Sportpartner post.</h1>
      )}
    </div>
  );
};

export default SportPartner;
