import Logo from "@compontents/Logo";
import Link from "next/link";
import styles from "@styles/components/Layout/Header/Header.module.scss";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Burger from "./Burger";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // check screen size is at most 1100px
  const isMobile = useMediaQuery("(max-width: 1100px)");

  useEffect(() => {
    if (isMobile) {
      setMenuIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className={styles.header}>
      <Logo />
      {isMobile ? (
        <Burger />
      ) : (
        <nav className={styles.nav}>
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
      )}
    </header>
  );
}
