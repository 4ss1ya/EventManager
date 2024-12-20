import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';
import categoriesReducer from './categoriesSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    categories: categoriesReducer,
  },
});
