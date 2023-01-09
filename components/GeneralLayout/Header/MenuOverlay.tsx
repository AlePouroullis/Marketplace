import styles from "@styles/components/Layout/Header/MenuOverlay.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import Link from "next/link";
import Logo from "@compontents/Logo";
import { links } from "@data/links";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ open, onClose }: Props) {
  return (
    <div className={`${styles.menuOverlay} ${open ? styles.show : ""}`}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <button onClick={onClose} className={styles.closeMenuButton}>
          <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
        </button>
      </header>
      <nav className={styles.mobileNav}>
        <ul className={styles.navList}>
          {links.map((link) => {
            return (
              <li className={`${styles.navItem}`} key={link.href}>
                <Link className={styles.navLink} href={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
