// app/blog/posts.tsx
// Data file
import { BuildingFirstWebsite } from "./posts/building-first-website"
import { Learnings } from "./posts/myLearnings"

export interface BlogPost {
  slug: string           // URL-friendly ID
  title: string          // Post title
  date: string           // Publication date
  readTime: string       // e.g., "5 min read"
  preview: string        // Short description
  content: React.ReactNode  // The actual blog post
}

export const blogPosts: BlogPost[] = [
  {
    slug: "myLearnings",
    title: "My Thoughts from Life",
    date: "Q4 2025",
    readTime: "2 min read",
    preview: "A short, unordered collection of important learnings acrewed over the years.",
    content: <Learnings />
  },
  {
    slug: "building-first-website",
    title: "Building My First Website",
    date: "January 8, 2026",
    readTime: "5 min read",
    preview: "Sharing experience making this website and how you can learn from it.",
    content: <BuildingFirstWebsite />
  }
  // Add more posts here as you write them
]