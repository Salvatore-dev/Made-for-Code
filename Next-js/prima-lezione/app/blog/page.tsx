import posts from '@/app/data/posts.js';
import Link from 'next/link';
import { slugify } from '@/app/data/helpers.js';

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <div className="flex flex-col gap-10 mt-20">
        {posts.map((post) => (
          <article key={post.id} className="bg-gray-300 p-4">
            <div>
              <Link href={'/blog/' + slugify(post.title)}>{post.title}</Link>
            </div>
            <div>{post.text}</div>
          </article>
        ))}
      </div>
    </>
  );
}