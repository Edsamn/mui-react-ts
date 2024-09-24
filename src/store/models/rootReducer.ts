import { combineReducers } from '@reduxjs/toolkit';
import CategoriesSlice from './CategoriesSlice';
import CounterSlice from './CounterSlice';
import ProductsSlice from './ProductsSlice';
import TransactionSlice from './TransactionSlice';

export default combineReducers({
  counter: CounterSlice,
  categories: CategoriesSlice,
  products: ProductsSlice,
  transactions: TransactionSlice,
});
