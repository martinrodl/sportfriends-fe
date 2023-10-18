import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  selectStartTime,
  selectEndTime,
  setStartTime,
  setEndTime,
  timeFilterType,
} from '@sportfriends-fe/shared/data/store';

interface SelectDateRangeProps {
  type: timeFilterType;
}

const SelectDateRange = ({ type }: SelectDateRangeProps) => {
  const dispatch = useDispatch();
  const startTime = useSelector(selectStartTime(type));
  const endTime = useSelector(selectEndTime(type));

  return (
    <div className="flex flex-col max-w-[340px] min-h-[140px] rounded-3xl p-5 bg-white border border-primary">
      <h4 className="mb-2">Select Date</h4>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <div className="flex flex-wrap justify-around gap-3 w-full">
          <DatePicker
            value={moment(startTime)}
            onChange={(newValue) => {
              let newDate = moment(
                moment(newValue).format('YYYY-MM-DD') +
                  ' ' +
                  moment(startTime).format('HH:mm'),
              );
              newDate = newDate.isBefore(moment()) ? moment() : newDate;
              dispatch(
                setStartTime({
                  type,
                  value: newDate.toISOString(),
                }),
              );
              if (newDate.isAfter(moment(endTime))) {
                dispatch(
                  setEndTime({
                    type,
                    value: newDate.add(7, 'days').toISOString(),
                  }),
                );
              }
            }}
            components={{
              OpenPickerIcon: RiArrowDownSLine,
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              return (
                <div className="flex flex-col max-w-[140px]">
                  <label className="body1 text-primary ml-3">From</label>
                  <div className="bg-slate-100 rounded-full flex flex-1 py-2 pr-3 items-center">
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className="bg-slate-100 pl-2 body3 rounded-full  focus-within:outline-none max-w-[85px]"
                    />
                    <div className="w-8">{InputProps?.endAdornment}</div>
                  </div>
                </div>
              );
            }}
          />
          <DatePicker
            value={moment(endTime)}
            onChange={(newValue) => {
              let newDate = moment(
                moment(newValue).format('YYYY-MM-DD') +
                  ' ' +
                  moment(startTime).format('HH:mm'),
              );
              newDate = newDate.isBefore(moment())
                ? moment()
                : newDate.add(1, 'hour');
              dispatch(
                setEndTime({
                  type,
                  value: newDate.toISOString(),
                }),
              );
              if (moment(startTime).isAfter(newDate)) {
                dispatch(
                  setStartTime({
                    type,
                    value: newDate.subtract(1, 'hour').toISOString(),
                  }),
                );
              }
            }}
            components={{
              OpenPickerIcon: RiArrowDownSLine,
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              return (
                <div className="flex flex-col max-w-[140px]">
                  <label className="body1 text-primary ml-3">Till</label>
                  <div className="bg-slate-100 rounded-full flex py-2 pr-2 items-center">
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className="bg-slate-100 body3 pl-3 rounded-full max-w-[90px] focus-within:outline-none"
                    />
                    <div className="w-8">{InputProps?.endAdornment}</div>
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

export default SelectDateRange;
