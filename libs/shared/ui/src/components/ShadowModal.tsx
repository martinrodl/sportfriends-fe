import { useRef, ReactNode } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

import { useClickOutside } from '@sportfriends-fe/shared/utils';
import { SLUGS } from '@sportfriends-fe/shared/constants';

interface ModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpened,
  onRequestClose,
  children,
}: ModalProps) {
  const ref = useRef(null);
  useClickOutside(ref, onRequestClose);
  return (
    <>
      {isOpened ? (
        <>
          <div className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-10">
            <div className="relative  max-w-3xl flex flex-col">
              <IoCloseSharp size="30px" className="self-end" />
              <div ref={ref} className="">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
