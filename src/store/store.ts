import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './models/CounterSlice';
import CategoriesSlice from './models/CategoriesSlice';
import ProductsSlice from './models/ProductsSlice';

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    categories: CategoriesSlice,
    products: ProductsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
