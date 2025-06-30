import { getCartTotalQuantitySelector } from "./selectors";
import actGetProductsByItems from "./act/actGetProductsByItems";

import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "@customTypes/shared";

interface ICartState {
  items: { [key: string]: number }; // productId -> quantity
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
      console.log(action.payload);
    },
    cartItemsChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },

    cartItemRemove: (state, action) => {
      const idToRemove = action.payload;
      delete state.items[idToRemove];
      state.productsFullInfo = state.productsFullInfo.filter(
        (product) => product.id !== idToRemove
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { getCartTotalQuantitySelector, actGetProductsByItems };
export const { addToCart, cartItemsChangeQuantity, cartItemRemove } =
  cartSlice.actions;

export default cartSlice.reducer;
