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
      const arrayLength = state.length;
      state.splice(0, arrayLength);
      return state;
    },
  },
});

export const { addProductToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
