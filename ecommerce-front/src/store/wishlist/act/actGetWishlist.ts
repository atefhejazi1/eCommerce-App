import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import type { TProduct } from "@types";
import type { RootState } from "@store/index";

type TDataType = "productsFullInfo" | "productIds";

type TResponsePayload =
  | { dataType: "productsFullInfo"; data: TProduct[] }
  | { dataType: "productIds"; data: number[] }
  | { dataType: "empty"; data: [] };

const actGetWishlist = createAsyncThunk<
  TResponsePayload,
  TDataType,
  { state: RootState }
>(
  "wishlist/actGetWishlist",
  async (dataType, { rejectWithValue, signal, getState }) => {
    const { auth } = getState();
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=${auth.user?.id}`,
        { signal }
      );

      if (!userWishlist.data.length) {
        return { data: [], dataType: "empty" };
      }

      if (dataType === "productIds") {
        const ids = userWishlist.data.map((el) => el.productId);
        return { data: ids, dataType: "productIds" };
      } else {
        const query = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");
        const response = await axios.get<TProduct[]>(`/products?${query}`);
        return { data: response.data, dataType: "productsFullInfo" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;
