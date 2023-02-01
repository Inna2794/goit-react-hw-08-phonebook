import { createSlice } from '@reduxjs/toolkit';
// import { filterContacts } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// extraReducers: {
// [filterContacts.pending](state) {
//   state.isLoading = true;
// },
// [filterContacts.fulfilled](state, action) {
//   console.log(action.payload);
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
// [filterContacts.rejected](state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// },
