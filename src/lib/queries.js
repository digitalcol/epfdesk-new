// lib/queries.ts
export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "author": author->name,
  mainImage
}`;
