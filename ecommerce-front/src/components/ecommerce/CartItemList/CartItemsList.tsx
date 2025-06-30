import type { TProduct } from "@customTypes/product";
import CartItem from "../CartItem/CartItem";

type CartItemProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

function CartItemsList({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemProps) {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));
  return <>{renderList}</>;
}

export default CartItemsList;
