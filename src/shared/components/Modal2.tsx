import { useRef, ReactNode } from 'react';

import useOnClickOutside from 'shared/hooks/useClickOutside';

interface ModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

const Modal2 = ({ isOpened, onRequestClose, children }: ModalProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, onRequestClose);
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
