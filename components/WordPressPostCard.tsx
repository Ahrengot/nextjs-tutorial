import { WordPressPost } from "../types/wp-post";
import WordPressLazyImage from "./WordPressLazyImage";

const WordPressPostCard = (post:WordPressPost) => {
  return (
    <article>
      {post.featured_media && (
        <WordPressLazyImage id={post.featured_media} size="medium" className="card-img-top" />
      )}
      <div className="card-body">
        <h3 className="card-title h5" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    </article>
  );
}

export default WordPressPostCard;