// app/blog/[slug]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "../posts"

// Tell Next.js which URLs exist (for static generation)
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({
    params
}: {
    params: Promise<{ slug: string }>  // ✅ It's a Promise now
}) {
    const { slug } = await params  // ✅ Unwrap the Promise
    const post = blogPosts.find((p) => p.slug === slug)  // ✅ Now slug exists

    // If post doesn't exist, show 404
    if (!post) {
        notFound()
    }

    return (
        <main className="pt-20">

            {/* Blog Post Header */}
            <article className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-8">

                    {/* Back button */}
                    <Link
                        href="/blog"
                        className="text-blue-600 hover:text-blue-700 mb-8 inline-block"
                    >
                        ← Back to blog
                    </Link>

                    {/* Title */}
                    <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

                    {/* Metadata */}
                    <div className="text-gray-500 mb-12 pb-8 border-b border-gray-200">
                        {post.date} • {post.readTime}
                    </div>

                    {/* Blog Content */}
                    <div className="prose prose-lg max-w-none">
                        {post.content ? (
                            post.content
                        ) : (
                            <p className="text-gray-500 italic">
                                Content coming soon...
                            </p>
                        )}
                    </div>

                </div>
            </article>

        </main>
    )
}