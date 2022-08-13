import { useState } from 'react';
import { BsCalendar3Week } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Button, Map, ErrorMessage } from 'shared/components';

import { useUpdateProfileMutation } from './services/userApi';

const MoreInfo = ({ handleForm }) => {
  const [updateProfile, { isSuccess, error }] = useUpdateProfileMutation();

  const [isMapOpen, setIsMapOpen] = useState(false);

  if (isSuccess) {
    handleForm('yourProfile', 2);
  }

  const formik = useFormik({
    initialValues: {
      dateOfBirth: '',
      gender: 'default',
      country: '',
      city: '',
      address: '',
      description: '',
    },
    onSubmit: (formData) => {
      updateProfile(formData);
    },

    validationSchema: yup.object({
      address: yup.object().required('Address is required'),
    }),
  });

  const onAddressSet = (address) => {
    formik.setFieldValue('address', address);
  };

  return (
    <div className="w-full py-[56px]">
      <Map isOpen={isMapOpen} setIsOpen={setIsMapOpen} setAddress={onAddressSet} />
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
          <form onSubmit={formik.handleSubmit}>
            <div className="relative border-[#DADADA]  border w-full rounded-[5px] mb-5">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="dateOfBirth"
                type={`text`}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => ((e.target.type = 'text'), formik.handleBlur)}
                placeholder="Date of Birth"
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
              />
              <div className="absolute right-4 top-5 text-xl text-[#DADADA]">
                <BsCalendar3Week />
              </div>
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                <ErrorMessage message={formik.errors.dateOfBirth} />
              )}
            </div>
            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
              <select
                className="text-xs text-[#9A9A9A] md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={formik.values.gender}
              >
                <option value={'default'} disabled hidden>
                  Gender
                </option>
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
                <option value={'other'}>Other</option>
              </select>
              <div className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
                <FiChevronDown />
              </div>
            </div>
            <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
              <input
                className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                name="address"
                placeholder="Click Icon to Set Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address.address}
                disabled
              />
              <button
                className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]"
                onClick={() => {
                  setIsMapOpen(true);
                }}
              >
                <GrMapLocation />
              </button>
              {formik.touched.address && formik.errors.address && <ErrorMessage message={formik.errors.address} />}
            </div>
            <div className="relative">
              <textarea
                className="py-[18px] px-[24px] focus:outline-none border-[#DADADA] md:text-lg text-sm border w-full rounded-[5px] mb-5 min-h-[140px]"
                placeholder="Description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              ></textarea>
              {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
            </div>

            <Button type="submit" bg="#04A5C2" className="mt-[40px] text-white w-full min-h-[60px]">
              ALMOST DONE!
            </Button>
          </form>
        </div>

        <div className="flex items-center mt-[25px] mb-[23px] gap-4">
          <hr className="flex-1 border border-[#F2B619]"></hr>
          <p className="text-sm font-semibold">OR</p>
          <hr className="flex-1 border border-[#F2B619]"></hr>
        </div>

        <div className="flex justify-center w-full">
          <p className="text-lg font-semibold">
            <button onClick={() => handleForm('yourProfile', 2)} className="text-primary cursor-pointer">
              Skip
            </button>{' '}
            and add later!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
