import Logo from "@compontents/Logo";
import Link from "next/link";
import styles from "@styles/components/Layout/Header/Header.module.scss";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Burger from "./Burger";
import { links } from "@data/links";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
            {links.slice().reverse().map((link) => {
              return (
                <li
                  className={`${styles.navItem} ${
                    link.special ? styles.special : ""
                  }`}
                  key={link.href}
                >
                  <Link className={styles.navLink} href={link.href}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
