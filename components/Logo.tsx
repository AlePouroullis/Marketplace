import styles from "@styles/components/Logo.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons/faPlug";

type Props = {
  className?: string;
  LogoProps?: { [key: string]: any };
};

export default function Logo({
  className: externalClassName,
  LogoProps,
}: Props) {
  return (
    <Link
      className={`${styles.link} ${externalClassName}`}
      href="/"
      {...LogoProps}
    >
      <div className={`${styles.logoWrapper} `}>
        <h1 className={styles.logoText}>Campus</h1>
        <FontAwesomeIcon icon={faPlug} className={styles.logoIcon} />
      </div>
    </Link>
  );
}
