import React, { useRef, ReactNode } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useClickOutside } from '@sportfriends-fe/shared/utils';

interface ModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

const Modal2 = ({ isOpened, onRequestClose, children }: ModalProps) => {
  const ref = useRef(null);
  useClickOutside(ref, useDebouncedCallback(onRequestClose, 100));
  return (
    <>
      {isOpened ? (
        <>
          <div className="absolute z-50">
            <div ref={ref} className="flex flex-col">
              {children}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal2;
