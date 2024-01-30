import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  initialData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.currentUser = token;
    },
    setData: (state, action) => {
      const data = action.payload;
      state.initialData = action.payload;
    },
  },
});

export const { setToken, setData } = userSlice.actions;

export default userSlice.reducer;
