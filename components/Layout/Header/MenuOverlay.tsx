import styles from "@styles/components/Layout/Header/MenuOverlay.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";

type Props = {
   open: boolean;
   onClose: () => void;
}

export default function MenuOverlay({open, onClose}: Props) {
  return (
    <div className={`${styles.menuOverlay} ${open ? styles.show : ""}`}>
      <button
        onClick={onClose}
        className={styles.closeMenuButton}
      >
        <ClearIcon className={styles.clearIcon} />
      </button>
      <nav className={styles.mobileNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/listings">
              Listings
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.active}`}>
            <Link className={`${styles.navLink}`} href="/signin">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
