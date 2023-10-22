import { useDispatch, useSelector } from 'react-redux';

import {
  selectGender,
  changeGender,
  genderFilterType,
} from '@sportfriends-fe/shared/data/store';

interface VariantI {
  label: string;
  value: string;
}

interface SelectGenderProps {
  type: genderFilterType;
}

const SelectGender = ({ type }: SelectGenderProps) => {
  const dispatch = useDispatch();
  const gender = useSelector(selectGender(type));

  const generateButton = (variant: VariantI) => (
    <button
      key={'genderVariant' + variant.value}
      onClick={() => {
        dispatch(changeGender({ type, value: variant.value }));
      }}
      className={`h-11 px-3 ${
        variant.value === gender ? 'bg-primary' : 'bg-slate-100 '
      } rounded-2xl`}
    >
      <p
        className={`body1 ${
          variant.value === gender ? 'text-white' : 'text-black'
        }`}
      >
        {variant.label}
      </p>
    </button>
  );

  return (
    <div className="flex flex-col max-w-[340px] rounded-3xl p-5 bg-white border border-primary">
      <h4 className="mb-2">Select Gender</h4>
      <div className="flex gap-x-2">
        {genderVariants.map((variant) => generateButton(variant))}
      </div>
    </div>
  );
};

export default SelectGender;

const genderVariants = [
  {
    value: '',
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
