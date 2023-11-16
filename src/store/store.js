// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../slices/contactSlice';
import authReducer from '../slices/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth : authReducer,
  },
});

export default store;
