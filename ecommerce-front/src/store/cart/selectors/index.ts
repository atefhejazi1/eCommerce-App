import type { RootState } from "@store/index";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("function");

    const totalQuantity = Object.values(items).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
