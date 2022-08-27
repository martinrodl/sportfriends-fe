import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ children, isOpen, onRequestClose }) {
  return (
    <>
      {isOpen ? (
        <div className="z-50 justify-center md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
          <div className="relative w-auto md:my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg md:p-3 relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <button
                onClick={() => {
                  onRequestClose();
                }}
                className="self-end mr-3 mt-3 mb-3"
              >
                <CloseIcon />
              </button>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
