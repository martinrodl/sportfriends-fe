import React, { useState } from 'react';
import { BsCalendar3Week } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [sportName, setSportName] = useState('');
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [minParticipants, setMinParticipants] = useState();
  const [maxParticipants, setMaxParticipants] = useState();
  const [description, setDescription] = useState();
  const [outDoor, setOutDoor] = useState(false);
  const [address, setAddress] = useState('');
  const [loading, setIsLoading] = useState(false);
  const handleStartTime = (newValue) => {
    setStartTime(newValue);
  };
  const handleEndTime = (newValue) => {
    setEndTime(newValue);
  };
  const createEvent = async () => {
    setIsLoading(true);
    const dataObject = {
      title: eventName,
      sport: sportName,
      timeStart: startTime,
      timeEnd: endTime,
      minParticipants: minParticipants,
      maxParticipants: maxParticipants,
      description: description,
      outdoor: outDoor,
      address: {
        address: address,
        coordinates: [0, 0],
      },
    };

    // await fetch(BASE_URL + "/event/event", dataObject, {
    //   headers: {
    //     Authorization:
    //       "Basic " +
    //       base64.encode(`${process.env.USERNAME}:${process.env.PASSWORD}`),
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // setIsLoading(false);
  };
  return (
    <div className="w-full min-h-screen md:px-10 px-5 md:py-20 py-14 max-w-7xl mx-auto">
      <h1 className="text-[22px] text-xl font-semibold text-[#505050] text-center mb-4">Create an Event</h1>
      <p className="text-xl text-center font-normal text-[#9A9A9A] mb-10 max-w-[525px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras consequat
      </p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="max-w-[675px] mx-auto">
          <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
            <input
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
              name="event"
              placeholder="Name of Event"
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
            <select
              className="text-xs text-[#9A9A9A] md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
              name="sports"
              onChange={(e) => setSportName(e.target.value)}
            >
              <option value={'default'} disabled hidden>
                Typ of Sport
              </option>
              <option value={'Hockey'}>Hockey</option>
              <option value={'Cricket'}>Cricket</option>
              <option value={'Football'}>Football</option>
            </select>
            <div className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
              <FiChevronDown />
            </div>
          </div>
          <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
            <input
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
              name="address"
              placeholder="Click Icon to Set Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="absolute right-4 top-4 text-3xl font-bold text-[#DADADA]">
              <GrMapLocation />
            </button>
          </div>
          <div className=" mb-7">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 40, color: '#F2B619' },
                    }}
                    onChange={() => setOutDoor(!outDoor)}
                  />
                }
                label="Outdoor"
              />
            </FormGroup>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 ">
            <div className="mb-8">
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={handleStartTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div className="mb-8">
              <TimePicker
                label="End Time"
                value={endTime}
                onChange={handleEndTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div>
              <label className="text-[#9A9A9A] text-lg font-normal block mb-2">Min Participants</label>
              <div className="relative border-[#DADADA]  border w-full rounded-[5px] mb-8">
                <input
                  className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent appearance-none w-full focus:outline-none"
                  name="text"
                  type="text"
                  placeholder="5"
                  onChange={(e) => setMinParticipants(e.target.value)}
                />
                <div className="absolute right-4 top-5 text-xl text-[#DADADA]">
                  <img src="/imgs/particpents.svg" alt="" />
                </div>
              </div>
            </div>
            <div>
              <label className="text-[#9A9A9A] text-lg font-normal block pb-2">Max Participants</label>
              <div className="relative border-[#DADADA]  border w-full rounded-[5px] mb-8">
                <input
                  className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
                  name="text"
                  type="text"
                  placeholder="10"
                  onChange={(e) => setMaxParticipants(e.target.value)}
                />
                <div className="absolute right-4 top-5 text-xl text-[#DADADA]">
                  <img src="/imgs/particpents.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-8">
            <textarea
              className="text-xs md:text-lg px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
              name="event"
              placeholder="Description"
              rows={6}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-center w-full">
            <a
              onClick={createEvent}
              className="flex justify-center w-full text-center py-5 rounded-md transition-all hover:shadow-md bg-[#04A5C2] text-white font-semibold cursor-pointer"
            >
              {loading ? 'Creating Event...' : 'Create Event'}
            </a>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default CreateEvent;
