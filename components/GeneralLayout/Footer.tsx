import styles from "@styles/components/Layout/Footer.module.scss";
import { copyrightText } from "@data/copyrightText";

type Props = {
  className?: string;
};

export default function Footer({ className: externalClassName }: Props) {
  return (
    <footer className={`${styles.footer} ${externalClassName}`}>
      <div className={styles.divider} />
      <div className={styles.copyrightWrapper}>
        <span className={styles.text}>
          <span className={styles.symbol}>&copy;</span>
          {copyrightText}
        </span>
      </div>
    </footer>
  );
}
