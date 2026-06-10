import { useState } from "react";
import styles from "./styles.module.css";

type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  quantity?: number;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  title,
  img,
  price,
  quantity,
  direction = "row",
  children,
  style,
}: ProductInfoProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={styles[`product-${direction}`]} style={style}>
      <div className={styles[`productImg-${direction}`]}>
        {imgError || !img ? (
          <div className={styles.imgPlaceholder}>
            <span>🛍️</span>
            {direction === "row" && (
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>No image</span>
            )}
          </div>
        ) : (
          <img
            src={img}
            alt={title}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className={styles[`productInfo-${direction}`]}>
        <h2 title={title}>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        {quantity && <h3>Qty: {quantity}</h3>}
        {quantity && <h3>Total: {(quantity * price).toFixed(2)} EGP</h3>}
        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
