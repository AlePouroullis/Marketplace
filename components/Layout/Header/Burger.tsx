import { useState, Fragment } from "react";
import styles from "@styles/components/Layout/Header/Burger.module.scss";
import MenuOverlay from "./MenuOverlay";

export default function Burger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Fragment>
      <div
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className={styles.burgerMenu}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </div>
      <MenuOverlay open={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </Fragment>
  );
}
