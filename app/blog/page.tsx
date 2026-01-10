// app/blog/page.tsx
// blog list
import Link from "next/link"
import { blogPosts } from "./posts"

export default function BlogPage() {
  return (
    <main className="pt-20">

      {/* Header */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Just my thoughts. 
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 bg-white-50">
        <div className="max-w-4xl mx-auto px-8">

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h2 className="text-3xl font-bold mb-2">
                    {post.title}
                  </h2>

                  <div className="text-gray-500 text-sm mb-4">
                    {post.date} • {post.readTime}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.preview}
                  </p>

                  <span className="text-blue-600 font-medium">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
        </div>
      </section>
    </main>
  )
}