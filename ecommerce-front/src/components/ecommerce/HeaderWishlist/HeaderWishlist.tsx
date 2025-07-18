import Logo from "@assets/svg/wishlist.svg?react";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./style.module.css";
const { container, totalNum, pumpAnimate, iconWrapper } = styles;

const HeaderWishlist = () => {
  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector((state) => state.wishlist.itemsId);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate("/wishlist")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalQuantity.length > 0 && (
          <div className={quantityStyle}>{totalQuantity.length}</div>
        )}
      </div>
      <h3>WishList</h3>
    </div>
  );
};

export default HeaderWishlist;
