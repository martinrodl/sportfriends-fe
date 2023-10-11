import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import { GrMapLocation } from 'react-icons/gr';
import TextField from '@mui/material/TextField';

import { Map, ErrorMessage } from 'shared/components';

export default function MapInput({ label, ...props }) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [field, meta, helpers] = useField(label);
  const [address, setAddress] = useState({
    address: '',
    coordinates: { lat: 49.8175, lng: 15.473 },
  });

  useEffect(() => {
    helpers.setValue(address);
  }, [address]);

  return (
    <>
      <Map isOpen={isMapOpen} setIsOpen={setIsMapOpen} address={address} setAddress={setAddress} />
      <div className="relative border-[#DADADA] border w-full rounded-[5px]">
        <TextField
          className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
          {...field}
          {...props}
          placeholder="Click Set Address on Map"
          value={address.address}
          onFocus={() => {
            setIsMapOpen(true);
          }}
        />
        <div className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
          <GrMapLocation />
        </div>
        {(meta.touched && meta.error && <ErrorMessage message={meta.error} />) || null}
      </div>
    </>
  );
}
