import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ErrorMessage, SubmitButton, TextInput } from 'shared/components';
import { SLUGS } from 'shared/constants';
import { setCredentials } from 'store/slices';
import { useSignupUserMutation } from 'services/authApi';

import PageLayout from '../components/PageLayout';

const SignUp = () => {
  const [signupUser, { data, isSuccess, error, isLoading }] = useSignupUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isSuccess) {
    const { user, accessToken } = data;
    dispatch(setCredentials({ accessToken, ...user }));
    navigate('/' + SLUGS.moreinfo, { replace: true });
  }

  return (
    <PageLayout>
      <div className="max-w-[485px] mx-auto w-full">
        <div className="flex flex-col">
          <div className="">
            <h3 className="text-[28px] md:block hidden md:relative  max-w-max md:text-[38px] text-primary font-semibold mb-[18px]">
              Let’s Get You Started
            </h3>
            <p className="text-[#9A9A9A] md:text-xl mb-[30px]">
              You will need a email and it will use for
              <br /> sign in.
            </p>
          </div>

          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().max(50, 'Must be 20 chracters or less').required('Email is required'),
              name: Yup.string().max(20, 'Must be 10 chracters or less').required('Name is required'),
              password: Yup.string().required('Password is required'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            })}
            onSubmit={(values) => {
              const credetials = {
                email: values.email,
                name: values.name,
                password: values.password,
              };
              signupUser(credetials);
            }}
          >
            <Form>
              <div className="mb-5">
                <TextInput label="email" placeholder="Email" />
              </div>
              <div className="mb-5">
                <TextInput label="name" placeholder="Name" />
              </div>
              <div className="mb-5">
                <TextInput label="password" placeholder="Password" type="password" />
              </div>
              <div className="mb-5">
                <TextInput label="confirmPassword" placeholder="Confirm Password" type="password" />
              </div>
              {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
              <SubmitButton text="Next" isLoading={isLoading} />
            </Form>
          </Formik>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;
