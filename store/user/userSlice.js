import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idUser: null,
  nickName: null,
  email: null,
  stateChange: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // обновляет юзера
    updateUserProfile: (state, { payload }) => ({
      ...state,
      idUser: payload.idUser,
      email: payload.email,
      nickName: payload.nickName,
    }),
    // обновляет состояние юзера
    userStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
  },
});

// console.log("🚀 ~ userSlice", userSlice)

export const { updateUserProfile, userStateChange } = userSlice.actions;
