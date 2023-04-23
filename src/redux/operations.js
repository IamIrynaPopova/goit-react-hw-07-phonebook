import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64459b27b80f57f581bdac30.mockapi.io';

// const fetchContacts = () => async dispatch => {
//   try {
//           const response = await axios.get('/contacts');
         
//   } catch (e) {}
// };
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

