import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Container } from "react-bootstrap";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/ProductsSlice/ProductsSlice";
import { useParams } from "react-router";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = useMemo(() => {
    return records.map((el) => ({
      ...el,
      quantity: cartItems[el.id] || 0,
    }));
  }, [records, cartItems]); // Dependencies: records and cartItems

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Heading>
        <span className="text-capitalize">{params.prefix} </span>Products
      </Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
