import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/api';
import filterContacts from './filter';

const store = configureStore({
  reducer: {
    filter: filterContacts,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
