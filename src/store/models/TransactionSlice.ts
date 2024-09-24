import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionType {
  balance: number;
  type: boolean;
  description?: string;
}

const initialState: TransactionType[] = [];

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addBalance: (state, action: PayloadAction<TransactionType>) => {
      action.payload.type = true;
      if (action.payload.type === true) {
        action.payload.balance++;
      }
      state.push(action.payload);
      return state;
    },
    removeBalance: (state, action: PayloadAction<TransactionType>) => {
      action.payload.type = false;
      if (action.payload.type === false) {
        action.payload.balance--;
      }
      state.push(action.payload);
      return state;
    },
  },
});

export const { addBalance, removeBalance } = transactionsSlice.actions;

export default transactionsSlice.reducer;
