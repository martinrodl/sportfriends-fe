import React, { useState } from 'react';

interface VariantI {
  label: string;
  value: string;
}

const SelectGender = () => {
  const [value, setValue] = useState<VariantI>(genderVariants[0]);

  const generateButton = (variant: VariantI) => (
    <button
      onClick={() => {
        setValue(variant);
      }}
      className={`h-11 px-3 ${variant.value === value.value ? 'bg-primary' : 'bg-slate-100 '} rounded-2xl`}
    >
      <h3>{variant.label}</h3>
    </button>
  );

  return (
    <div className="flex flex-col w-[340px] h-40 rounded-3xl p-5 bg-white border border-primary">
      <h2 className="mb-2">Select Gender</h2>
      <div className="flex gap-x-2">{genderVariants.map((variant) => generateButton(variant))}</div>
    </div>
  );
};

export default SelectGender;

const genderVariants = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];
