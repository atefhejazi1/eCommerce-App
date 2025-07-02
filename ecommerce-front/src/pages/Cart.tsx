import { Heading } from "@components/common";
import { CartItemsList, CartSubtotalPrice } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import useCart from "@hooks/useCart";

function Cart() {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useCart();
  return (
    <>
      <Heading title={"Cart"} />
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
