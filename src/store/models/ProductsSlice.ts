import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductType {
  name: string;
  price: string;
  description?: string;
  active: boolean;
}

const initialState: ProductType[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
