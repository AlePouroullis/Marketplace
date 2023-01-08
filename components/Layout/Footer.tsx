import styles from "@styles/components/Layout/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <span className={styles.symbol}>&copy;</span>2023-{new Date().getFullYear()} CampusConnect. All rights
        reserved.
      </div>
    </footer>
  );
}
