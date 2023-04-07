/** @format */

import Link from 'next/link';
import Layout from '../../components/layout';

/** @format */
const Users = () => {
  return (
    <Layout>
      <h1>Users</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default Users;
