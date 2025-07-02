import type { TCategory } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/category", {
        signal,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
