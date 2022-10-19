import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from './user.thunk';

interface UserRedux {
  isLoading: boolean;
  error: string | null;
  user: User;
}

export const DEFAULT_USER: User = {
  id: 0,
  email: '',
  name: '',
  status: 'active',
  theme: {
    primaryColor: 'green',
    theme: 'dark',
  },
};

const initialState: UserRedux = {
  error: null,
  isLoading: false,
  user: DEFAULT_USER,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const UserReducer = UserSlice.reducer;
