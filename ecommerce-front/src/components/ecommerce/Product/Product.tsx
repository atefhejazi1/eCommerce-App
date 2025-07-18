import type { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/CartSlice";
import { memo, useEffect, useState } from "react";

import { actLikeToggle } from "@store/wishlist/wishlistSlice";

import { Button, Col, Modal, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, maximumNotice, wishlistBtn } = styles;

import LikeFill from "@assets/svg/like-fill.svg?react";
import Like from "@assets/svg/like.svg?react";
import ProductInfo from "../ProductInfo/ProductInfo";

const Product = memo(
  ({
    id,
    title,
    price,
    img,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }
      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };

    const LikeToggleHandler = () => {
      if (isAuthenticated) {
        if (isLoading) {
          return;
        }
        setIsLoading(true);
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to login first to add this item to your wishlist.
          </Modal.Body>
        </Modal>

        <Col>
          <ProductInfo title={title} price={price} img={img} direction="row">
            <div className={wishlistBtn} onClick={LikeToggleHandler}>
              {isLoading ? (
                <Spinner animation="border" size="sm" variant="primary" />
              ) : isLiked ? (
                <LikeFill />
              ) : (
                <Like />
              )}
            </div>

            <p className={maximumNotice}>
              {quantityReachedToMax
                ? "You reach to the limit"
                : `You can add ${currentRemainingQuantity} item(s)`}
            </p>
            <Button
              variant="info"
              style={{ color: "white", width: "100%" }}
              onClick={addToCartHandler}
              disabled={isBtnDisabled || quantityReachedToMax}
            >
              {isBtnDisabled ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading...
                </>
              ) : (
                "Add to cart"
              )}
            </Button>
          </ProductInfo>
        </Col>
      </>
    );
  }
);

export default Product;
