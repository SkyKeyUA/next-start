/** @format */

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
// export async function getStaticProps({ params }) {
// 	// params.id will be like ['a', 'b', 'c']
//  }
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    // return [
    // 	{
    // 	  params: {
    // 		 // Statically Generates /posts/a/b/c
    // 		 id: ['a', 'b', 'c'],
    // 	  },
    // 	},
    // 	//...
    //  ];
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {/* Keep the existing code here */}
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br /> */}
      {/* Replace {postData.date} with this */}
      {/* <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
    </Layout>
  );
}
