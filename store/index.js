import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice';
import { postsSlice } from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [postsSlice.name]: postsSlice.reducer,
  },
});