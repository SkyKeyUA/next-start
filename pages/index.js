/** @format */

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
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
        </div>
      </section>
    </Layout>
  );
}
