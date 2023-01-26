import Head from "next/head";
import ArticleList from "../components/ArticleList";
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Web dev</title>
        <meta name="keywords" content="web development"></meta>
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await result.json();
  return {
    props: {
      articles,
    },
  };
};
