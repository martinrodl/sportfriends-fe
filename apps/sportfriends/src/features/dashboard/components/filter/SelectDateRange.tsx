import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // You can use another date utility library if you prefer
import { RiArrowDownSLine } from 'react-icons/ri';

const SelectDateRange = () => {
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          InputProps={{
            endAdornment: <RiArrowDownSLine />,
          }}
          format="MM/dd/yyyy HH:mm"
        />
        <KeyboardDatePicker
          value={endTime}
          onChange={(newValue) => setEndTime(newValue)}
          InputProps={{
            endAdornment: <RiArrowDownSLine />,
          }}
          format="MM/dd/yyyy HH:mm"
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default SelectDateRange;
