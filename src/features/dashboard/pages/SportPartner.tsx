import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetDatingPostsQuery } from 'services/datingApi';
import { selectFilter } from 'store/slices';
import { objectToParametrs } from 'shared/utils';

import PartnerCard from '../components/events/PartnerCard';
import Filter from '../components/filter/Filter';

export default function SportPartner() {
  const [query, setQuery] = useState('');
  const filters = useSelector(selectFilter);
  const {
    data: datingPosts,
    isSuccess: datingSuccess,
    error: datingError,
  } = useGetDatingPostsQuery(objectToParametrs(filters));
  console.log(datingPosts);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <Filter enableFilters={['gender', 'sport', 'distance']} />
        </div>
        {datingSuccess &&
          Array.isArray(datingPosts?.posts) &&
          datingPosts.posts.map((post) => (
            <PartnerCard
              id={post.id}
              title={post.title}
              description={post.description}
              sport={post.sports[0]}
              address={post.address}
              key={post.id}
              author={post.author}
            />
          ))}
      </div>
    </div>
  );
}
