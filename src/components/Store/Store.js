import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './slice/Favourite';

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
  },
});
