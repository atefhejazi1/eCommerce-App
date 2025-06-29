import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { Category } from "@components/ecommerce";

const Categories = () => {
  const dispatch = useAppDispatch();

  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  return (
    <Container>
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
