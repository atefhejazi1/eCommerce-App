import { useAppSelector } from "@store/hooks";
import { Heading } from "@components/common";
import styles from "./Account.module.css";

const Account = () => {
  const user = useAppSelector((state) => state.auth.user);
  const initials = user
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : "?";

  return (
    <>
      <Heading title="Account Info" />
      <div className={styles.profileCard}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.info}>
          <h3 className={styles.name}>
            {user?.firstName} {user?.lastName}
          </h3>
          <p className={styles.email}>{user?.email}</p>
        </div>
      </div>

      <div className={styles.detailsCard}>
        <h6 className={styles.detailsTitle}>Personal Details</h6>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>First Name</span>
          <span className={styles.detailValue}>{user?.firstName}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Last Name</span>
          <span className={styles.detailValue}>{user?.lastName}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Email</span>
          <span className={styles.detailValue}>{user?.email}</span>
        </div>
      </div>
    </>
  );
};

export default Account;
