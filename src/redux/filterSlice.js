import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: {
    [fetchContacts.pending](state, action) {},
    [fetchContacts.fulfilled](state, action) {},
    [fetchContacts.rejected](state, action) {},
  },
});



// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     GetFilter(state, action) {
//       return action.payload;
//     },
//   },
// });



export const { GetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
