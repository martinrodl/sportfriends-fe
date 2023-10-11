import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useField, useFormikContext } from 'formik';

import { ErrorMessage } from 'shared/components';

export default function SelectSearchInput({ label, placeholder, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(label);

  return (
    <div>
      <div className="relative border-[#DADADA] border w-full rounded-[5px]">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sports}
          renderInput={(params) => (
            <TextField
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
              placeholder={placeholder}
              {...params}
            />
          )}
          onChange={(e, val) => {
            setFieldValue(field.name, val.value);
          }}
          {...props}
        />
      </div>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
}

const sports = [
  { label: 'Football', value: 'football' },
  { label: 'Hockey', value: 'hockey' },
  { label: 'Cricket', value: 'cricket' },
];
