import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import { Table, Modal, Badge } from "react-bootstrap";
import useOrders from "@hooks/useOrders";
import ProductInfo from "@components/ecommerce/ProductInfo/ProductInfo";
import styles from "./Orders.module.css";

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Order Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "14px" }}
            />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title="My Orders" />
      <Loading status={loading} error={error} type="table">
        {orderList.length === 0 ? (
          <p style={{ color: "var(--text-muted)", padding: "24px 0" }}>
            You haven't placed any orders yet.
          </p>
        ) : (
          <div className={styles.tableWrapper}>
            <Table hover responsive className={styles.table}>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((el) => (
                  <tr key={el.id}>
                    <td>
                      <Badge bg="secondary" className={styles.orderBadge}>
                        #{el.id}
                      </Badge>
                    </td>
                    <td>{el.items.length} item{el.items.length !== 1 ? "s" : ""}</td>
                    <td className={styles.price}>
                      {el.subtotal.toFixed(2)} EGP
                    </td>
                    <td>
                      <button
                        className={styles.detailsBtn}
                        onClick={() => viewDetailsHandler(el.id)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Loading>
    </>
  );
};

export default Orders;
