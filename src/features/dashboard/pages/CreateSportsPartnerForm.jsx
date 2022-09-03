import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useCreateDatingPostMutation } from 'services/datingApi';
import { TextInput, MapInput, SelectSearchInput, TextAreaInput, SubmitButton, ErrorMessage } from 'shared/components';

import { SLUGS } from '../shared/constants';

export default function CreateSportsPartnerForm() {
  const [createPost, { isSuccess, error, isLoading }] = useCreateDatingPostMutation();

  if (isSuccess) {
    <Navigate to={'/dashboard/' + SLUGS.MyActions} />;
  }
  return (
    <div className="w-full min-h-screen md:px-10 px-5 md:py-20 py-14 max-w-7xl mx-auto">
      <h1 className="text-[22px] text-xl font-semibold text-[#505050] text-center mb-4">Find a Sport partner</h1>
      <p className="text-xl text-center font-normal text-[#9A9A9A] mb-10 max-w-[525px] mx-auto">
        Fill neccessary details of the sport partner dating and find sport buddies.
      </p>
      <Formik
        initialValues={{
          title: '',
          sport: '',
          description: '',
          address: {
            address: '',
            coordinates: { lat: 0, lng: 0 },
          },
        }}
        validationSchema={Yup.object({
          title: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          sport: Yup.string().required('Required'),
          description: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
        })}
        onSubmit={(formData) => {
          console.log(formData);
          createPost(formData);
        }}
      >
        <Form>
          <div className="max-w-[675px] mx-auto">
            <div className="mb-8">
              <TextInput label="title" placeholder="Title" />
            </div>
            <div className="mb-8">
              <SelectSearchInput placeholder="Type of Sport" label="sport" />
            </div>
            <MapInput name="address" label="address" />
            <TextAreaInput label="description" placeholder="Description" />
            {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
            <SubmitButton text="Submit" isLoading={isLoading} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
