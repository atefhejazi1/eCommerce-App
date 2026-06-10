import { useState } from "react";
import { Link } from "react-router";
import styles from "./styles.module.css";
import type { TCategory } from "@types";

const { category, card, categoryImg, overlay, categoryTitle, arrow, imgFallback } = styles;

const Category = ({ title, img, prefix }: TCategory) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={card}>
          {imgError || !img ? (
            <div className={imgFallback}>{title.slice(0, 2)}</div>
          ) : (
            <img
              className={categoryImg}
              src={img}
              alt={title}
              onError={() => setImgError(true)}
            />
          )}
          <div className={overlay} />
          <div className={categoryTitle}>
            <span>{title}</span>
            <span className={arrow}>→</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
