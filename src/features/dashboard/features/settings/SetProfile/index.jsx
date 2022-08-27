import React from 'react';
import { BsCalendar3Week } from 'react-icons/bs';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FiChevronDown } from 'react-icons/fi';

const Index = ({ Name }) => {
  return (
    <div className="w-full mx-auto px-10">
      <div>
        <div className="flex  gap-4 py-16 ">
          <h1 className="text-[18px] font-medium px-8 py-2 cursor-pointer">My details</h1>
          <h1 className="text-[18px] font-medium rounded-md text-[#04A5C2] bg-[#CDEDF3] px-8 py-2 cursor-pointer">
            Profile
          </h1>
          <h1 className="text-[18px] font-medium px-8 py-2 cursor-pointer">Password</h1>
          <h1 className="text-[18px] font-medium px-8 py-2 cursor-pointer lg:block hidden">Notifications</h1>
        </div>
        <h1 className="text-[18px] font-semibold lg:px-8 px-5 lg:mx-10 mx-5 py-5">Profile</h1>
        <div className="flex justify-between pb-12 lg:mx-10  border-b-2">
          <p className="text-base font-medium px-8 py-2 text-[#9A9A9A]">
            Update your profile picture and personal details here
          </p>
          <div className=" flex justify-center gap-2 rounded-md text-[#505050] bg-[#FFD1D1] px-5 py-2 cursor-pointer">
            <img src="/imgs/bx_bx-trash.svg" alt="" />
            <h1 className="lg:block hidden text-[18px] font-medium ">Notifications</h1>
          </div>
        </div>
        <div className="flex gap-20 py-10 px-10 border-b-2 lg:mx-10">
          <h1 className="text-[16px] font-medium">Name/Nickname</h1>
          <h1 className="text-[18px] font-semibold text-[#04A5C2]">username15</h1>
          <img className="mx-64" src="/imgs/feather_edit-2.svg" alt="" />
        </div>
        <div className="flex border-b-2 lg:mx-10">
          <div className="flex lg:flex-nowrap flex-wrap gap-20 mx-10 self-center items-center py-10">
            <h1 className="text-[16px] font-medium">Your Photo</h1>
            <img className="w-24" src="/imgs/Ellipse 60.png" alt="" />
          </div>
          <div className="flex lg:justify-start justify-end gap-4 px-10 py-4">
            <h1 className="text-[16px] font-medium px-2 cursor-pointer">Delete</h1>
            <h1 className="text-[16px] text-[#9A9A9A]">|</h1>
            <h1 className="text-[18px] font-semibold text-[#04A5C2] cursor-pointer">Update</h1>
          </div>
        </div>
        {/* ----------------------------------------------------- */}

        <div className="flex flex-wrap justify-between lg:px-20 px-5 self-center items-center lg:py-10 py-5 border-b-2">
          <div>
            <h1 className="text-base font-medium">Date of Birth</h1>
          </div>
          <div className="relative border-[#DADADA]  border rounded-[5px] llg:my-8 my-2 ">
            <input
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none min-w-[400px]"
              name="dateOfBirth"
              type={`text`}
              placeholder="Date of Birth"
            />
            <div className="absolute right-4 top-5 text-xl text-[#DADADA] cursor-pointer">
              <BsCalendar3Week />
            </div>
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 40, color: '#F2B619' },
                    }}
                  />
                }
                label="Not visible"
              />
            </FormGroup>
          </div>
        </div>
        <div className="flex flex-wrap justify-between lg:px-20 px-5 self-center items-center lg:py-20 py-5 border-b-2">
          <div>
            <h1 className="text-base font-medium pr-10 lg:mb-0 mb-2">Gender</h1>
          </div>
          <div className="relative border-[#DADADA] border min-w-[400px] rounded-[5px]">
            <select
              className="text-xs text-[#9A9A9A] md:text-lg px-4 md:px-6 py-4 bg-transparent focus:outline-none"
              name="gender"
            >
              <option value={'default'} disabled hidden>
                Gender
              </option>
              <option value={'Hockey'}>Gender</option>
              <option value={'Cricket'}>Female</option>
              <option value={'Football'}>Other</option>
            </select>
            <div className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
              <FiChevronDown />
            </div>
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 40, color: '#F2B619' },
                    }}
                  />
                }
                label="Not visible"
              />
            </FormGroup>
          </div>
        </div>
        <div className="flex flex-wrap justify-between lg:px-20 px-5 self-center items-center lg:py-10 py-5 border-b-2">
          <div>
            <h1 className="text-base font-medium mr-10">Address</h1>
          </div>
          <div className="relative border-[#DADADA]  border rounded-[5px] lg:my-8 my-2">
            <input
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none min-w-[400px]"
              name="dateOfBirth"
              type={`text`}
              placeholder="Address"
            />
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 40, color: '#F2B619' },
                    }}
                  />
                }
                label="Not visible"
              />
            </FormGroup>
          </div>
        </div>
        <div className="flex flex-wrap self-center  items-center lg:px-20 px-5 py-5 border-b-2">
          <div>
            <h1 className="text-base font-medium mr-[136px] text-left lg:mb-0 mb-2">Address</h1>
          </div>
          <div className="relative border-[#DADADA] border lg:mx-20 rounded-[5px] lg:my-20">
            <textarea
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent min-w-[400px] focus:outline-none"
              name="event"
              placeholder="Description"
              rows={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
