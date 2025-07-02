import { useCallback, useEffect } from "react";
import {
  actGetProductsByItems,
  cartItemRemove,
  cartItemsChangeQuantity,
  cleanCartProductsFullInfo,
} from "@store/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

function useCart() {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());
    return () => {
      dispatch(cleanCartProductsFullInfo());
      promise.abort();
    };
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemsChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback((id: number) => {
    dispatch(cartItemRemove(id));
  }, []);
  return { loading, error, products, changeQuantityHandler, removeItemHandler };
}

export default useCart;
