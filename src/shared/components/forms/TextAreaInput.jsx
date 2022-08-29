import React from 'react';
import { useField } from 'formik';

import { ErrorMessage } from 'shared/components';

export default function TextAreaInput({ label, rows = 6, placeholder, ...props }) {
  const [field, meta] = useField(label);

  return (
    <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
      <textarea
        className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
        placeholder={placeholder}
        rows={rows}
        {...field}
        {...props}
      />
      {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
    </div>
  );
}
