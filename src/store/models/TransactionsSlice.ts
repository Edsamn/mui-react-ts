import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TransactionType {
  balance: number;
  type: boolean;
  description?: string;
}

export interface TransactionsState {
  transactions: TransactionType[];
  totalBalance: number;
}

const initialState: TransactionsState = {
  transactions: [],
  totalBalance: 0,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addBalance: (state, action: PayloadAction<TransactionType>) => {
      state.transactions.push(action.payload);

      if (action.payload.type === true) {
        state.totalBalance += action.payload.balance;
      }
    },
    removeBalance: (state, action: PayloadAction<TransactionType>) => {
      state.transactions.push(action.payload);

      if (action.payload.type === false) {
        state.totalBalance -= action.payload.balance;
      }
    },
  },
});

export const { addBalance, removeBalance } = transactionsSlice.actions;

export default transactionsSlice.reducer;
