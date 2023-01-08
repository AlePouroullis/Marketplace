import Head from "next/head";
import Layout from "@compontents/Layout/Layout";
import styles from "@styles/pages/Home.module.scss"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Campus Clutter</title>
        <meta
          name="description"
          content="CampusConnect - the ultimate one stop shop for college students. Exchange or sell used items and offer or request services all in one place. No more scrolling through multiple websites or settling for less - join the community and start connecting with other students on your campus today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.background}>
          <div className={styles.one}/>
          <div className={styles.two}/>
          <div className={styles.three}/>
          <div className={styles.four}/>
          <div className={styles.five}/>
        </div>
      </main>
    </Layout>
  );
}
