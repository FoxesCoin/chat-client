import { createAsyncThunk } from '@reduxjs/toolkit';

import { DEFAULT_USER } from './user.slice';

export const fetchUser = createAsyncThunk(
  'user/fetch-user',
  () => DEFAULT_USER
);
