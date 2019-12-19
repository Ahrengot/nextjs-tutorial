import PageLayout from "../../../components/PageLayout";
import fetch from "isomorphic-unfetch";

import { NextSeo } from "next-seo";
import { WordPressPost } from "../../../types/wp-post";
import WordPressLazyImage from "../../../components/WordPressLazyImage";

type Props = {
  post?: WordPressPost;
  postId: string;
};

const SingleWordPressPost = ({ post, postId }: Props) => {
  if (!post) {
    return (
      <PageLayout>
        <h1>Nothing found for ID "{postId}"</h1>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <NextSeo title={`${post.title.rendered} | Articles > WordPress API`} description={post.excerpt.rendered} />
      <h1 className="display-4 mb-4" dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
      <p>View original article: <a href={post.link} target="_blank">{post.link}</a></p>
      {post.featured_media && (
        <WordPressLazyImage id={post.featured_media} size="hero" className="post-featured-image mb-4" />
      )}
      <section className="post-content" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </PageLayout>
  );
};

SingleWordPressPost.getInitialProps = async ({ query }): Promise<Props> => {
  const res = await fetch(`//kpg.rcdev.ahrengot.com/wp-json/wp/v2/kpg-article/${query.id}`);
  const data = await res.json();

  return {
    post: data,
    postId: query.id
  };
};

export default SingleWordPressPost;
