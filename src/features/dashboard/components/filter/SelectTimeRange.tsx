import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { RiArrowDownSLine } from 'react-icons/ri';
import { selectStartTime, selectEndTime, setStartTime, setEndTime, timeFilterType } from 'store/slices';

interface SelectTimeRangeProps {
  type: timeFilterType;
}

const SelectTimeRange = ({ type }: SelectTimeRangeProps) => {
  const dispatch = useDispatch();
  const startTime = useSelector(selectStartTime(type));
  const endTime = useSelector(selectEndTime(type));
  return (
    <div className="flex flex-col w-[340px] h-40 rounded-3xl p-5 bg-white border border-primary">
      <h2 className="mb-2">Select Date</h2>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <div className="flex gap-x-3">
          <TimePicker
            ampm={false}
            value={moment(startTime)}
            onChange={(newValue) => {
              dispatch(
                setStartTime({
                  type,
                  value: moment(
                    moment(startTime).format('YYYY-MM-DD') + ' ' + moment(newValue).format('HH:mm'),
                  ).toISOString(),
                }),
              );
            }}
            components={{
              OpenPickerIcon: RiArrowDownSLine,
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              return (
                <div>
                  <label className="text-primary ml-3">From</label>
                  <div className="bg-slate-100 rounded-full flex flex-1 py-2 pr-3 items-center">
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className="bg-slate-100 pl-2 rounded-full w-24 focus-within:outline-none"
                    />
                    {InputProps?.endAdornment}
                  </div>
                </div>
              );
            }}
          />
          <TimePicker
            ampm={false}
            value={moment(endTime)}
            onChange={(newValue) => {
              dispatch(
                setEndTime({
                  type,
                  value: moment(
                    moment(endTime).format('YYYY-MM-DD') + ' ' + moment(newValue).format('HH:mm'),
                  ).toISOString(),
                }),
              );
            }}
            components={{
              OpenPickerIcon: RiArrowDownSLine,
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              return (
                <div>
                  <label className="text-primary ml-3">Till</label>
                  <div className="bg-slate-100 rounded-full flex py-2 pr-2 items-center">
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className="bg-slate-100 pl-3 rounded-full w-24 focus-within:outline-none"
                    />
                    {InputProps?.endAdornment}
                  </div>
                </div>
              );
            }}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default SelectTimeRange;
