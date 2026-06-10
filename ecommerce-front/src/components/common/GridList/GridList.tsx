import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type ColSize = { xs?: number; sm?: number; md?: number; lg?: number };

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
  colSize?: ColSize;
};

type HasId = { id?: number };

const GridList = <T extends HasId>({
  records,
  renderItem,
  emptyMessage,
  colSize = { xs: 6, sm: 4, md: 3 },
}: GridListProps<T>) => {
  if (records.length === 0) {
    return <LottieHandler type="empty" message={emptyMessage} />;
  }

  return (
    <Row className="g-4">
      {records.map((record) => (
        <Col key={record.id} {...colSize}>
          {renderItem(record)}
        </Col>
      ))}
    </Row>
  );
};

export default GridList;
