import React from 'react';
import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

interface IEvent {
  id: string;
  title: string;
  startTime: string;
}
interface DayScheduleProps {
  events: IEvent[];
}

const DaySchedule = ({ events }: DayScheduleProps) => {
  const showEvent = (event: IEvent) => (
    <div
      className="bg-white md:h-[52px] h-[40px] w-full flex flex-col rounded-lg px-3 p-1"
      key={event.id}
    >
      <h4 className="font-semibold tracking-wide">{event.title}</h4>
      <p className="text-accent4 text-sm">{event.startTime}</p>
    </div>
  );

  return (
    <div
      className={twJoin(
        'bg-accent6 rounded-2xl md:w-[175px] w-[150px] md:h-[165px] h-[130px]',
        ' px-2 pt-2 overflow-y-auto flex flex-col gap-y-2 items-center ',
        clsx(events.length === 0 && 'justify-center'),
      )}
    >
      {events.length === 0 ? (
        <h4 className="w-20 align-center">No Lessons on this day</h4>
      ) : (
        events.map((event) => showEvent(event))
      )}
    </div>
  );
};

export default DaySchedule;
