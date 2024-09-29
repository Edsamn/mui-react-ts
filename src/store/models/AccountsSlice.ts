import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountType {
  email: string;
  password: string;
}

const initialState: AccountType[] = [];

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    createAccount: (state, action: PayloadAction<AccountType>) => {
      state.push({ ...action.payload });
    },
  },
});

export const { createAccount } = accountsSlice.actions;

export default accountsSlice.reducer;
