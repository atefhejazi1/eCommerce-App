import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@store/ProductsSlice/ProductsSlice";
import { useParams } from "react-router";

function useProducts() {
  const params = useParams();

  const productPrefix = params.prefix;

  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const cartItems = useAppSelector((state) => state.cart.items);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const productsFullInfo = useMemo(() => {
    return records.map((el) => ({
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked: wishlistItemsId.includes(el.id),
      isAuthenticated: userAccessToken ? true : false,
    }));
  }, [records, cartItems, wishlistItemsId]); // Dependencies: records and cartItems

  useEffect(() => {
    const promise = dispatch(
      actGetProductsByCatPrefix(params.prefix as string)
    );

    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch, params]);

  return { loading, error, productsFullInfo, productPrefix };
}

export default useProducts;
