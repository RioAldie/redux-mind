import { configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';
import counterReducer from '../feautures/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
