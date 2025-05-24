"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Terminal, BookOpen } from "lucide-react"

const categories = ["All", "Coding", "Interview", "Challenges", "Tips"]

const posts = [
  {
    title: "Top 10 JavaScript Interview Questions",
    excerpt: "Master these frequently asked questions before your next frontend interview.",
    category: "Interview",
    date: "July 22, 2025",
  },
  {
    title: "How to Solve Coding Problems Efficiently",
    excerpt: "Learn strategies to break down problems and write clean, optimal solutions.",
    category: "Challenges",
    date: "July 20, 2025",
  },
  {
    title: "Build a Fullstack App with Next.js and MongoDB",
    excerpt: "Step-by-step guide to create a powerful CRUD app with modern tools.",
    category: "Coding",
    date: "July 18, 2025",
  },
  {
    title: "Ace Your Next Coding Challenge with These Tips",
    excerpt: "These proven techniques can help you succeed on LeetCode and HackerRank.",
    category: "Challenges",
    date: "July 15, 2025",
  },
  {
    title: "Why You Should Learn TypeScript in 2025",
    excerpt: "Type safety, better tooling, and why companies love TypeScript.",
    category: "Tips",
    date: "July 12, 2025",
  },
  {
    title: "React vs Next.js – Which One Should You Choose?",
    excerpt: "Understand the difference and decide which fits your project best.",
    category: "Coding",
    date: "July 10, 2025",
  },
]

export default function BlogPage() {
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")

  const filtered = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-16">
      {/* Header */}

      <motion.header
        className="flex justify-between items-center relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
          <Link href="/"><span className="text-2xl font-bold text-gray-800">
            Crack <span className="text-purple-600">The Code</span>
          </span>
          </Link>
          
        </div>
        
      </motion.header>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Developer <span className="text-indigo-600">Blog</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stay sharp with programming tips, coding challenges, and interview prep.
        </p>
      </motion.div>

      {/* Search and Categories */}
      <motion.div
        className="max-w-5xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Input
          placeholder="Search blog posts..."
          className="w-full md:w-[60%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((c) => (
            <Button
              key={c}
              size="sm"
              variant={category === c ? "default" : "outline"}
              onClick={() => setCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Blog Posts */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {filtered.map((post, i) => (
          <motion.div
            key={i}
            className="hover:scale-[1.02] transition-transform"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-indigo-100 text-indigo-700">{post.category}</Badge>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
                <Button size="sm" variant="outline" className="mt-2">
                  <BookOpen className="size-4 mr-2" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* No Posts Found */}
      {filtered.length === 0 && (
        <motion.div className="text-center text-gray-500 mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          No matching blog posts found.
        </motion.div>
      )}
    </div>
  )
}
