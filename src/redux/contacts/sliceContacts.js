import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
  filterContacts,
} from './operations';

const handlePending = state => {
  console.log('ContactshandlePending');
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  console.log('ContactshandleFulfilled');

  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  console.log('ContactshandleRejected');

  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, handleFulfilled);
    builder.addCase(fetchContacts.rejected, handleRejected);

    builder.addCase(addContacts.pending, handlePending);
    builder.addCase(addContacts.fulfilled, (state, action) => {
      console.log('addContactsfulfilled');
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContacts.rejected, handleRejected);

    builder.addCase(deleteContacts.pending, handlePending);
    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      console.log('del', action.payload, 'deleteContacts');
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    });
    builder.addCase(deleteContacts.rejected, handleRejected);

    builder.addCase(filterContacts.pending, handlePending);
    builder.addCase(filterContacts.fulfilled, (state, action) => {
      console.log('filterContactsfulfilled', action.payload);
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(filterContacts.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// reducers: {
//   addContacts(state, action) {
//     state.push(action.payload);
//   },

//   deleteContacts(state, action) {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
// },

// export const { addContacts, deleteContacts } = contactsSlice.actions;
