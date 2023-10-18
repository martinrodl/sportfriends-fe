import CircularProgress from '@mui/material/CircularProgress';
import { SlTrash } from 'react-icons/sl';

import { ErrorMessage } from 'shared/components';
import { useDeleteUserDatingPostMutation } from 'services/datingApi';

const PartnerCard = ({ id, title, description, sport }) => {
  const [deleteUserDatingPost, { error, isError, isLoading }] = useDeleteUserDatingPostMutation();

  const deletePost = () => {
    deleteUserDatingPost(id);
  };

  return (
    <div className="mb-4">
      <div className="flex flex-col border border-gray-200 p-6 shadow">
        <h2 className="col-span-2 text-xl font-semibold mb-2">{title}</h2>

        <p className="text-sm font-medium mb-4">{sport}</p>
        <div className="flex justify-between">
          <p className="text:lg">{description}</p>
          <div>
            <button onClick={deletePost} className="">
              {isLoading && <CircularProgress className="mr-5" size={20} style={{ color: 'white' }} />}
              <SlTrash style={{ color: '#04A5C2', fontSize: '1.25em' }} />
            </button>
          </div>
        </div>
      </div>

      {/* <ErrorMessage apiErrors={error} /> */}
    </div>
  );
};

export default PartnerCard;
