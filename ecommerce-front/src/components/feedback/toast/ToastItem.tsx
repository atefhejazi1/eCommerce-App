import styles from "./style.module.css";

const { toastItem } = styles;

const ToastItem = ({ type, title, message }) => {
  return (
    <div className={`alert alert-${type} ${toastItem}`}>
      <h5>{title}</h5>
      <p>{message} </p>
      <button className="btn-close"></button>
      <span className="placeholder" style={{ width: "100%" }}></span>
    </div>
  );
};

export default ToastItem;
