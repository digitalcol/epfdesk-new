import Link from "next/link";

const blogPosts = [
  {
    slug: "epf-compliance-guide",
    title: "The Ultimate Guide to EPF Compliance",
    excerpt: "Everything you need to know about staying compliant with EPF in India.",
    date: "2025-08-20",
    author: "EPF Desk Team",
    image: "/images/blob_1.webp",
  },
  {
    slug: "payroll-trends-2025",
    title: "Top Payroll Trends in 2025",
    excerpt: "From AI automation to compliance tools, discover what’s shaping payroll.",
    date: "2025-08-15",
    author: "EPF Desk Team",
    image: "/images/blob_2.webp",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-22">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group rounded-2xl shadow-lg overflow-hidden min-h-[450px] bg-white hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-3 line-clamp-3">{post.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-blue-600">Read more →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
