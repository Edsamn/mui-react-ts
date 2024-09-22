import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

// Define a type for the slice state
interface CategoriesSliceType {
  data: string[];
}

// Define the initial state using that type
const initialState: CategoriesSliceType = {
  data: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);

      return state;
    },
    cleanCategories: state => {
      const arrayLength = state.data.length;
      state.data.splice(0, arrayLength);

      return state;
    },
  },
});

export const { addCategory, cleanCategories } = categoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default categoriesSlice.reducer;
