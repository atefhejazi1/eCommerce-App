import type { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { actPlaceOrder } from "@store/orders/ordersSlice";
import { clearCartAfterPlaceOrder } from "@store/cart/CartSlice";
import { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

type CartSubtotalPriceProps = {
  products: TProduct[];
  userAccessToken: string | null;
};

const CartSubtotalPrice = ({
  products,
  userAccessToken,
}: CartSubtotalPriceProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const subtotal = products.reduce((acc, el) => {
    if (el.quantity && typeof el.quantity === "number") {
      return acc + el.price * el.quantity;
    }
    return acc;
  }, 0);

  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(subtotal))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowModal(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Modal show={showModal} onHide={modalHandler} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Place order for{" "}
          <strong>{subtotal.toFixed(2)} EGP</strong>?
          {!loading && error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={modalHandler}>
            Cancel
          </Button>
          <Button
            variant="info"
            style={{ color: "white", fontWeight: 600 }}
            onClick={placeOrderHandler}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Placing...
              </>
            ) : (
              "Confirm Order"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={styles.summaryBox}>
        <div>
          <p className={styles.subtotalLabel}>Order Subtotal</p>
          <p className={styles.subtotalAmount}>{subtotal.toFixed(2)} EGP</p>
        </div>
        {userAccessToken && (
          <Button
            variant="info"
            style={{ color: "white", fontWeight: 600, padding: "10px 32px" }}
            onClick={modalHandler}
          >
            Place Order
          </Button>
        )}
      </div>
    </>
  );
};

export default CartSubtotalPrice;
