import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "messi" },
  { id: "1", name: "ronaldo" },
  { id: "3", name: "sunil" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
