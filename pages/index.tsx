import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }: any) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>About Me</h2>
      <p>
        First of all, Schwarz isn&apos;t my real name. I just like it ahahaha. I
        also like to code and make websites and apps. I also like to write
        sometimes and this blog provided by Next will be my starting point in
        posting future infos about myself so yeah. Enjoy :D
      </p>
      <h2 className={utilStyles.headingLg}>Posts</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }: any) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Home;
