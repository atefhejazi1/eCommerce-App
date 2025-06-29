import Logo from "@assets/svg/cart.svg?react";

import { useAppSelector } from "@store/hooks";

import styles from "./styles.module.css";
import { getCartTotalQuantitySelector } from "@store/cart/CartSlice";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
