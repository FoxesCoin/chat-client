import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppRedux {
  page: ChatPage;
}

const initialState: AppRedux = {
  page: 'chat',
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectPage(state, { payload }: PayloadAction<ChatPage>) {
      state.page = payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const AppActions = AppSlice.actions;
