import type { RootState } from "@store";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
