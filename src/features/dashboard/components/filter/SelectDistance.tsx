import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const SelectDistance = () => {
  const [value, setValue] = useState(10);
  return (
    <div className="flex flex-col w-[340px] h-40 rounded-3xl p-5 bg-white border border-primary">
      <h2>Distance</h2>
      <div className="m-2">
        <Slider
          size="small"
          value={value}
          defaultValue={value}
          color="primary"
          onChange={(_, newVal) => {
            setValue(newVal);
          }}
          step={null}
          min={0}
          max={40}
          marks={marks}
          aria-label="Custom marks"
        />
      </div>
    </div>
  );
};

export default SelectDistance;

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '1 km',
  },
  {
    value: 10,
    label: '5 km',
  },
  {
    value: 20,
    label: '10 km',
  },
  {
    value: 30,
    label: '20 km',
  },
  {
    value: 40,
    label: '50km',
  },
];
