import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  photo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setLogout: (state, action) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export const getUserName = state => state.user.name;
export const getUserEmail = state => state.user.email;
export const getUserPhoto = state => state.user.photo;

export default userSlice.reducer;
