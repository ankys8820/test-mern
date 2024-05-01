import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./api";
const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk("", async (amount) => {
  const response = await fetchCount(amount);
  // the value we return becomes the fulfilled action payload
  return response.data;
});
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  // Some Extra Reducer Examples
  extraReducer: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

//
export const selectCount = (state) => state.couter.value;

// export the reducer
export default counterSlice.reducer;
