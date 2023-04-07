/** @format */

import Link from 'next/link';
import Layout from '../../components/layout';

/** @format */
export default function Users() {
  return (
    <Layout>
      <h1>Users</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
