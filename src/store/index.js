import { createSlice, configureStore } from "@reduxjs/toolkit";
let data = require("../data.json");
const initialState = { data: data };

const dataSlice = createSlice({
  name: "data",
  initialState,
});

const store = configureStore({
  reducer: dataSlice.reducer,
});
// export const panelActions = panelSlice.actions;
export default store;
