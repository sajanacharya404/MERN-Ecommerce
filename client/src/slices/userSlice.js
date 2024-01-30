import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setData } = userSlice.actions;

export default userSlice.reducer;
