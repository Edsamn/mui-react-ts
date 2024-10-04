import { combineReducers } from '@reduxjs/toolkit';
import CategoriesSlice from './CategoriesSlice';
import CounterSlice from './CounterSlice';
import ProductsSlice from './ProductsSlice';
import TransactionsSlice from './TransactionsSlice';
import AccountsSlice from './AccountsSlice';
import CartSlice from './CartSlice';
import ThemeSlice from './ThemeSlice';
import HarryPotterSlice from './HarryPotterSlice';

export default combineReducers({
  counter: CounterSlice,
  categories: CategoriesSlice,
  products: ProductsSlice,
  transactions: TransactionsSlice,
  accounts: AccountsSlice,
  cart: CartSlice,
  theme: ThemeSlice,
  characters: HarryPotterSlice,
});
