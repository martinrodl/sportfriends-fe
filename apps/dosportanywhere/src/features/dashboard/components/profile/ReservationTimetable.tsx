import { useState } from 'react';
import moment, { Moment } from 'moment';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import CircularProgress from '@mui/material/CircularProgress';

import { Modal } from '@sportfriends-fe/shared/ui';
import { Slot } from '@sportfriends-fe/shared/models';
import {
  objectToParametrs,
  getFullWeekOfMomentDays,
} from '@sportfriends-fe/shared/utils';
import { useGetSlotsQuery } from '@sportfriends-fe/shared/services';

interface ReservationDayProps {
  slots: Slot;
}

const ReservationDay = (slot, onClick) => {
  return (
    <button
      onClick={() => {
        onClick(slot);
      }}
      className="flex gap-x-2"
    >
      <p>{moment(slot.startTime).format('hh:mm')}</p>
      <p>-</p>
      <p>{moment(slot.endTime).format('hh.mm')}</p>
      {slot?.title && <p>{slot.title}</p>}
    </button>
  );
};

const getDay = (day: Moment, slots: Slot[], onClickSlot) => {
  return (
    <div className="min-w-40">
      <div className="flex justify-between items-center px-2 gap-x-2">
        <h3>{day.format('DD.MM')}</h3>
        <h4 className="text-gray-500">{day.format('dddd').slice(0, 3)}</h4>
      </div>
      <div className="h-0.5 bg-neutral-900" />
      <div>
        {slots.length ? (
          slots.map((slot) => ReservationDay(slot, onClickSlot))
        ) : (
          <h3>Empty</h3>
        )}
      </div>
    </div>
  );
};

const SlotDetail = ({ slot }) => {
  if (slot) {
    return (
      <div className="flex flex-col">
        <h2>{slot.title}</h2>
        <h3>Date: {moment(slot.startTime).format('DD:MM.YYYY')}</h3>
        <h3>Start: {moment(slot.startTime).format('hh:mm')}</h3>
        <h3>End: {moment(slot.endTime).format('hh:mm')}</h3>
        <h4>Description: {slot.description}</h4>
      </div>
    );
  }
};

const ReservationTimetable = ({ userId }) => {
  const [pickedWeek, setPickedWeek] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [slotDetail, setSlotDetail] = useState(null);
  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onClickSlot = (slot) => {
    setSlotDetail(slot);
    setIsModalOpened(true);
  };

  const {
    data: slots,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetSlotsQuery(
    objectToParametrs({
      user: userId,
      startTime: getFullWeekOfMomentDays(pickedWeek)[0]
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .toISOString(),
      endTime: getFullWeekOfMomentDays(pickedWeek)[6]
        .set({ hour: 23, minute: 59, second: 59, millisecond: 0 })
        .toISOString(),
    }),
  );

  const onClickLeft = () => {
    setPickedWeek(pickedWeek - 1);
  };
  const onClickRight = () => {
    setPickedWeek(pickedWeek + 1);
  };

  if (isLoading) {
    return (
      <CircularProgress className="mr-5" size={20} style={{ color: 'white' }} />
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Something went wrong - TimeTable</h1>
      </div>
    );
  }
  return (
    <div className="bg-white shadow-xl px-2 pt-2">
      <div className="flex flex-1 flex-col border min-h-40">
        <div className="flex border bg-blue-50 items-center">
          <h1>Reservation</h1>
          <h3 className="text-black"></h3>
          <div className="flex gap-x-2 mt-3 mr-3">
            <button
              onClick={onClickLeft}
              className="h-8 w-11 bg-main3 bg-opacity-5 rounded-full flex justify-center items-center"
            >
              <HiOutlineChevronLeft color="black" />
            </button>
            <button
              onClick={onClickRight}
              className="h-8 w-11 bg-main3 bg-opacity-5 rounded-full flex justify-center items-center"
            >
              <HiOutlineChevronRight color="black" />
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-x-2">
          {getFullWeekOfMomentDays(pickedWeek).map((day) =>
            getDay(
              day,
              slots.filter((slot) =>
                moment(slot.startTime)
                  .startOf('day')
                  .isSame(moment(day).startOf('day')),
              ),
              onClickSlot,
            ),
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpened} onRequestClose={closeModal}>
        <SlotDetail slot={slotDetail} />
      </Modal>
    </div>
  );
};

export default ReservationTimetable;
