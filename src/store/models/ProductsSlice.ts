import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';

export interface ProductType {
  name: string;
  createdAt: string;
  image: string;
  id: string;
}

const initialState: ProductType[] = [];

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await doGet('/products', '');

  if (response.length) {
    return response;
  }

  return [];
});

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: initialState, loading: false },
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push({ ...action.payload });
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getProducts.pending, state => {
      state.loading = true;
      return state;
    });
    builder.addCase(getProducts.rejected, state => {
      console.log('DEU RUIM');
      state.loading = false;
      return state;
    });
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
