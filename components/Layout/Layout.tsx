import styles from "@styles/components/Layout/Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
