import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import Slider from '@mui/material/Slider';
import moment from 'moment';

import ErrorMessage from '../ErrorMessage';

const DatePickerInput = ({
  label1 = 'startTime',
  label2 = 'endTime',
  defaultValue = [60, 66],
}) => {
  const [value, setValue] = useState(defaultValue);

  const [, meta1, helpers1] = useField(label1);
  const [, meta2, helpers2] = useField(label2);

  const formatTimeValue = (time) => moment(time, 'HH:mm').utc();

  const countTime = (number) => {
    let hours = '00' + Math.floor(number / 4);
    hours = hours.slice(-2);
    let minutes = '00' + (number % 4) * 15;
    minutes = minutes.slice(-2);
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    countTime(value[0]);
    countTime(value[1]);
  }, []);

  return (
    <div className="w-full">
      <Slider
        size="small"
        value={value}
        min={0}
        max={96}
        defaultValue={value}
        color="primary"
        onChange={(_, newVal) => {
          helpers1.setValue(countTime(newVal[0]));
          helpers2.setValue(countTime(newVal[1]));
          setValue(newVal);
        }}
      />
      <div className="flex justify-around gap-x-4">
        <div className="flex justify-between md:gap-x-4 gap-x-2  max-w-fit">
          <p className="text-[#9A9A9A] text-lg font-normal block pb-2 self-center mr-3">
            Start time
          </p>
          <div className="relative border-[#DADADA] border rounded-[5px]">
            <input
              className={`text-lg px-4 md:px-6 py-4  md:w-24 w-20  bg-transparent focus:outline-none`}
              value={countTime(value[0])}
              type="text"
              disabled
            />
          </div>
        </div>
        <div className="flex justify-between md:gap-x-4 gap-x-2 max-w-fit">
          <p className="text-[#9A9A9A] text-lg font-normal block pb-2 self-center mr-3">
            End time
          </p>
          <div className={`relative border-[#DADADA] border rounded-[5px]`}>
            <input
              className={`text-lg px-4 md:px-6 py-4  md:w-24 w-20  bg-transparent focus:outline-none appearance-none`}
              type="text"
              value={countTime(value[1])}
              disabled
            />
          </div>
        </div>
      </div>
      {(meta1.touched && meta1.error && (
        <ErrorMessage message={meta1.error} />
      )) ||
        null}
      {(meta2.touched && meta2.error && (
        <ErrorMessage message={meta2.error} />
      )) ||
        null}
    </div>
  );
};

export default DatePickerInput;
