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
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={sports}
        renderInput={(params) => <TextField placeholder={placeholder} {...params} />}
        onChange={(e, val) => {
          setFieldValue(field.name, val.value);
        }}
        {...props}
      />
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
}

const sports = [
  { label: 'Football', value: 'football' },
  { label: 'Hockey', value: 'hockey' },
  { label: 'Cricket', value: 'cricket' },
];
