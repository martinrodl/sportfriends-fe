import React from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import { useField, useFormikContext } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import ErrorMessage from '../ErrorMessage';

export default function TimePickerInput({ label, props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(label);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TimePicker
          {...field}
          {...props}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) ||
        null}
    </div>
  );
}
