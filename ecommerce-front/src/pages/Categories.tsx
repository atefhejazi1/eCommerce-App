import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { Category } from "@components/ecommerce";
import { Container } from "react-bootstrap";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const { error, loading, records } = useCategories();

  return (
    <Container>
      <Heading title={"Categories"} />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
