import Link from "next/link";
import Image from "next/image";

import { blogPostsQuery } from "@/lib/queries";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

export default async function BlogPage() {
  const blogPosts = await client.fetch(blogPostsQuery);

  return (
    <section className="max-w-6xl mx-auto px-6 py-22">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <div className="group rounded-2xl shadow-lg overflow-hidden min-h-[450px] bg-white hover:shadow-xl transition">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(600).height(400).url()}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="p-6">
                <p className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-3 line-clamp-3">{post.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-blue-600">
                  Read more →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
