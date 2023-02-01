import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    console.log('fetchContactsOperation');

    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (arg, { rejectWithValue }) => {
    console.log('addContactsOperation');
    try {
      const response = await axios.post(`/contacts`, arg);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (arg, thunkAPI) => {
    console.log('deleteContactsOperation');

    try {
      const response = await axios.delete(`/contacts/${arg}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const filterContacts = createAsyncThunk(
  'contacts/filterContacts',
  async (arg, thunkAPI) => {
    console.log('filterContactsOperation');

    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      const filteredContacts = response.data.filter(contact => {
        return contact.name.toLowerCase().includes(arg.toLowerCase());
      });
      return filteredContacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
