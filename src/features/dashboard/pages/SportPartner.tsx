import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetDatingPostsQuery } from 'services/datingApi';
import { objectToParametrs } from 'shared/utils';
import { selectSpecificFilter, filterTypeEnum } from 'store/slices';

import PartnerCard from '../components/events/PartnerCard';
import SelectGender from '../components/filter/SelectGender';
import SelectLevel from '../components/filter/SelectLevel';
import SelectSports from '../components/filter/SelectSports';
import SelectDistance from '../components/filter/SelectDistance';

export default function SportPartner() {
  const filters = useSelector(selectSpecificFilter);
  const {
    data: datingPosts,
    isSuccess: datingSuccess,
    error: datingError,
  } = useGetDatingPostsQuery(objectToParametrs(filters));

  return (
    <div className="px-5 mt-12 flex justify-around max-w-5xl">
      <div>
        <div className="flex flex-wrap w-max-sm gap-2">
          {datingSuccess &&
            Array.isArray(datingPosts?.posts) &&
            datingPosts.posts.map((post) => <PartnerCard post={post} />)}
        </div>
      </div>
      <div className="w-[320px] flex flex-col gap-y-2">
        <h2>Filters</h2>
        <SelectSports type={filterTypeEnum.sportPartner} />
        <SelectDistance type={filterTypeEnum.sportPartner} />
        <SelectGender type={filterTypeEnum.sportPartner} />
        <SelectLevel type={filterTypeEnum.sportPartner} />
      </div>
    </div>
  );
}
