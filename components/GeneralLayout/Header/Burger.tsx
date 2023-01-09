import { useState, Fragment } from "react";
import styles from "@styles/components/Layout/Header/Burger.module.scss";
import MenuOverlay from "./MenuOverlay";

type Props = {
  className?: string;
  barProps?: {[key: string]: any}
};

export default function Burger({ className: externalClassName, barProps }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Fragment>
      <div
        className={`${styles.burgerMenu} ${externalClassName}}`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <span className={styles.bar} {...barProps}/>
        <span className={styles.bar} {...barProps}/>
        <span className={styles.bar} {...barProps}/>
      </div>
      <MenuOverlay open={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </Fragment>
  );
}
