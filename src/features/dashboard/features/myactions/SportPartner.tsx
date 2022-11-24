import { useGetUserDatingPostsQuery } from 'services/datingApi';

import PartnerCard from './components/PartnerCard';

const SportPartner = (): JSX.Element => {
  const { data, isSuccess, error } = useGetUserDatingPostsQuery('');
  return (
    <div>
      {isSuccess &&
        Array.isArray(data?.posts) &&
        data.posts.map((post) => (
          <PartnerCard
            id={post.id}
            title={post.title}
            description={post.description}
            sport={post.sports[0]}
            key={post.id}
          />
        ))}
    </div>
  );
};

export default SportPartner;
