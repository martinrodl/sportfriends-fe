import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import { Button, ErrorMessage } from 'shared/components';
import { SLUGS } from 'shared/constants';
import { setCredentials } from 'store/slices';

import { useSigninUserMutation } from '../services/authApi';
import PageLayout from '../components/PageLayout';

const Login = () => {
  const [signinUser, { data, isSuccess, error }] = useSigninUserMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const credentials = {
        email: values.email,
        password: values.password,
      };
      signinUser(credentials);
    },
    validationSchema: yup.object({
      email: yup.string().max(20, 'Must be 20 chracters or less').required('Email is required'),
      password: yup.string().required('Password is required'),
    }),
  });

  if (isSuccess) {
    setCredentials(data);
  }

  return (
    <PageLayout>
      <div className="max-w-[485px] mx-auto w-full">
        <div className="flex flex-col">
          <h3 className="text-[28px] md:text-[38px] text-primary font-semibold mb-[18px]">Welcome!</h3>
          <p className="text-[#9A9A9A] md:text-xl mb-[30px]">
            Get out of the monitor, stand up,
            <br /> move and find new pals!
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <ErrorMessage apiErrors={formik.errors.email} />}
            </div>

            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-3">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="password"
                placeholder="Password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}
              {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
            </div>

            <div className="flex justify-between mt-[39px] items-center">
              <div className="flex items-center gap-5">
                <input name="remember" type={`checkbox`} className="w-[30px] h-[30px] rounded-[5px]" />
                <h4 className="text-[#505050] font-semibold text-[14px]">Remember me</h4>
              </div>
              <Link to="/" className="text-primary text-sm font-semibold underline h-max">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="mt-[40px] md:text-lg text-base w-full min-h-[56px] md:min-h-[60px]">
              Sign in
            </Button>
          </form>

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
