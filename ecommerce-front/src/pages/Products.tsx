import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Container } from "react-bootstrap";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/ProductsSlice/ProductsSlice";
import { useParams } from "react-router";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { Product } from "@components/ecommerce";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
