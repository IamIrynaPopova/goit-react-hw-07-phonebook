import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { createUser, deleteUser} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
