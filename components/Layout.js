import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
