import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
});

export const { } = postsSlice.actions;
