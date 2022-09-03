import React from 'react';

export default function ListHeader({ title, icon = null }) {
  return (
    <div>
      <div className="md:mx-20 flex justify-between bg-[#04A5C2] lg:py-5 py-3 items-center lg:px-10 px-4 rounded-lg">
        <h2 className="lg:text-[22px] text-xl font-semibold text-white">{title}</h2>
        {icon && <div>{icon}</div>}
      </div>
    </div>
  );
}
