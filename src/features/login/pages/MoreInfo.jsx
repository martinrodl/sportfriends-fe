import { Formik, Form } from 'formik';
import { useNavigate, Link } from 'react-router-dom';

import { Button, TextAreaInput, ErrorMessage, SelectInput, DatePickerInput } from 'shared/components';
import { SLUGS, selectGenderInputs } from 'shared/constants';
import { useUpdateProfileMutation } from 'services/userApi';

import PageLayout from '../components/PageLayout';

const MoreInfo = () => {
  const navigate = useNavigate();
  const [updateProfile, { isSuccess, error }] = useUpdateProfileMutation();

  if (isSuccess) {
    navigate('/' + SLUGS.addprofileimg, { replace: true });
  }

  return (
    <PageLayout>
      <div className="max-w-[485px] mx-auto w-full">
        <div className="flex flex-col">
          <div className="md:block hidden">
            <h3 className="text-[28px]  md:text-[38px] text-primary font-semibold mb-[18px]">
              A bit more info please...
            </h3>
            <p className="text-[#9A9A9A] md:text-xl mb-[39px]">
              For better interaction with the app add
              <br /> some additional info about you
            </p>
          </div>
          <Formik
            initialValues={{
              dateOfBirth: '',
              gender: 'default',
              description: '',
            }}
            onSubmit={(formData) => {
              updateProfile(formData);
            }}
          >
            <Form>
              <div className="mb-5">
                <DatePickerInput label="dateOfBirth" />
              </div>
              <div className="mb-5">
                <SelectInput label="gender" inputs={selectGenderInputs} />
              </div>
              <div className="relative">
                <TextAreaInput label="description" placeholder="Description" rows={3} />
              </div>
              {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
              <Button type="submit" bg="#04A5C2" className="mt-[40px] text-white w-full min-h-[60px]">
                ALMOST DONE!
              </Button>
            </Form>
          </Formik>
        </div>

        <div className="flex items-center mt-[25px] mb-[23px] gap-4">
          <hr className="flex-1 border border-[#F2B619]"></hr>
          <p className="text-sm font-semibold">OR</p>
          <hr className="flex-1 border border-[#F2B619]"></hr>
        </div>

        <div className="flex justify-center w-full">
          <p className="text-lg font-semibold">
            <Link to="/dashboard" className="text-primary cursor-pointer">
              Skip
            </Link>{' '}
            and add later!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default MoreInfo;
