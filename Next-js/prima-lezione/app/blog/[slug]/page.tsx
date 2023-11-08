import posts from '@/app/data/posts.js';
import { slugify } from '@/app/data/helpers.js';

export default function BlogPost({ params }) {
  const blogPost = posts.filter(
    (post) => slugify(post.title) === slugify(params.slug)
  )[0];

  return (
    <>
      <h1>Blog Post</h1>

      <div>{blogPost.title}</div>
      <div>{blogPost.text}</div>
    </>
  );
}