import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductType {
  name: string;
  price: string;
  description?: string;
  active: boolean;
  id?: number;
}

const initialState: ProductType[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      const nextId = state.length + 1;
      state.push({ ...action.payload, id: nextId });
      return state;
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
