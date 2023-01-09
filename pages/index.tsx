import Head from "next/head";
import styles from "@styles/pages/Home.module.scss";
import Image from "next/image";
import Header from "@compontents/GeneralLayout/Header/Header";
import Footer from "@compontents/GeneralLayout/Footer";
import { Fragment, useState, useEffect } from "react";
import Logo from "@compontents/Logo";
import { useMediaQuery } from "@mui/material";
import Burger from "@compontents/GeneralLayout/Header/Burger";
import { links } from "@data/links";
import Link from "next/link";
import bannerImage from "@assets/images/UCT_Jammie_plaza.jpeg";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setMenuIsOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    // add listener to scroll to detect if scroll no longer at top of page
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 0) {
          setAtTop(false);
        } else {
          setAtTop(true);
        }
      }
    });

    // remove listener on unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>CampusConnect</title>
        <meta
          name="description"
          content="CampusConnect - the ultimate one stop shop for college students. Exchange or sell used items and offer or request services all in one place. No more scrolling through multiple websites or settling for less - join the community and start connecting with other students on your campus today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={`${styles.header} ${!atTop ? styles.filled : ""}`}>
        <Logo className={styles.logo} />
        {isMobile ? (
          <Burger
            barProps={{ style: { backgroundColor: atTop ? "white" : "black" } }}
          />
        ) : (
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {links
                .slice()
                .reverse()
                .map((link) => {
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
      <main className={styles.main}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerOverlay} />
          <Image
            className={styles.banner}
            src={bannerImage}
            fill
            alt="University of Cape Town campus"
          />
          <div className={styles.textWrapper}>
            <div className={styles.innerWrapper}>
              <h2>
                Connect with students across your campus on <span className={styles.bold}>CampusConnect</span>.
              </h2>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
