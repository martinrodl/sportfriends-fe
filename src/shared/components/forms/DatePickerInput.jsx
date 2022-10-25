import React from 'react';
import { useField } from 'formik';
import { BsCalendar3Week } from 'react-icons/bs';
import TextField from '@mui/material/TextField';

import { ErrorMessage } from 'shared/components';

const DatePickerInput = ({ label, ...otherProps }) => {
  const [field, meta] = useField(label);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  // if (meta && meta.touched && meta.error) {
  //   configDateTimePicker.error = true;
  //   configDateTimePicker.helperText = meta.error;
  // }

  return (
    <div>
      <div className="relative border-[#DADADA] border w-full rounded-[5px]">
        <TextField
          className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
          {...configDateTimePicker}
        />
        <div className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
          <BsCalendar3Week />
        </div>
      </div>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
};

export default DatePickerInput;
