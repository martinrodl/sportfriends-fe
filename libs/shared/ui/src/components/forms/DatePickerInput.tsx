import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import ErrorMessage from '../ErrorMessage';

const DatePickerInput = ({ label, ...otherProps }) => {
  const [field, meta, helpers] = useField(label);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <div className="relative border-[#DADADA] border w-full rounded-[5px]">
          <DatePicker
            onChange={(value) => {
              helpers.setValue(value);
            }}
            className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
            {...otherProps}
          />
        </div>
      </LocalizationProvider>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) ||
        null}
    </div>
  );
};

export default DatePickerInput;
