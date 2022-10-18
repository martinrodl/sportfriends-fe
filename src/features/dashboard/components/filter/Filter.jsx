import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { addFilter, removeFilter, selectFilter } from 'store/slices';
import { SelectSearchInput, SelectInput, RangeInput, DatePickerInput, TimeRangeInput } from 'shared/components';
import { selectGenderInputs } from 'shared/constants';

import filtersSvg from '../../assets/images/filters.svg';
import crossSvg from '../../assets/images/cross.svg';

export default function Filter({ enableFilters = [] }) {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activedFilters = useSelector(selectFilter);

  const closeMenu = () => {
    setSelectedFilter(null);
    setIsMenuOpen(false);
  };
  return (
    <div className="w-full flex flex-col mb-8">
      {isMenuOpen ? (
        <div className="absolute top-44 md:right-8 right-4 w-40 bg-white shadow-md flex-col z-50">
          <OutsideClickHandler
            onOutsideClick={() => {
              closeMenu();
            }}
          >
            {filters.map((filter, index) => {
              if (enableFilters.some((filterName) => filter.value === filterName)) {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setSelectedFilter(filter);
                    }}
                    className="w-full h-10 border mt-[-1px] text-primary  border-primary hover:bg-primary hover:text-white"
                  >
                    <p className="ml-2 text-left text-lg tracking-tight">{filter.title}</p>
                  </button>
                );
              }
            })}
          </OutsideClickHandler>
        </div>
      ) : null}
      <div className="flex-1 flex direction-row gap-4 justify-between">
        <div className="flex gap-6">
          {Object.keys(activedFilters).map((filterName, index) => {
            const foundIndex = filters.findIndex((filter) => filter.value === filterName);
            if (foundIndex > -1) {
              return (
                <button
                  type="button"
                  key={'filter' + index}
                  className="flex gap-4"
                  onClick={() => {
                    dispatch(removeFilter(filters[foundIndex].value));
                    if (filters[foundIndex]?.value2) {
                      dispatch(removeFilter(filters[foundIndex].value2));
                    }
                  }}
                >
                  <p className="text-[#9A9A9A]">{filters[foundIndex].title}</p>
                  <img src={crossSvg} alt="remove filter" />
                </button>
              );
            }
          })}
        </div>
        <div className="flex gap-4">
          <span className="text-[#9A9A9A] text-lg flex self-center">Filtered By</span>
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <img src={filtersSvg} alt="filter" className="cursor-pointer w-8" />
          </button>
        </div>
      </div>

      {selectedFilter && (
        <Formik
          initialValues={{}}
          validationSchema={Yup.object({ [`${selectedFilter.value}`]: Yup.string().required('Required') })}
          onSubmit={(formData) => {
            closeMenu();
            dispatch(addFilter(formData));
          }}
          validator={() => ({})}
        >
          <Form>
            <div className="mt-5 mb-5">{selectedFilter.component}</div>
            <div className="flex self-start gap-4">
              <button
                type="submit"
                className="bg-primary text-white rounded-full min-w-[133px] min-h-[38px] text-centerflex hover:shadow-lg"
              >
                Confirm
              </button>
              <button
                type="button"
                className="bg-primary text-white rounded-full min-w-[133px] min-h-[38px] text-centerflex hover:shadow-lg"
                onClick={closeMenu}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
}

const filters = [
  {
    title: 'Sport',
    component: <SelectSearchInput placeholder="Type of Sport" label="sport" />,
    value: 'sport',
  },
  {
    title: 'Distance',
    value: 'distance',
    component: <RangeInput text="Distance" label="distance" defaultValue={20} units="km" />,
  },

  {
    title: 'Gender',
    value: 'gender',
    component: <SelectInput label="gender" placeholder="Select gender" inputs={selectGenderInputs} />,
  },
  {
    title: 'Date',
    value: 'date',
    component: <DatePickerInput label="date" />,
  },
  {
    title: 'Time',
    value: 'startTime',
    value2: 'endTime',
    component: <TimeRangeInput />,
  },
];
