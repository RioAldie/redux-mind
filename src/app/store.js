import { configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';
import counterReducer from '../feautures/counter/counterSlice';
import commentReducer from '../feautures/comment/commentSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});
