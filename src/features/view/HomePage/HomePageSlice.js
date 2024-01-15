import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countryList: [],
  countryLoader: false,
};
export const getCountryListAsync = createAsyncThunk(
  "country/list",
  async () => {
    const response = await axios.get(
      `https://restcountries.com/v2/all?fields=name,region,flag`
    );
    return response;
  }
);

export const homePageSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountryListAsync.pending, (state) => {
        state.countryLoader = true;
      })
      .addCase(getCountryListAsync.fulfilled, (state, action) => {
        state.countryLoader = false;
        state.countryList = action.payload.data || [];
      })
      .addCase(getCountryListAsync.rejected, (state, action) => {
        state.countryLoader = false;
        state.countryList = action.payload;
      });
  },
});

export default homePageSlice.reducer;
