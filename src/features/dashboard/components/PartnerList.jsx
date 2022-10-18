import React from 'react';
import { Link } from 'react-router-dom';

import { useGetUserDatingPostsQuery } from 'services/datingApi';

import ListHeader from './ListHeader';
import Partner from './Partner';
import { SLUGS } from '../shared/constants';

const PartnerList = () => {
  const { data: datingPosts, isSuccess: datingSuccess, error: datingError } = useGetUserDatingPostsQuery();

  return (
    <div className="mb-10">
      <ListHeader
        title="Sport Partner"
        icon={
          <Link to={'/dashboard/' + SLUGS.CreateSportsPartnerPost}>
            <h2 className="text-[14px] font-normal text-[#04A5C2] px-10 py-2 rounded-full bg-white">Add</h2>
            {/* <img className="h-8" src={sportsPartnerIcon} alt="group" /> */}
          </Link>
        }
      />
      {datingSuccess &&
        Array.isArray(datingPosts?.posts) &&
        datingPosts.posts.map((post) => (
          <Partner
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

export default PartnerList;
