import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  CleanWishlistProductsFullInfo,
} from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

function useWishlist() {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );

  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const records = () => {
    return productsFullInfo.map((el) => ({
      ...el,
      quantity: wishlistItemsId[el.id] || 0,
      isLiked: true,
    }));
  }; // Dependencies: records and cartItems

  useEffect(() => {
    const promise = dispatch(actGetWishlist());
    return () => {
      dispatch(CleanWishlistProductsFullInfo());
      promise.abort();
    };
  }, [dispatch]);

  return { loading, error, records };
}

export default useWishlist;
