
import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: { films:[]},
  reducers: {
    addfilm: (state, action) => {
      const film = action.payload;
     
      if (!state.films.find(item => item.id === film.id)) {
        state.films.push(film);
      }
    },
    removefilm: (state, action) => {
      const filmId = action.payload;
      state.films = state.films.filter(item => item.id !== filmId);
    },
  },
});

export const { addfilm, removefilm } = favouriteSlice.actions;
export default favouriteSlice.reducer;
