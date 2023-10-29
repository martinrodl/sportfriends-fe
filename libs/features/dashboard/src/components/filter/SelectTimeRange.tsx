import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  selectStartTime,
  selectEndTime,
  setStartTime,
  setEndTime,
  timeFilterType,
} from '@sportfriends-fe/shared/data/store';

interface SelectTimeRangeProps {
  type: timeFilterType;
}

const SelectTimeRange = ({ type }: SelectTimeRangeProps) => {
  const dispatch = useDispatch();
  const startTime = useSelector(selectStartTime(type));
  const endTime = useSelector(selectEndTime(type));
  return (
    <div className="flex flex-col max-w-[340px]  min-h-[140px] rounded-3xl p-5 bg-white border border-primary">
      <h4 className="mb-2">Select Date</h4>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <div className="flex flex-wrap justify-around  gap-3 w-full">
          <div className="flex items-center">
            <label className="body1 text-primary mx-3 w-20">From</label>
            <TimePicker
              ampm={false}
              value={moment(startTime)}
              onChange={(newValue) => {
                dispatch(
                  setStartTime({
                    type,
                    value: moment(
                      moment(startTime).format('YYYY-MM-DD') +
                        ' ' +
                        moment(newValue).format('HH:mm'),
                    ).toISOString(),
                  }),
                );
              }}
            />
          </div>
          <div className="flex items-center">
            <label className="body1 text-primary mx-3 w-20">From</label>
            <TimePicker
              ampm={false}
              value={moment(endTime)}
              onChange={(newValue) => {
                dispatch(
                  setStartTime({
                    type,
                    value: moment(
                      moment(endTime).format('YYYY-MM-DD') +
                        ' ' +
                        moment(newValue).format('HH:mm'),
                    ).toISOString(),
                  }),
                );
              }}
              components={{
                OpenPickerIcon: RiArrowDownSLine,
              }}
            />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default SelectTimeRange;
