import { notFound } from "next/navigation";

const blogPosts = {
  "epf-compliance-guide": {
    title: "The Ultimate Guide to EPF Compliance",
    date: "2025-08-20",
    author: "EPF Desk Team",
    content: `
      <p>EPF compliance is essential for companies in India. In this guide, we'll cover the rules, deadlines, and penalties for non-compliance.</p>
      <p>Employers must contribute 12% of the employee’s basic salary towards EPF...</p>
    `,
  },
  "payroll-trends-2025": {
    title: "Top Payroll Trends in 2025",
    date: "2025-08-15",
    author: "EPF Desk Team",
    content: `
      <p>Payroll is rapidly evolving with automation, AI-driven compliance checks, and self-service portals becoming mainstream.</p>
    `,
  },
};

export default function BlogDetail({ params }) {
  const post = blogPosts[params.slug];
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.date} • By {post.author}
      </p>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
