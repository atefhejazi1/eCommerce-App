import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishListLogo from "@assets/svg/wishlist.svg?react";
import CartLogo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
const { headerLeftBar } = styles;

import { useAppSelector } from "@store/hooks";

function HeaderLeftBar() {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  const CartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className={headerLeftBar}>
      <HeaderCounter
        to="wishlist"
        title="Wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishListLogo title="wishlist" />}
      />

      <HeaderCounter
        to="cart"
        title="Cart"
        totalQuantity={CartTotalQuantity}
        svgIcon={<CartLogo title="cart" />}
      />
    </div>
  );
}

export default HeaderLeftBar;
