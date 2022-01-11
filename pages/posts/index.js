import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>ALl Posts Page</title>
        <meta
          name="description"
          content="A page which shows all latest posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    }, // will be passed to the page component as props
  };
}

export default AllPostsPage;
