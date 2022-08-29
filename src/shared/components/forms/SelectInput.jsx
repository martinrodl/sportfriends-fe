import React from 'react';
import { useField } from 'formik';
import { FiChevronDown } from 'react-icons/fi';

import { ErrorMessage } from 'shared/components';

const SelectInput = ({ label, inputs = [], placeholder, ...props }) => {
  const [field, meta] = useField(label);

  return (
    <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
      <select
        className="text-xs text-[#9A9A9A] md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
        {...field}
        {...props}
      >
        <option value={'default'} disabled hidden>
          {placeholder}
        </option>
        {Array.isArray(inputs) &&
          inputs.map((input) => (
            <option value={input.value} key={'select' + input.value}>
              {input.label}
            </option>
          ))}
      </select>
      <div className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
        <FiChevronDown />
      </div>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
};

export default SelectInput;
