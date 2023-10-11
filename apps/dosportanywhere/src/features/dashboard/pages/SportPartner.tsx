import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import { useGetDatingPostsQuery } from 'services/datingApi';
import { objectToParametrs } from 'shared/utils';
import { selectSpecificFilter, filterTypeEnum } from 'store/slices';
import { colors } from 'shared/constants';
import Modal from 'shared/components/ShadowModal';

import PartnerCard from '../components/events/PartnerCard';
import SelectGender from '../components/filter/SelectGender';
import SelectLevel from '../components/filter/SelectLevel';
import SelectSports from '../components/filter/SelectSports';
import SelectDistance from '../components/filter/SelectDistance';

export default function SportPartner() {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  const filters = useSelector(selectSpecificFilter);
  const {
    data: datingPosts,
    isSuccess: datingSuccess,
    error: datingError,
  } = useGetDatingPostsQuery(objectToParametrs(filters));

  const closeFilterModal = () => {
    setIsFilterOpened(false);
  };

  const getFilters = () => {
    return [SelectSports, SelectDistance, SelectGender, SelectLevel].map(
      (el, i) =>
        React.createElement(el, {
          type: filterTypeEnum.sportPartner,
          key: 'sportpartner' + i,
        }),
    );
  };

  return (
    <div className="px-5 mt-12 flex justify-around max-w-5xl">
      <div className="flex flex-col w-full gap-2 px-4">
        <button
          className="flex md:hidden bg-white items-center"
          onClick={() => {
            setIsFilterOpened(true);
          }}
        >
          <p className="text-primary">Filters</p>
          <div className="mb-0">
            {isFilterOpened ? (
              <GoTriangleUp style={{ color: colors.primary }} size={15} />
            ) : (
              <GoTriangleDown style={{ color: colors.primary }} size={15} />
            )}
          </div>
        </button>
        {datingSuccess &&
          Array.isArray(datingPosts?.posts) &&
          datingPosts.posts.map((post) => (
            <PartnerCard post={post} key={post.id} />
          ))}
      </div>
      <div className="hidden md:flex my-4 mx-4  flex-col gap-y-2 w-[320px] shrink-0">
        <h3 className="font-semibold mb-2">Filters</h3>
        {getFilters()}
      </div>
      <Modal isOpened={isFilterOpened} onRequestClose={closeFilterModal}>
        <div className="flex flex-col gap-y-2 p-3 w-full">{getFilters()}</div>
      </Modal>
    </div>
  );
}
