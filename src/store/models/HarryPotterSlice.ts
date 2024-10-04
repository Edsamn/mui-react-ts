import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import HPCharactersType from '../../types/HPCharactersType';
import axios from 'axios';

const apiHP = axios.create({
  baseURL: 'https://hp-api.onrender.com/api',
});

const initialState: HPCharactersType[] = [];

export const getCharacters = createAsyncThunk('characters/getCharacters', async () => {
  try {
    const response = await apiHP.get('/characters');

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const harryPotterSlice = createSlice({
  name: 'characters',
  initialState: { characters: initialState, loading: false },
  reducers: {
    addCharacter: (state, action: PayloadAction<HPCharactersType>) => {
      state.characters.push({ ...action.payload });
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getCharacters.pending, state => {
      state.loading = true;
      return state;
    });
    builder.addCase(getCharacters.rejected, state => {
      console.log('DEU RUIM');
      state.loading = false;
      return state;
    });
  },
});

export const { addCharacter } = harryPotterSlice.actions;
export default harryPotterSlice.reducer;
