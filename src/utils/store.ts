import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { UserReducer } from './user';

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
