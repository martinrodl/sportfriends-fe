import React from 'react';

export default function Message({ id, index, type, message, user, status }) {
  return (
    <div
      key={index}
      className={`${
        type === 'received' ? 'mr-auto' : 'ml-auto flex-row-reverse'
      } flex items-center gap-4 2xl:gap-[30px] max-w-max`}
    >
      <div className="relative">
        <div>
          <img width={60} height={60} src={user.dp} alt={user.name} />
        </div>
        <div className={` absolute bottom-2 text-xl right-1`}>
          <div
            className={`${
              status === 'active' ? 'bg-[#2F9A03]' : 'bg-gray-700'
            } w-3 2xl:w-[15px] h-3 2xl:h-[15px] rounded-full border border-white `}
          ></div>
        </div>
      </div>

      <div
        className={`${
          type === 'received' ? 'bg-white text-black' : 'bg-darkBoxes text-black'
        } p-4 2xl:p-7 font-semibold 2xl:text-xl 2xl:leading-[27px] break-words rounded-[10px]`}
      >
        {message}
      </div>
    </div>
  );
}
