import { useAppSelector } from "@store/hooks";
import styles from "./style.module.css";
import ToastItem from "./ToastItem";
const { toastList } = styles;
const ToastList = () => {
  const { records } = useAppSelector((state) => state.toasts);
  return (
    <div className={toastList}>
      {records.map((record) => {
        return (
          <ToastItem
            key={record.id}
            type={record.type}
            title={record.title}
            message={record.message}
          />
        );
      })}
    </div>
  );
};

export default ToastList;
