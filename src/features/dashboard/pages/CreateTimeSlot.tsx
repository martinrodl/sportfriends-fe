import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import { useCreateSlotMutation } from 'services/eventApi';
import {
  TextInput,
  DatePickerInput,
  MapInput,
  CheckboxInput,
  SelectSearchInput,
  TextAreaInput,
  SubmitButton,
  ErrorMessage,
  TimeRangeInput,
} from 'shared/components';

import { SLUGS } from '../shared/constants';

const CreateTimeSlot = () => {
  const [createSlot, { isSuccess, error, isLoading }] = useCreateSlotMutation();

  if (isSuccess) {
    return <Navigate to={'/dashboard/' + SLUGS.MyActions} replace={true} />;
  }

  const showError = (error) => {
    if ('data' in error) {
      return <ErrorMessage apiErrors={error.data.errors} />;
    }
    return <ErrorMessage message="Error" />;
  };

  return (
    <div className="w-full min-h-screen md:px-10 px-5 md:py-20 py-14 max-w-7xl mx-auto">
      <h1 className="text-[22px] text-xl font-semibold text-[#505050] text-center mb-4">
        Create an Slot
      </h1>
      <p className="text-xl text-center font-normal text-[#9A9A9A] mb-10 max-w-[525px] mx-auto">
        Fill neccessary details of the slot to get
      </p>
      <Formik
        initialValues={{
          title: '',
          sport: '',
          date: '',
          address: { coordinates: { lat: 0, lng: 0 }, address: '' },
          outdoor: false,
          startTime: '',
          endTime: '',
          description: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          sport: Yup.string().required('Required'),
          date: Yup.date().required('Required'),
          outdoor: Yup.boolean(),
          // startTime: Yup.date().required('Required'),
          // endTime: Yup.date().required('Required'),
        })}
        onSubmit={(formData) => {
          const event = {
            title: formData.title,
            sport: formData.sport,
            address: formData.address.address,
            coordinates: formData.address.coordinates,
            outdoor: formData.outdoor,
            startTime: moment(
              formData.date + formData.endTime,
              'YYYY-MM-DDhh:mm',
            ).toISOString(),
            endTime: moment(
              formData.date + '-' + formData.endTime,
              'YYYY-MM-DD-hh:mm',
            ).toISOString(),
            description: formData.description,
          };
          createSlot(event);
        }}
      >
        <Form>
          <div className="max-w-[675px] mx-auto">
            <div className="mb-8">
              <TextInput label="title" placeholder="Name of Slot" />
            </div>
            <div className="mb-8">
              <SelectSearchInput placeholder="Type of Sport" label="sport" />
            </div>
            <div className="mb-8">
              <DatePickerInput label="date" />
            </div>
            <div className="mb-8">
              <MapInput name="address" label="address" />
            </div>
            <div className="mb-8">
              <CheckboxInput label="outdoor" labelText="Outdoor" />
            </div>
            <div className="w-full mb-8">
              <TimeRangeInput label1="startTime" label2="endTime" />
            </div>
            <TextAreaInput label="description" placeholder="Description" />
            {error && showError(error)}
            <SubmitButton text="Create Event" isLoading={isLoading} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTimeSlot;
