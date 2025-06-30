import { useCallback, useEffect } from "react";
import {
  actGetProductsByItems,
  cartItemRemove,
  cartItemsChangeQuantity,
} from "@store/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Heading } from "@components/common";
import { CartItemsList, CartSubtotalPrice } from "@components/ecommerce";
import { Loading } from "@components/feedback";
function Cart() {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
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

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemsList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Your Cart Is Empty"
        )}
      </Loading>
    </>
  );
}

export default Cart;
