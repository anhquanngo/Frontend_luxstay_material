import { createSlice } from "@reduxjs/toolkit";
import { moduleName } from "./const";
import * as thunk from "./thunk";

const initState = {
  fetchingA: false,
  fetchingB: false,
};

const slice = createSlice({
  name: moduleName,
  initialState: initState,
  reducers: {},
  extraReducers: {
    [thunk.fetchUser.rejected]: (state, action) => {
      state.fetchingA = false;
    },
    [thunk.fetchUser.fulfilled]: (state, action) => {
      state.fetchingA = false;
    },
    [thunk.fetchUser.pending]: (state, action) => {
      state.fetchingA = true;
    },
  },
});

export { slice, thunk };
