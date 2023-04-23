import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    GetFilter(state, action) {
      return action.payload;
    },
  },
});

export const { GetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
