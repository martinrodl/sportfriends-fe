import { createSlice, createSelector } from '@reduxjs/toolkit';
import moment from 'moment';

interface FilterStateI {
  listEvents: {
    distance: number;
    sports: string[];
    startTime: string;
    endTime: string;
  };
  mapEvents: {
    distance: number;
    sports: string[];
    startTime: string;
    endTime: string;
  };
  sportParner: {
    distance: number;
    sports: string[];
    level?: string;
    gender?: string;
  };
}

export enum filterTypeEnum {
  listEvents = 'listEvents',
  mapEvents = 'mapEvents',
  sportPartner = 'sportParner',
}

export type allFilterType =
  | filterTypeEnum.listEvents
  | filterTypeEnum.mapEvents
  | filterTypeEnum.sportPartner;
export type timeFilterType =
  | filterTypeEnum.listEvents
  | filterTypeEnum.mapEvents;
export type genderFilterType = filterTypeEnum.sportPartner;
export type levelFilterType = filterTypeEnum.sportPartner;

const initialState = {
  listEvents: {
    distance: 20,
    sports: [],
    startTime: moment().toISOString(),
    endTime: moment().add(1, 'year').add(1, 'month').toISOString(),
  },
  mapEvents: {
    distance: 20,
    sports: [],
    startTime: moment().toISOString(),
    endTime: moment().add(1, 'year').add(1, 'month').toISOString(),
  },
  sportParner: {
    distance: 20,
    sports: [],
    level: '',
    gender: '',
  },
} as FilterStateI;

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeDistance: (state, action) => {
      state[action.payload.type].distance = action.payload.value;
    },
    addSports: (state, action) => {
      state[action.payload.type].sports.push(action.payload.value);
    },
    removeSport: (state, action) => {
      state[action.payload.type].sports = state[
        action.payload.type
      ].sports.filter((sport: string) => sport !== action.payload.value);
    },
    setStartTime: (state, action) => {
      state[action.payload.type].startTime = action.payload.value;
    },
    setEndTime: (state, action) => {
      state[action.payload.type].endTime = action.payload.value;
    },
    changeGender: (state, action) => {
      state[action.payload.type].gender = action.payload.value;
    },
    changeLevel: (state, action) => {
      state[action.payload.type].level = action.payload.value;
    },
  },
});

export const {
  changeDistance,
  addSports,
  removeSport,
  setStartTime,
  setEndTime,
  changeGender,
  changeLevel,
} = filter.actions;
export default filter.reducer;

export const selectFilter = (state: { filter: FilterStateI }) => state.filter;
export const selectSpecificFilter = (type: allFilterType) =>
  createSelector(selectFilter, (state) => state[type]);
export const selectTimeSpecificFilter = (type: timeFilterType) =>
  createSelector(selectFilter, (state) => state[type]);
export const selectDistance = (type: allFilterType) =>
  createSelector(selectSpecificFilter(type), (state) => state?.distance);
export const selectSports = (type: allFilterType) =>
  createSelector(selectSpecificFilter(type), (state) => state?.sports);
export const selectStartTime = (type: timeFilterType) =>
  createSelector(selectTimeSpecificFilter(type), (state) => state?.startTime);
export const selectEndTime = (type: timeFilterType) =>
  createSelector(selectTimeSpecificFilter(type), (state) => state?.endTime);
export const selectGender = (type: genderFilterType) =>
  createSelector(selectSpecificFilter(type), (state) =>
    'gender' in state ? state.gender : '',
  );
export const selectLevel = (type: levelFilterType) =>
  createSelector(selectSpecificFilter(type), (state) =>
    'level' in state ? state.level : '',
  );
