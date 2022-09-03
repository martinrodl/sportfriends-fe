import React from 'react';
import { Formik, Form } from 'formik';

import { DatePickerInput, TimePickerInput, SelectSearchInput, SubmitButton } from 'shared/components';

const EventListHeader = () => {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          sport: '',
          date: '',
          timeStart: '',
          timeEnd: '',
          address: {
            address: '',
            coordinates: { lat: 0, lng: 0 },
          },
        }}
        onSubmit={(formData) => {
          console.log(formData);
        }}
      >
        <Form>
          <div className="mb-4">
            <DatePickerInput label="date" />
          </div>
          <div className="mb-4">
            <SelectSearchInput placeholder="Type of Sport" label="sport" />
          </div>
          <div className="flex w-full gap-x-10 mb-8">
            <div className="flex self-center">
              <label className="text-[#9A9A9A] text-lg font-normal  min-w-[100px] self-center">Start time</label>
              <TimePickerInput label="timeStart" />
            </div>
            <div className="flex direactio self-center">
              <label className="text-[#9A9A9A] text-lg font-normal  min-w-[100px] self-center">End time</label>
              <TimePickerInput label="timeEnd" />
            </div>
          </div>
          <SubmitButton text="Filter" />
        </Form>
      </Formik>
    </div>
  );
};

export default EventListHeader;
