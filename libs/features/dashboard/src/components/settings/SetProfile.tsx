import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CircularProgress from '@mui/material/CircularProgress';

import {
  ErrorMessage,
  SubmitButton,
  TextInput,
  MapInput,
  DatePickerInput,
  SelectInput,
  TextAreaInput,
} from '@sportfriends-fe/shared/ui';
import {
  useGetUserQuery,
  useUpdateProfileMutation,
} from '@sportfriends-fe/shared/data/services';

import { SLUGS, selectGenderInputs } from '@sportfriends-fe/shared/constants';

const SetProfile = () => {
  const [updateUser, { data, error: postError, isLoading }] =
    useUpdateProfileMutation();
  const {
    data: userData,
    isLoading: userDataLoading,
    isSuccess,
    error: userGetDataError,
  } = useGetUserQuery('');

  if (isLoading) {
    <CircularProgress />;
  }

  const {
    name,
    dateOfBirth = '',
    address,
    gender = '',
    description = '',
  } = userData || {};

  return (
    <div className="w-full mx-auto px-10">
      <Formik
        initialValues={{
          name: name,
          address: {
            address: address,
            coordinates: { lat: 0, lng: 0 },
          },
          dateOfBirth: dateOfBirth,
          gender: gender,
          description: description,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, 'Must be 20 chracters or less')
            .required('Name is required'),
          address: Yup.object().required('Address is required'),
        })}
        onSubmit={(values) => {
          const userData = {
            name: values.name,
            dateOfBirth: values.dateOfBirth,
            gender: values.gender,
            address: values.address.address,
            coordinates: values.address.coordinates,
            description: values.description,
          };
          updateUser(userData);
        }}
      >
        <Form>
          <div className="mb-5">
            <div className="flex gap-10 mb-3">
              <h1 className="text-[16px] font-medium">Name</h1>
              <h1 className="text-[18px] font-semibold text-[#04A5C2]">
                {name}
              </h1>
            </div>
            <TextInput label="name" placeholder="Name" />
          </div>

          <div className="mb-5">
            <div className="flex gap-10 mb-3">
              <h1 className="text-[16px] font-medium">Date of Birth</h1>
              <h1 className="text-[18px] font-semibold text-[#04A5C2]">
                {dateOfBirth}
              </h1>
            </div>
            <DatePickerInput label="dateOfBirth" />
          </div>

          <div className="mb-5">
            <div className="flex gap-10 mb-3">
              <h1 className="text-[16px] font-medium">Gender</h1>
              <h1 className="text-[18px] font-semibold text-[#04A5C2]">
                {gender}
              </h1>
            </div>
            <SelectInput
              label="gender"
              inputs={selectGenderInputs}
              placeholder={gender}
            />
          </div>

          <div className="mb-5">
            <div className="flex gap-10 mb-3">
              <h1 className="text-[16px] font-medium">Address:</h1>
              <h1 className="text-[18px] font-semibold text-[#04A5C2]">
                {address}
              </h1>
            </div>
            <MapInput label="address" />
          </div>

          <div className="mb-5">
            <div className="flex gap-10 mb-3">
              <h1 className="text-[16px] font-medium">Description:</h1>
              <h1 className="text-[18px] font-semibold text-[#04A5C2]">
                {description}
              </h1>
            </div>
            <TextAreaInput
              label="description"
              placeholder="Description"
              rows={3}
            />
          </div>

          {/* {postError?.data?.errors && <ErrorMessage apiErrors={postError.data.errors} />} */}
          <SubmitButton text="Update" isLoading={isLoading} />
        </Form>
      </Formik>
    </div>
  );
};

export default SetProfile;
