import { useState, useEffect } from 'react';
import moment from 'moment';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

interface CalendarProps {
  getPickedDate?: (pickedDay: moment.Moment) => void;
  dates?: moment.Moment[];
}

const Calendar = ({ getPickedDate, dates }: CalendarProps) => {
  const [pickedDay, setPickedDay] = useState(moment());
  const [pickedWeek, setPickedWeek] = useState(0);
  const today = moment().day();
  const getWeek = (day: number, week: number) =>
    Array.from(Array(7).keys()).map((n) => moment().day(n - day + 7 * week));

  useEffect(() => {
    if (getPickedDate) {
      getPickedDate(pickedDay);
    }
  }, [pickedDay]);

  const dayOfCalender = (day: moment.Moment, hasEvent = true) => (
    <div className="flex flex-col items-center">
      <button
        onClick={() => {
          setPickedDay(day);
        }}
        className={`flex flex-col justify-center gap-y-1 h-16 w-9 rounded-xl ${
          day.day() === pickedDay.day() ? 'bg-white' : ''
        }`}
      >
        <h2>{day.format('DD')}</h2>
        <h2>{day.format('dd')}</h2>
      </button>
      <div className={`${hasEvent ? 'bg-white' : 'bg-primary'} h-2 w-2 rounded-full mt-2`} />
    </div>
  );

  const onClickLeft = () => {
    setPickedWeek(pickedWeek - 1);
  };
  const onClickRight = () => {
    setPickedWeek(pickedWeek + 1);
  };

  const checkIfContainsDate = (dates: moment.Moment[] | undefined, day: moment.Moment): boolean => {
    if (dates) {
      return Boolean(dates.filter((date) => moment(date).startOf('day').isSame(day.startOf('day'))).length);
    }
    return false;
  };

  return (
    <div className="h-[200px] w-[340px] flex flex-col bg-primary rounded-2xl p-5">
      <h2 className="text-white">January</h2>
      <div className="flex flex-1 justify-around my-2">
        {getWeek(today, pickedWeek).map((day) => dayOfCalender(day, checkIfContainsDate(dates, day)))}
      </div>
      <div className="flex gap-x-2 self-end mr-3">
        <button
          onClick={onClickLeft}
          className="h-8 w-11 bg-white bg-opacity-30 rounded-full flex justify-center items-center"
        >
          <HiOutlineChevronLeft color="white" />
        </button>
        <button
          onClick={onClickRight}
          className="h-8 w-11 bg-white bg-opacity-30 rounded-full flex justify-center items-center"
        >
          <HiOutlineChevronRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
