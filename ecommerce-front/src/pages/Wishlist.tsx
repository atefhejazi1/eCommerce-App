import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";

function Wishlist() {
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
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);

  return (
    <>
      <Heading>Your Wishlist </Heading>

      <Loading status={loading} error={error}>
        <GridList
          records={records()}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
}

export default Wishlist;
