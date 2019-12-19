import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import fetch from "isomorphic-unfetch";
import { NextSeo } from "next-seo";
import { WordPressPost } from "../../types/wp-post";
import WordPressPostCard from "../../components/WordPressPostCard";

type Props = {
  posts: WordPressPost[];
};

const WordPressAPIIndex = ({ posts }: Props) => {
  return (
    <PageLayout>
      <NextSeo title="WordPress API Integration" description="Example of integrating with a WordPress REST API" />
      <h1 className="display-4 mb-4">WordPress API</h1>
      <p>Example of integrating with a default WordPress API</p>

      <h4>Articles</h4>
      {posts.length === 0 && <p className="text-danger my-3">Sorry, no articles found</p>}

      {posts && (
        <div className="card-grid">
          {posts.map(post => (
            <Link href="/wp-api/post/[id]" as={`/wp-api/post/${post.id}`} key={post.id}>
              <a className="card">
                <WordPressPostCard {...post} />
              </a>
            </Link>
          ))}
        </div>
      )}
    </PageLayout>
  );
};

WordPressAPIIndex.getInitialProps = async ({ query }): Promise<Props> => {
  const res = await fetch(`https://kpg.rcdev.ahrengot.com/wp-json/wp/v2/kpg-article`);
  const data = await res.json();

  return {
    posts: data,
  };
};

export default WordPressAPIIndex;
