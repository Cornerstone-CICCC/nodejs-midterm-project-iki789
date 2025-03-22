import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  email: string;
  name: string;
};

interface UserState {
  auth: boolean;
  user?: User;
}

const initialState: UserState = {
  auth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;

export default userSlice.reducer;
