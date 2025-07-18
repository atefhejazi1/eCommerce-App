import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemRemove,
  cartItemsChangeQuantity,
  cleanCartProductsFullInfo,
} from "@store/cart/cartSlice";
import { resetOrderStatus } from "@store/orders/ordersSlice";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemsChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());

    return () => {
      promise.abort();
      dispatch(cleanCartProductsFullInfo());
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    products,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
  };
};

export default useCart;
