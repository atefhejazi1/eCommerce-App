import { memo } from "react";
import styles from "./style.module.css";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <div className={styles.headingWrapper}>
      <h2 className={styles.heading}>{title}</h2>
    </div>
  );
});

export default Heading;
