import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { SubmitButton, TextInput } from 'shared/components';
import { SLUGS } from 'shared/constants';

import PageLayout from '../components/PageLayout';

const Login = () => {
  const navigate = useNavigate();
  const passwordString = 'password';
  const password = localStorage.getItem('password');

  useEffect(() => {
    if (passwordString === password) {
      navigate(SLUGS.login);
    }
  }, [password]);

  const checkPassword = (password: string) => {
    localStorage.setItem('password', password);
    if (passwordString === password) {
      navigate(SLUGS.login);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-[485px] mx-auto w-full">
        <div className="flex flex-col">
          <h3 className="text-[28px] md:text-[38px] text-primary font-semibold mb-[18px]">
            Password page
          </h3>
          <p className="text-[#9A9A9A] md:text-xl mb-[30px]">
            This page is under development
            <br /> put "password" get in
          </p>

          <Formik
            onSubmit={(values) => {
              const credentials = {
                password: values.password,
              };
              checkPassword(values.password);
            }}
            initialValues={{ password: '' }}
            validationSchema={Yup.object({
              password: Yup.string().required('Password is required'),
            })}
          >
            <Form>
              <div className="mb-4">
                <TextInput
                  label="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="mt-[20px] md:text-lg text-base w-full min-h-[56px] md:min-h-[60px]">
                <SubmitButton text="Sign in" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
