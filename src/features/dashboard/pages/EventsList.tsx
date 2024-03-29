import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import React from 'react';
import { useGetEventsQuery } from 'services/eventApi';
import {
  selectSpecificFilter,
  filterTypeEnum,
  selectDistance,
} from 'store/slices';
import { objectToParametrs } from 'shared/utils';
import { colors } from 'shared/constants';
import Modal from 'shared/components/ShadowModal';

import Event from '../components/Event';
import SelectSports from '../components/filter/SelectSports';
import SelectDistance from '../components/filter/SelectDistance';
import SelectDateRange from '../components/filter/SelectDateRange';
import SelectTimeRange from '../components/filter/SelectTimeRange';

const Events = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const filters = useSelector(selectSpecificFilter(filterTypeEnum.listEvents));
  const {
    data: events,
    isLoading,
    isSuccess,
    error,
  } = useGetEventsQuery(objectToParametrs(filters));

  const closeFilterModal = () => {
    setIsFilterOpened(false);
  };

  const getFilters = () => {
    return [SelectSports, SelectDistance, SelectDateRange, SelectTimeRange].map(
      (el) => React.createElement(el, { type: filterTypeEnum.listEvents }),
    );
  };

  return (
    <div className="px-5 mt-12 flex justify-around w-full">
      <div className="w-full">
        <h3 className="hidden md:block font-semibold mb-2">All Events</h3>
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
        <div className="flex flex-wrap w-max-sm gap-2 w-full">
          {Array.isArray(events) &&
            events.map((event) => <Event event={event} key={event.id} />)}
        </div>
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
};

export default Events;
