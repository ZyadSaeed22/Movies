import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './slice/Favourite';
import MoviesReducer from "./slice/Asynmovie";

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    slicemovies: MoviesReducer
  },
});
