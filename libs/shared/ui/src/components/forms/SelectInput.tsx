import { HTMLAttributes } from 'react';
import { useField } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import ErrorMessage from '../ErrorMessage';

interface SelectInputProps {
  label: string;
  placeholder?: string;
  inputs?: { value: string; label: string }[];
}

interface IPrSelectInputPropsops extends HTMLAttributes<HTMLElement> {}

const SelectInput = ({
  label,
  inputs = [],
  placeholder,
  ...props
}: SelectInputProps) => {
  const [field, meta] = useField(label);

  return (
    <div>
      <Select
        inputProps={{ 'aria-label': 'Without label' }}
        className="text-xs md:text-lg bg-transparent w-full focus:outline-none"
        {...field}
        {...props}
      >
        {inputs.map((input, index) => (
          <MenuItem key={index + input.value} value={input.value}>
            {input.label}
          </MenuItem>
        ))}
      </Select>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) ||
        null}
    </div>
  );
};

export default SelectInput;
