import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import Slider from '@mui/material/Slider';

import { ErrorMessage } from 'shared/components';

const DatePickerInput = ({ label, text, defaultValue, min = 1, max = 100, step = 10, inputWidth = 20, units = '' }) => {
  const [value, setValue] = useState(defaultValue);
  const [, meta, helpers] = useField(label);

  useEffect(() => {
    helpers.setValue(value);
  }, []);

  return (
    <div>
      <Slider
        size="small"
        value={value}
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Small"
        valueLabelDisplay="auto"
        color="primary"
        onChange={(_, val) => {
          setValue(val);
          helpers.setValue(value);
        }}
        step={step}
      />
      <div className="flex ">
        <p className="text-[#9A9A9A] text-lg font-normal block pb-2 self-center mr-3">{text}</p>
        <div className={`relative border-[#DADADA] border rounded-[5px]`}>
          <input
            className={`text-xs md:text-lg px-4 md:px-6 py-4 w-[${inputWidth}px] w-full  bg-transparent focus:outline-none`}
            value={`${value} ${units}`}
            type="text"
            disabled
          />
        </div>
      </div>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
};

export default DatePickerInput;
