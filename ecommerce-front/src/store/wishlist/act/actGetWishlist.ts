import type { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;

    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "wishlist?userId=1",
        {
          signal,
        }
      );

      const wishlistItems = userWishlist.data;

      if (!Array.isArray(wishlistItems) || wishlistItems.length === 0) {
        return fulfillWithValue([]);
      }

      const query = wishlistItems.map((el) => `id=${el.productId}`).join("&");

      const response = await axios.get<TResponse>(`/products?${query}`, {
        signal,
      });

      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;
