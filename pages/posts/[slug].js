import Head from "next/head";
import { Fragment } from "react";
import PostsContent from "../../components/posts/posts-detail/posts-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostsContent post={post} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postdata = getPostData(slug);
  return {
    props: {
      post: postdata,
    },
    revalidate: 600, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((p) => p.replace(/\.md$/, ""));
  return {
    paths: slugs.map((s) => ({ params: { slug: s } })),

    fallback: false, // See the "fallback" section below
  };
}

export default PostDetailPage;
