import DaySchedule from './DaySchedule';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const event = {
  id: '1',
  title: 'Math',
  startTime: '12:00',
};

const Schedule = () => {
  const getWeekDays = () => (
    <div className="flex gap-x-2  overflow-scroll">
      {days.map((day, index) => (
        <div className="flex flex-col ">
          <h4 className="font-semibold truncate">{day}</h4>
          <DaySchedule key={day + index} events={[event]} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-white p-3 overflow-hidden rounded-xl">
      <div className="flex justify-between">
        <h2 className="font-bold">Available lesson</h2>
        <h3 className="mr-3">Week 1 (1-7 June)</h3>
      </div>
      <div className="flex w-full  overflow-hidden">{getWeekDays()}</div>
    </div>
  );
};

export default Schedule;
