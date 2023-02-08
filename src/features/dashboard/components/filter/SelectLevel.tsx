import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLevel, changeLevel, levelFilterType } from 'store/slices';

interface VariantI {
  label: string;
  value: string;
}

interface SelectLevelProps {
  type: levelFilterType;
}

const SelectLevel = ({ type }: SelectLevelProps) => {
  const dispatch = useDispatch();
  const level = useSelector(selectLevel(type));

  const generateButton = (variant: VariantI) => (
    <button
      key={'levelbutton' + variant.value}
      onClick={() => {
        dispatch(changeLevel({ type, value: variant.value }));
      }}
      className={`h-11 px-3 ${variant.value === level ? 'bg-primary' : 'bg-slate-100 '} rounded-2xl`}
    >
      <h3>{variant.label}</h3>
    </button>
  );

  return (
    <div className="flex flex-col max-w-[340px] h-40 rounded-3xl p-5 bg-white border border-primary">
      <h4 className="mb-2">Select Level</h4>
      <div className="flex gap-x-2 gap-y-2 flex-wrap">{levelVariants.map((variant) => generateButton(variant))}</div>
    </div>
  );
};

export default SelectLevel;

const levelVariants = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'beginner',
    label: 'Beginner',
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
  },
  {
    value: 'advanced',
    label: 'Advanced',
  },
  {
    value: 'pro',
    label: 'Pro',
  },
];
