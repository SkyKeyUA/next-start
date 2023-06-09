/** @format */

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
// export async function getServerSideProps(context) {
// 	return {
// 	  props: {
// 		 // props for your component
// 	  },
// 	};
//  }

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>i'm frontend developer(React)</div>
        <div>
          This is a sample website - you’ll be building a site like this on
          <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.
          <div>
            Read <Link href="/posts">this page! (Posts)</Link>
          </div>
          <div>
            Read <Link href="/authors">this page! (Authors)</Link>
          </div>
          <div>
            Read <Link href="/users">this page! (Users)</Link>
          </div>
        </div>
      </section>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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
}
