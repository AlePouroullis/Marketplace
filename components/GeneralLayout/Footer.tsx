import styles from "@styles/components/Layout/Footer.module.scss";

type Props = {
  className?: string;
};

export default function Footer({ className: externalClassName }: Props) {
  return (
    <footer className={`${styles.footer} ${externalClassName}`}>
      <div className={styles.divider} />
      <div className={styles.copyrightWrapper}>
        <span className={styles.symbol}>&copy;</span>2023-
        {new Date().getFullYear()} CampusConnect. All rights reserved.
      </div>
    </footer>
  );
}
