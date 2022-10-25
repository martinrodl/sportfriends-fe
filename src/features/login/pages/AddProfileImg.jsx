import { useState, useRef } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { Button, ErrorMessage } from 'shared/components';
import { SLUGS } from 'shared/constants';
import { useUploadProfileImageMutation } from 'services/userApi';

import userdp from '../assets/images/user.png';
import upload from '../assets/images/upload.png';
import PageLayout from '../components/PageLayout';

const AddProfileImg = () => {
  const [updateProfile, { isSuccess, error, isError }] = useUploadProfileImageMutation();

  const [img, setImg] = useState(userdp);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', img);
    updateProfile(formData);
  };

  if (isSuccess) {
    return <Navigate to={'/' + SLUGS.dashboard} replace={true} />;
  }
  console.log(error, isError);

  return (
    <PageLayout>
      <div className="max-w-[485px] mx-auto w-full">
        <div className="flex flex-col">
          <h3 className="text-[28px] w-full md:text-left text-center md:text-[38px] text-primary font-semibold mb-[18px]">
            Jazz up your profile
          </h3>

          <p className="text-[#9A9A9A] md:block hidden md:text-xl mb-[42px]">
            Add your photo otherwise only avatar will be
            <br /> shown
          </p>

          <form>
            <div className="flex md:flex-row flex-col gap-[26px] md:gap-[40px] items-center">
              <div>
                <img className="rounded-full" src={img} width={150} height={150} alt="user" />
              </div>{' '}
              <p className="text-[#9A9A9A] text-center md:hidden block md:text-xl mb-[42px]">
                Add your photo otherwise only avatar will be shown
              </p>
              <div className="flex gap-[13px] items-center">
                <div className="cursor-pointer" onClick={() => imageUploader.current.click()}>
                  <img src={upload} alt="upload" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  className="hidden"
                />

                <p className="text-lg font-semibold text-[#505050]">Upload profile picture</p>
              </div>
            </div>
            {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />}
            <Button
              onClick={onSubmit}
              bg="#04A5C2"
              className="mt-[36px] md:mt-[110px] text-white w-full min-h-[60px]"
              type="submit"
            >
              Next
            </Button>
            <div>{isError && <ErrorMessage message={'Skip it and try it later'} />}</div>
          </form>
        </div>

        <div className="flex items-center mt-[25px] mb-[23px] gap-4">
          <hr className="flex-1 border border-[#F2B619]"></hr>
          <p className="text-sm font-semibold">OR</p>
          <hr className="flex-1 border border-[#F2B619]"></hr>
        </div>

        <div className="flex justify-center w-full">
          <p className="text-lg font-semibold">
            <Link to={'/' + SLUGS.dashboard} className="text-primary">
              Skip
            </Link>{' '}
            and add later!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default AddProfileImg;
