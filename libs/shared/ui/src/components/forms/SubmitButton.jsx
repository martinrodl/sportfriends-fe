import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function SubmitButton({ text, isLoading = false }) {
  return (
    <div className="flex justify-center w-full">
      <button
        type="submit"
        className="flex justify-center w-full text-center py-4 rounded-md transition-all hover:shadow-md bg-[#04A5C2] text-white font-semibold cursor-pointer"
      >
        {isLoading && <CircularProgress className="mr-5" size={20} style={{ color: 'white' }} />}
        {text}
      </button>
    </div>
  );
}
