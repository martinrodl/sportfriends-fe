import { useState, useEffect } from 'react';
import moment from 'moment';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { getFullWeekOfMomentDays } from '@sportfriends-fe/shared/utils';
interface CalendarProps {
  getPickedDate?: (pickedDay: moment.Moment) => void;
  dates?: moment.Moment[];
}

const Calendar = ({ getPickedDate, dates }: CalendarProps) => {
  const [pickedDay, setPickedDay] = useState(moment());
  const [pickedWeek, setPickedWeek] = useState(0);

  useEffect(() => {
    if (getPickedDate) {
      getPickedDate(pickedDay);
    }
  }, [pickedDay]);

  const dayOfCalender = (day: moment.Moment, hasEvent = true) => (
    <div className="flex flex-col items-center" key={'day' + String(day)}>
      <button
        onClick={() => {
          setPickedDay(day);
        }}
        className={`flex flex-col justify-center gap-y-1 h-16 w-9 rounded-xl ${
          day.day() === pickedDay.day() ? 'bg-primary' : ''
        }`}
      >
        <h4>{day.format('DD')}</h4>
        <h4>{day.format('dd')}</h4>
      </button>
      <div
        className={`${
          hasEvent ? 'bg-primary' : 'bg-white'
        } h-2 w-2 rounded-full mt-2`}
      />
    </div>
  );

  const onClickLeft = () => {
    setPickedWeek(pickedWeek - 1);
  };
  const onClickRight = () => {
    setPickedWeek(pickedWeek + 1);
  };

  const checkIfContainsDate = (
    dates: moment.Moment[] | undefined,
    day: moment.Moment,
  ): boolean => {
    if (dates) {
      return Boolean(
        dates.filter((date) =>
          moment(date).startOf('day').isSame(day.startOf('day')),
        ).length,
      );
    }
    return false;
  };

  return (
    <div className="h-[200px] max-w-[340px] flex flex-col bg-white  rounded-2xl p-5 border border-primary">
      <h3 className="text-black">
        {getFullWeekOfMomentDays(pickedWeek)[0].format('MMMM')}
      </h3>
      <div className="flex flex-1 justify-around my-2">
        {getFullWeekOfMomentDays(pickedWeek).map((day) =>
          dayOfCalender(day, checkIfContainsDate(dates, day)),
        )}
      </div>
      <div className="flex gap-x-2 self-end mt-3 mr-3">
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
  );
};

export default Calendar;
