import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
}
