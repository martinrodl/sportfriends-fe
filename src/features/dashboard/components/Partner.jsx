import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { ErrorMessage } from 'shared/components';
import { useDeleteUserDatingPostMutation } from 'services/datingApi';

export default function Partner({ id, title, description, sport }) {
  const [deleteUserDatingPost, { error, isError, isLoading }] = useDeleteUserDatingPostMutation();

  const deletePost = () => {
    deleteUserDatingPost(id);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between md:gap-6 gap-0  px-5 bg-[#fafafa] md:mx-20 my-2 rounded-xl drop-shadow-xl">
      <div className="">
        <div className="md:py-6 py-3">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="py-2">
          <p className="md:text-left text-center text-[12px] md:text-xl font-normal text-[#9A9A9A] md:py-5 py-2">
            {description}
          </p>
        </div>
      </div>
      <div className="md:my-6 my-2">
        <div className="flex justify-end md:my-6 mr-6">
          <h2 className="text-xl font-normal">{sport}</h2>
        </div>
        <div className="flex justify-end md:my-6 my-2">
          <button
            onClick={deletePost}
            className="bg-primary text-white rounded-full md:min-w-[148px] md:min-h-[43px] min-w-[120px] min-h-[35px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg"
          >
            {isLoading && <CircularProgress className="mr-5" size={20} style={{ color: 'white' }} />}
            Delete
          </button>
        </div>
      </div>
      {isError && <ErrorMessage apiErrors={error} />}
    </div>
  );
}
