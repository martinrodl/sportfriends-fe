import React from 'react';
import { useField, Field } from 'formik';

import { ErrorMessage } from 'shared/components';

const TextAreaInput = ({ label, rows = 6, placeholder, ...props }) => {
  const [field, meta] = useField(label);

  return (
    <div>
      <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
        <Field
          as="textarea"
          className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
          placeholder={placeholder}
          rows={rows}
          {...field}
          {...props}
        />
      </div>
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
};

export default TextAreaInput;
