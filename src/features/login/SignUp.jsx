import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { Button, ErrorMessage } from 'shared/components';

import { useSignupUserMutation } from './services/authApi';
import { setCredentials } from './store';

const SignUp = ({ handleForm }) => {
  const [signupUser, { data, isSuccess, error }] = useSignupUserMutation();
  const dispatch = useDispatch();

  if (isSuccess) {
    const { user, accessToken } = data;
    dispatch(setCredentials({ accessToken, ...user }));
    handleForm('moreInfo', 1);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      const credetials = {
        email: values.email,
        name: values.name,
        password: values.password,
      };
      signupUser(credetials);
    },

    validationSchema: yup.object({
      email: yup.string().max(50, 'Must be 20 chracters or less').required('Email is required'),
      name: yup.string().max(20, 'Must be 10 chracters or less').required('Name is required'),
      password: yup.string().required('Password is required'),
      confirmPassword: yup.string().required('Password is required'),
    }),
  });

  return (
    <div className="w-full py-[56px]">
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

          <form onSubmit={formik.handleSubmit}>
            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="email"
                type={`email`}
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />}
            </div>
            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && <ErrorMessage message={formik.errors.name} />}
            </div>
            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}
            </div>
            <div className="relative border-[#DADADA] border w-full rounded-[5px]">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="confirmPassword"
                placeholder="Confirm Password"
                type={'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <ErrorMessage message={formik.errors.confirmPassword} />
              )}
              {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
            </div>
            <Button type="submit" bg="#04A5C2" className="mt-[40px] text-white w-full min-h-[60px]">
              Next
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
