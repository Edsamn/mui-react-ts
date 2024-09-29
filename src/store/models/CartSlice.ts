import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from './ProductsSlice';

interface CartType {
  product: ProductType;
}

const initialState: CartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartType>) => {
      state.push({ ...action.payload });
      return state;
    },

    clearCart: state => {
      state = [];
      return state;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
