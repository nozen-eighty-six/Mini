import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
