import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Container } from "react-bootstrap";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const { loading, error, productsFullInfo, productPrefix } = useProducts();
  return (
    <Container>
      <Heading title={`${productPrefix?.toUpperCase()} Products`} />
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
