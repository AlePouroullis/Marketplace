import styles from "@componentStyles/auth/AuthLayout.module.scss";
import Logo from "@compontents/Logo";
import { Fragment } from "react";
import { copyrightText } from "@data/copyrightText";
import bannerImage from "@assets/images/UCT_Jammie_Plaza.jpeg";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Fragment>
      <div className={styles.page}>
        <div className={styles.bannerContainer}>
          <Image
            src={bannerImage}
            className={styles.banner}
            alt="UCT Jammie Plaza"
          />
          <div className={styles.bannerOverlay} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Logo LogoProps={{ style: { color: "white" } }} />
          </div>
          <div className={styles.formWrapper}>{children}</div>
          <footer className={styles.footer}>
            <div className={styles.copyrightWrapper}>
              <span className={styles.text}>
                <span className={styles.symbol}>&copy;</span>
                {copyrightText}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}
