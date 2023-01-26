import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        Webdev
        <span>News</span>
      </h1>
      <p className={styles.description}>keep update with latest web news</p>
    </div>
  );
}
