import { createAsyncThunk } from '@reduxjs/toolkit';
import { DEFAULT_USER } from './user.slice';

export const UserThunk = {
  fetchUser: createAsyncThunk('user/fetch-user', () => DEFAULT_USER),
  updateTheme: createAsyncThunk(
    'user/update',
    (params: Partial<User['theme']>) => params
  ),
};
