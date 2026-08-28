import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
