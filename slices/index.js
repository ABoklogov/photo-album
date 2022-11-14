import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { postsSlice } from './postsSlice';


export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [postsSlice.name]: postsSlice.reducer,
  },
});