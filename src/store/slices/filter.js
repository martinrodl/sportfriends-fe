import { createSlice } from '@reduxjs/toolkit';

const filter = createSlice({
  name: 'filter',
  initialState: {},
  reducers: {
    removeFilter: (state, action) => {
      delete state[action.payload];
    },
    addFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { removeFilter, addFilter } = filter.actions;
export default filter.reducer;

export const selectFilter = (state) => state.filter;
