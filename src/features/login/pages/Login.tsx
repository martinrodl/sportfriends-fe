import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SubmitButton, ErrorMessage, TextInput, CheckboxInput } from 'shared/components';
import { SLUGS } from 'shared/constants';
import { setCredentials } from 'store/slices';
import { useSigninUserMutation } from 'services/authApi';

import PageLayout from '../components/PageLayout';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signinUser, { data, isSuccess, error }] = useSigninUserMutation();

  useEffect(() => {
    if (isSuccess) {
      const { id, email, accessToken } = data;
      dispatch(setCredentials({ accessToken, id, email }));
      navigate(SLUGS.dashboard);
    }
  }, [isSuccess]);

  return (
    <PageLayout>
      <div className="max-w-[485px] mx-auto w-full">
        <div className="flex flex-col">
          <h3 className="text-[28px] md:text-[38px] text-primary font-semibold mb-[18px]">Welcome! Test8</h3>
          <p className="text-[#9A9A9A] md:text-xl mb-[30px]">
            Get out of the monitor, stand up,
            <br /> move and find new pals!
          </p>

          <Formik
            onSubmit={(values) => {
              const credentials = {
                email: values.email,
                password: values.password,
              };
              signinUser(credentials);
            }}
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Email must be vaild').required('Email is required'),
              password: Yup.string().required('Password is required'),
            })}
          >
            <Form>
              <div className="mb-4">
                <TextInput label="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                <TextInput label="password" placeholder="Password" type="password" />
              </div>
              <div className="flex justify-between mt-[20px] items-center">
                <div className="flex items-center gap-1">
                  <CheckboxInput label="remember" labelText="" />
                  <h4 className="text-[#505050] font-semibold text-[14px]">Remember me</h4>
                </div>
                <Link to="/" className="text-primary text-sm font-semibold underline h-max">
                  Forgot password?
                </Link>
              </div>
              {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
              <div className="mt-[20px] md:text-lg text-base w-full min-h-[56px] md:min-h-[60px]">
                <SubmitButton text="Sign in" />
              </div>
            </Form>
          </Formik>

          <div className="ml-auto md:mr-0 mr-auto mt-[62px] md:mt-[18px]">
            <p className="font-semibold text-sm  md:text-lg cursor-pointer">
              Not Registered yet?{' '}
              <Link to={SLUGS.signup} className="text-primary">
                Register now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
