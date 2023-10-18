import React, { useState, useRef } from 'react';

import { useUploadProfileImageMutation } from '@sportfriends-fe/shared/data/services';
import { ErrorMessage, SubmitButton } from '@sportfriends-fe/shared/ui';

import userdp from '../../assets/images/user.png';
import upload from '../../assets/images/upload.png';

const SetProfileImg = () => {
  const [updateProfile, { isSuccess, error, isError, isLoading }] =
    useUploadProfileImageMutation();

  const [img, setImg] = useState(userdp);
  const imageUploader = useRef(null);

  const handleImageUpload = (e: React.ChangeEvent) => {
    let file = (e.target as HTMLInputElement).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', img);
    updateProfile(formData);
  };

  return (
    <div className="max-w-[485px] mx-auto w-full">
      <div className="flex flex-col mt-10">
        <form onSubmit={onSubmit}>
          <div className="flex md:flex-row flex-col gap-[26px] md:gap-[40px] items-center">
            <div>
              <img
                className="rounded-full"
                src={img}
                width={150}
                height={150}
                alt="user"
              />
            </div>
            <div className="flex gap-[13px] items-center">
              <div
                className="cursor-pointer"
                onClick={() => imageUploader.current.click()}
              >
                <img src={upload} alt="upload" />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                className="hidden"
              />

              <p className="text-lg font-semibold text-[#505050]">
                Upload profile picture
              </p>
            </div>
          </div>
          {/* {error?.data?.errors && <ErrorMessage apiErrors={error.data.errors} />} */}

          <div className="mb-5">
            {isError && <ErrorMessage message={'Skip it and try it later'} />}
          </div>
          <SubmitButton text="Update" isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default SetProfileImg;
