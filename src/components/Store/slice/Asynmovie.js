
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance, { API_KEY } from "../../instance/instance";


export const Movieaction = createAsyncThunk(
  "movies/getAll",
  async (page = 1) => {
    const res = await instance.get(`/movie/popular?api_key=${API_KEY}&page=${page}`);
    console.log("API Response:", res.data.results);
    return res.data.results;
  }
);


export const Moviesslicing = createSlice({
  name: "movies",
  initialState: { Movies: [] }, 
  extraReducers: (builder) => {
    builder.addCase(Movieaction.fulfilled, (state, action) => {
      state.Movies = action.payload;
    });
  }
});

export default Moviesslicing.reducer;
