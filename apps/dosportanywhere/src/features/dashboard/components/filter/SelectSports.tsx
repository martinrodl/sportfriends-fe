import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';

import { selectSports, allFilterType, addSports, removeSport } from 'store/slices';
import { SPORTS } from 'shared/constants';

interface SelectSportsProps {
  type: allFilterType;
}

const SelectSports = ({ type }: SelectSportsProps) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);
  const filteredSports = useSelector(selectSports(type));

  const renderSport = (sport: string) => {
    const sportValue = SPORTS.filter((item) => item.value === sport)[0];
    return (
      <div className="flex" key={'filterSpots' + type + sport}>
        <div className="border border-primary rounded-2xl flex items-center py-1 px-2">
          <p className="">{sportValue.label}</p>
          <button
            onClick={() => {
              dispatch(removeSport({ type, value: sportValue.value }));
            }}
          >
            <RxCross2 className="ml-2" color="#54D2E0" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col max-w-[340px] rounded-3xl p-5 bg-white border border-primary">
      <h4 className="mb-2">Select Sports</h4>
      <div className="border-1 rounded-2xl h-12 border-primary bg-slate-100 flex items-center p-2 mb-3">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={SPORTS}
          onChange={(e, val) => {
            setInput(val);
          }}
          value={input}
          renderInput={(params) => (
            <div ref={params.InputProps.ref} className="w-full">
              <input
                type="text"
                placeholder="Enter here ..."
                {...params.inputProps}
                className="h-11 bg-slate-100 pl-3 pr-3 py-2 rounded-xl text-xs focus-within:outline-none placeholder-main3  w-full"
              />
            </div>
          )}
        />
        <button
          onClick={() => {
            if (input.value) {
              dispatch(addSports({ type, value: input.value }));
            }
            setInput(null);
          }}
          className="flex items-center bg-primary h-8 w-20 rounded-full"
        >
          <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center ml-2">
            <h2 className="text-primary">+</h2>
          </div>
          <h4 className="text-white ml-1 mr-2">Add</h4>
        </button>
      </div>
      <div className="flex flex-wrap gap-2">{filteredSports.map((item) => renderSport(item))}</div>
    </div>
  );
};

export default SelectSports;
