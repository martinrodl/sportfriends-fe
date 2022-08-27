import React from "react";

const Header = ({ Name, Gender, City, DOB, Img, Para }) => {
  return (
    <div className="w-full mx-auto px-20 py-20">
      <div>
        <h1 className="text-[26px] font-semibold text-[#505050] ">Settings</h1>
        <div className="flex gap-12 py-16">
          <h1 className="text-[18px] font-medium rounded-md text-[#04A5C2] bg-[#CDEDF3] px-8 py-2 cursor-pointer">
            View My Profile
          </h1>
          <h1 className="text-[18px] font-medium px-8 py-2 cursor-pointer">
            Profile setting
          </h1>
          <h1 className="text-[18px] font-medium px-8 py-2 cursor-pointer">
            Email/Password
          </h1>
        </div>
        <div className="flex gap-20 max-w-[850px]">
          <div>
            <img src={Img} />
          </div>
          <div className="">
            <h1 className="text-[28px] font-semibold pb-4">{Name}</h1>
            <h1 className="text-[20px] text-[#9A9A9A] font-normal pb-4">
              {Gender}
            </h1>
            <h1 className="text-[20px] text-[#9A9A9A] font-normal pb-4">
              {City}
            </h1>
            <h1 className="text-[20px] text-[#9A9A9A] font-normal pb-4">
              {DOB}
            </h1>
            <h1 className="text-[20px] text-[#9A9A9A] font-normal pb-4">
              {Para}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
