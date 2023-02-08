import { useRef, ReactNode } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import useOnClickOutside from 'shared/hooks/useClickOutside';

interface ModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

const Modal2 = ({ isOpened, onRequestClose, children }: ModalProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, useDebouncedCallback(onRequestClose, 100));
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
