import Link from "next/link";
import styles from "../styles/Article.module.css";

export default function ArticleItem({ article }) {
  return (
    <Link legacyBehavior href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title}</h3>
      </a>
    </Link>
  );
}
