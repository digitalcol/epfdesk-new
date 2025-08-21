import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../sanity/lib/image";

export default async function BlogDetail({ params }) {
  // Fetch the blog post by slug
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      "author": author->name,
      body,
      mainImage
    }`,
    { slug: params.slug }
  );

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(600).height(400).url()}
          alt={post.title}
          width={600}
          height={400}
        />
      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.publishedAt).toLocaleDateString()} • By {post.author}
      </p>

      {/* Render rich text from Sanity */}
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
