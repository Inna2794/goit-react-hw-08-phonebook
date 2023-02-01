import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, reset } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    console.log('ExtraReducersBuilder');
    builder.addCase(reset.fulfilled, (state, action) => {
      console.log('resetFulfilled');
      state.error = action.payload;
    });
    builder
      .addCase(register.pending, state => {
        console.log('registerPending');
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log('registerFulfilled');
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        console.log('registerRejected');
        state.error = action.payload;
      });
    builder
      .addCase(logIn.pending, state => {
        console.log('loginPending');
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log('loginFulfilled');
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        console.log('loginRejected');
        state.error = action.payload;
      });
    builder.addCase(logOut.fulfilled, state => {
      console.log('logOutFulfilled');
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder
      .addCase(refreshUser.pending, state => {
        console.log('refreshUserPending');
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log('refreshUserFulfilled');
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        console.log('refreshUserRejected');
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
