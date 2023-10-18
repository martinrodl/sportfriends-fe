import React from 'react';
import { BsCalendar3Week } from 'react-icons/bs';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FiChevronDown } from 'react-icons/fi';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  useGetUserQuery,
  useUpdateProfileMutation,
} from '@sportfriends-fe/shared/data/services';
import {
  ErrorMessage,
  SubmitButton,
  TextInput,
  MapInput,
} from '@sportfriends-fe/shared/ui';
import { useSignupUserMutation } from '@sportfriends-fe/shared/data/services';

const SetCredentials = () => {
  const [updateUser, { data, error: postError, isLoading }] =
    useUpdateProfileMutation();

  return (
    <div className="w-full mx-auto px-10">
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string().required('Password is required'),
          password: Yup.string().required('Password is required'),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Passwords must match',
          ),
        })}
        onSubmit={(values) => {
          const credentials = {
            oldPassword: values.oldPassword,
            password: values.password,
          };
          //   signupUser(credentials);
        }}
      >
        <Form>
          <div className="mb-5">
            <TextInput
              label="oldPassword"
              placeholder="Current password"
              type="password"
            />
          </div>
          <div className="mb-5">
            <TextInput
              label="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="mb-5">
            <TextInput
              label="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          {/* {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />} */}
          <SubmitButton text="Next" isLoading={isLoading} />
        </Form>
      </Formik>
    </div>
  );
};

export default SetCredentials;
