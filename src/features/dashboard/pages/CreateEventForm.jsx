import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useCreateEventMutation } from 'services/eventApi';
import {
  TextInput,
  DatePickerInput,
  MapInput,
  CheckboxInput,
  TimePickerInput,
  SelectSearchInput,
  TextAreaInput,
  SubmitButton,
  ErrorMessage,
} from 'shared/components';

import { SLUGS } from '../shared/constants';

const CreateEventForm = () => {
  const [createEvent, { isSuccess, error, isLoading }] = useCreateEventMutation();

  if (isSuccess) {
    <Navigate to={'/dashboard/' + SLUGS.MyActions} />;
  }

  return (
    <div className="w-full min-h-screen md:px-10 px-5 md:py-20 py-14 max-w-7xl mx-auto">
      <h1 className="text-[22px] text-xl font-semibold text-[#505050] text-center mb-4">Create an Event</h1>
      <p className="text-xl text-center font-normal text-[#9A9A9A] mb-10 max-w-[525px] mx-auto">
        Fill neccessary details of the event and get sport buddies to joined you.
      </p>
      <Formik
        initialValues={{
          title: '',
          sport: '',
          date: '',
          address: {
            address: '',
            coordinates: { lat: 0, lng: 0 },
          },
          outdoor: false,
          startTime: '',
          endTime: '',
          minParticipants: 0,
          maxParticipants: 2,
          description: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          sport: Yup.string().required('Required'),
          date: Yup.date().required('Required'),
          outdoor: Yup.boolean(),
          startTime: Yup.date().required('Required'),
          endTime: Yup.date().required('Required'),
        })}
        onSubmit={(formData) => {
          console.log(formData);
          createEvent(formData);
        }}
      >
        <Form>
          <div className="max-w-[675px] mx-auto">
            <div className="mb-8">
              <TextInput label="title" placeholder="Name of Event" />
            </div>
            <div className="mb-8">
              <SelectSearchInput placeholder="Type of Sport" label="sport" />
            </div>
            <div className="mb-8">
              <DatePickerInput label="date" />
            </div>
            <MapInput name="address" label="address" />
            <div className="mb-8">
              <CheckboxInput label="outdoor" labelText="Outdoor" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 ">
              <div className="mb-8">
                <p className="text-[#9A9A9A] text-lg font-normal block pb-2">Start Time</p>
                <TimePickerInput label="startTime" />
              </div>
              <div className="mb-8">
                <p className="text-[#9A9A9A] text-lg font-normal block pb-2">End Time</p>
                <TimePickerInput label="endTime" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mb-8">
              <div>
                <p className="text-[#9A9A9A] text-lg font-normal block pb-2">Min Participants</p>
                <TextInput label="minParticipants" />
              </div>
              <div>
                <p className="text-[#9A9A9A] text-lg font-normal block pb-2">Max Participants</p>
                <TextInput label="maxParticipants" p />
              </div>
            </div>
            <TextAreaInput label="description" placeholder="Description" />
            {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
            <SubmitButton text="Create Event" isLoading={isLoading} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateEventForm;
