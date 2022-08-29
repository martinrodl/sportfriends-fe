import React from 'react';
import { useField, useFormikContext } from 'formik';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { ErrorMessage } from 'shared/components';

export default function CheckboxInput({ label, labelText }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(label);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 40, color: '#F2B619' },
              }}
              {...configCheckbox}
            />
          }
          label={labelText}
        />
      </FormGroup>

      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </>
  );
}
