import type { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "wishlist?userId=1"
      );

      const wishlistItems = userWishlist.data;

      if (!Array.isArray(wishlistItems) || wishlistItems.length === 0) {
        return fulfillWithValue([]);
      }

      const query = wishlistItems.map((el) => `id=${el.productId}`).join("&");

      const response = await axios.get<TResponse>(`/products?${query}`);

      return fulfillWithValue(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export default actGetWishlist;
