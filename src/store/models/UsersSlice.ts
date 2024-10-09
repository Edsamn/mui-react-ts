import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';

interface UserType {
  id: number;
  email: string;
  name: string;
  password: string;
}

interface UsersSlice {
  users: UserType[];
  auth: boolean;
}

const initialState: UsersSlice = { users: [], auth: true };

export const getUsers = createAsyncThunk('users/getUsers', async (token: string) => {
  const response = await doGet('/users', token);

  if (response?.data?.users.length) {
    return { users: response.data.users, auth: true };
  }

  if (!response.auth) {
    return { users: [], auth: false };
  }

  return initialState;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default userSlice.reducer;
