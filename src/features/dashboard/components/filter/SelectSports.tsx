import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { RxCross2 } from 'react-icons/rx';

const SelectSports = () => {
  const [input, setInput] = useState(null);
  console.log(input);
  return (
    <div className="flex flex-col w-[340px] h-40 rounded-3xl p-5 bg-white border border-primary ">
      <h2 className="mb-2">Select Sports</h2>
      <div className="border-1 rounded-2xl h-12 border-primary bg-slate-100 flex items-center p-3 mb-2">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sports}
          onChange={(e, val) => {
            setInput(null);
          }}
          value={input}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                type="text"
                placeholder="Enter here ..."
                {...params.inputProps}
                className="h-11 bg-slate-100 pl-3 pr-3 py-2 rounded-xl text-xs focus-within:outline-none placeholder-[#282828] flex-1"
              />
            </div>
          )}
        />
        <button
          onClick={() => {
            setInput(null);
          }}
          className="flex items-center bg-primary h-8 w-20 rounded-full"
        >
          <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center ml-2">
            <h2 className="text-primary mb-0.5">+</h2>
          </div>
          <h4 className="text-white ml-2">Add</h4>
        </button>
      </div>
      <div className="flex">
        <div className="border border-primary rounded-2xl flex items-center py-1 px-2">
          <p className="">Football</p>
          <button>
            <RxCross2 className="ml-2" color="#54D2E0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSports;

const sports = [
  { label: 'Football', value: 'football' },
  { label: 'Hockey', value: 'hockey' },
  { label: 'Cricket', value: 'cricket' },
];
