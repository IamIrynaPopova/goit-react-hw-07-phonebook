import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState:{
    items: [],
    isLoading: false,
    error: null,
  },
    extraReducers: {
    [fetchContacts.pending](state, action) {},
    [fetchContacts.fulfilled](state, action) {},
    [fetchContacts.rejected](state, action) {},
  },
});




// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     createUser(state, action) {
//       state.push(action.payload);
//     },
//     deleteUser(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });
export const { createUser, deleteUser} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
