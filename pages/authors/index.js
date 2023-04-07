/** @format */

import Link from 'next/link';
import Layout from '../../components/layout';

/** @format */
export default function Authors() {
  return (
    <Layout>
      <h1>Authors</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
