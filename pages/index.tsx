import Head from "next/head";
import styles from "@styles/pages/Home.module.scss";
import Image from "next/image";
import Footer from "@compontents/GeneralLayout/Footer";
import { Fragment, useState, useEffect, useRef } from "react";
import Logo from "@compontents/Logo";
import { useMediaQuery } from "@mui/material";
import Burger from "@compontents/GeneralLayout/Header/Burger";
import { links } from "@data/links";
import Link from "next/link";
import bannerImage from "@assets/images/UCT_Jammie_plaza.jpeg";
import { universities } from "@data/universities";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const [atTop, setAtTop] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMenuIsOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
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
      <header
        ref={headerRef}
        className={`${styles.header} ${!atTop ? styles.filled : ""}`}
      >
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
                Connect with students on your virtual campus plaza –{" "}
                <span className={styles.bold}>CampusConnect</span>.
              </h2>
            </div>
          </div>
        </div>
        <section className={`${styles.section} ${styles.productSection}`}>
          <div className={styles.sectionHeading}>
            <h2>What is CampusConnect?</h2>
          </div>
          <div className={styles.productDescriptionWrapper}>
            <p className={styles.productDescription}>
              CampusConnect is a platform for students to connect with each
              other, exchange or sell used items, and find roommates, all in one
              place. It&apos;s your virtual campus plaza.
            </p>
          </div>
          <div className={styles.createAccountWrapper}>
            {/* TODO: if the user already has an account, don't show this */}
            <button>Create account</button>
          </div>

          <div className={styles.features}>
            <div className={styles.item}>
              <h3>Create an account</h3>
              <p>
                Create an account with your student email and select your
                university to find information relevant to you.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Search listings</h3>
              <p>
                Search students&apos; second-hand items or list some of your
                own. Contact students directly to arrange a deal.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Find a roommate</h3>
              <p>
                Look for a roommate for your new digs, or let others know that
                you&apos;re looking for someone to stay with.
              </p>
            </div>

            <div className={styles.item}>
              <h3>Connect with other students</h3>
              <p>Message other students directly or on the platform.</p>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.universitiesSection}`}>
          <div className={styles.sectionHeading}>
            <h2>Universities</h2>
          </div>
          <div className={styles.universitiesWrapper}>
            {universities.map((university) => {
              return (
                <div className={styles.university} key={university.label}>
                  <div>
                    <h3>{university.label}</h3>
                  </div>
                  <div className={styles.universityImageWrapper}>image</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
