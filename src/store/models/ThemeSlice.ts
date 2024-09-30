import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeType {
  theme: 'dark' | 'light';
}

const initialState: ThemeType = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
