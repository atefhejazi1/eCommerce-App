import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";
import { Loading } from "@components/feedback";

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

  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category {...record} />
            </Col>
          );
        })
      : "there are no categories";
  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
};

export default Categories;
