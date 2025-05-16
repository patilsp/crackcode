// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Search, Tag, Clock, ChevronRight, Bookmark, TrendingUp, Users, Code } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function BlogDashboard() {
//   const [searchQuery, setSearchQuery] = useState("")

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   }

//   const cardHoverVariants = {
//     hover: {
//       y: -5,
//       boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8"
//         >
//           <h1 className="text-4xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">
//             Developer Community Blog
//           </h1>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
//             Insights, interview questions, and coding challenges to help you crack the code and ace your next tech
//             interview.
//           </p>
//         </motion.div>

//         {/* Search and filters */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="mb-8 flex flex-col md:flex-row gap-4 items-center"
//         >
//           <div className="relative w-full md:w-1/2">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <Input
//               placeholder="Search articles, topics, or authors..."
//               className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
        
//         </motion.div>

//         {/* Tabs */}
//         <Tabs defaultValue="featured" className="mb-8">
//           <TabsList className="mb-6">
//             <TabsTrigger value="featured">Featured</TabsTrigger>
//             <TabsTrigger value="recent">Recent</TabsTrigger>
//             <TabsTrigger value="popular">Popular</TabsTrigger>
//             <TabsTrigger value="challenges">Coding Challenges</TabsTrigger>
//           </TabsList>

//           {/* Featured Tab */}
//           <TabsContent value="featured">
//             {/* Featured Article */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-8"
//             >
//               <Card className="overflow-hidden bg-white dark:block border-0 shadow-lg">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="p-6 flex flex-col justify-center">
//                     <Badge className="w-fit mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100">
//                       Featured
//                     </Badge>
//                     <h2 className="text-2xl font-bold mb-3">
//                       Mastering System Design Interviews: A Comprehensive Guide
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-300 mb-4">
//                       Learn the key principles, patterns, and strategies to excel in system design interviews at top
//                       tech companies.
//                     </p>
//                     <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
//                       <Clock size={16} className="mr-1" />
//                       <span>10 min read</span>
//                       <span className="mx-2">•</span>
//                       <Tag size={16} className="mr-1" />
//                       <span>System Design</span>
//                     </div>
//                     <Button className="w-fit group">
//                       Read Article{" "}
//                       <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </div>
//                   <div className="h-64 md:h-auto">
//                     <div className="h-full flex items-center justify-center p-6">
//                       <Image
//                             src="/assets/images/post1.jpg"
//                             alt="blog-image"
//                             width={500}
//                             height={800}
//                             className="object-contain rounded-md"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>

//             {/* Blog Grid */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {featuredBlogs.map((blog, index) => (
//                 <motion.div key={index} variants={itemVariants} whileHover="hover" custom={index}>
//                   <BlogCard blog={blog} variants={cardHoverVariants} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="recent">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {recentBlogs.map((blog, index) => (
//                 <motion.div key={index} variants={itemVariants} whileHover="hover" custom={index}>
//                   <BlogCard blog={blog} variants={cardHoverVariants} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="popular">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {popularBlogs.map((blog, index) => (
//                 <motion.div key={index} variants={itemVariants} whileHover="hover" custom={index}>
//                   <BlogCard blog={blog} variants={cardHoverVariants} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="challenges">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {codingChallenges.map((blog, index) => (
//                 <motion.div key={index} variants={itemVariants} whileHover="hover" custom={index}>
//                   <BlogCard blog={blog} variants={cardHoverVariants} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>
//         </Tabs>

//         {/* Categories Section */}
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-12">
//           <h2 className="text-2xl font-bold mb-6 flex items-center">
//             <Tag size={20} className="mr-2" /> Popular Categories
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 flex items-center"
//               >
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${category.color}`}>
//                   {category.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-medium">{category.name}</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} articles</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Newsletter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 text-white"
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-2xl font-bold mb-4">Join our Developer Newsletter</h2>
//             <p className="mb-6">
//               Get weekly updates on the latest interview questions, coding challenges, and tech insights.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//               <Input
//                 placeholder="Enter your email"
//                 className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
//               />
//               <Button variant="secondary">Subscribe</Button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// // Blog Card Component
// function BlogCard({ blog, variants }) {
//   return (
//     <motion.div variants={variants} className="h-full">
//       <Card className="h-full py-0 border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
//         <CardHeader className="p-0">
//           <div className="relative h-48 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
//             <div className="absolute top-1 right-2">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
//               >
//                 <Bookmark size={16} className="text-gray-600 dark:text-gray-300" />
//               </Button>
//             </div>
//             <img src={blog.image || "/assets/images/male-designer.svg "} alt={blog.title} className="w-full h-full object-cover" />
          
//           </div>
//         </CardHeader>
//         <CardContent className="px-5">
//           <Badge
//             variant="outline"
//             className="mb-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
//           >
//             {blog.category}
//           </Badge>
//           <CardTitle className="text-xl mb-2">{blog.title}</CardTitle>
//           <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">{blog.description}</p>
//           <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//             <Clock size={14} className="mr-1" />
//             <span>{blog.readTime} min read</span>
//             {blog.isNew && (
//               <>
//                 <span className="mx-2">•</span>
//                 <Badge variant="secondary" className="text-xs">
//                   New
//                 </Badge>
//               </>
//             )}
//           </div>
//         </CardContent>
//         <CardFooter className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between">
//           <div className="flex items-center text-sm">
//             <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"></div>
//             <span>{blog.author}</span>
//           </div>
//           <Button variant="ghost" size="sm" className="group">
//             Read <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }

// // Sample data
// const featuredBlogs = [
//   {
//     title: "10 JavaScript Concepts You Need to Master",
//     description:
//       "Deep dive into closures, promises, async/await, and other essential JavaScript concepts for interviews.",
//     category: "JavaScript",
//     readTime: 8,
//     author: "Sarah Johnson",
//     isNew: true,
//     image: "/assets/images/javascript.png?height=300&width=500",
//   },
//   {
//     title: "Optimizing React Performance",
//     description: "Learn how to identify and fix performance bottlenecks in your React applications.",
//     category: "React",
//     readTime: 12,
//     author: "Michael Chen",
//     isNew: false,
//     icon: <Code size={60} className="text-white/30" />,
//   },
//   {
//     title: "Data Structures: From Basic to Advanced",
//     description: "A comprehensive guide to data structures with practical examples and interview questions.",
//     category: "Algorithms",
//     readTime: 15,
//     author: "Alex Rodriguez",
//     isNew: true,
//     image: "/assets/images/dsa.png?height=300&width=500",
//   },
// ]

// const recentBlogs = [
//   {
//     title: "Building Accessible Web Applications",
//     description: "Best practices for creating inclusive and accessible web experiences for all users.",
//     category: "Accessibility",
//     readTime: 7,
//     author: "Emma Wilson",
//     isNew: true,
//     icon: <Users size={60} className="text-white/30" />,
//   },
//   {
//     title: "Next.js 15: What's New and Improved",
//     description: "Explore the latest features and improvements in Next.js 15 and how to leverage them.",
//     category: "Next.js",
//     readTime: 6,
//     author: "David Park",
//     isNew: true,
//     icon: <Code size={60} className="text-white/30" />,
//   },
//   {
//     title: "Microservices vs Monoliths",
//     description: "Understanding the trade-offs between microservices and monolithic architectures.",
//     category: "Architecture",
//     readTime: 10,
//     author: "Sophia Martinez",
//     isNew: false,
//     icon: <Code size={60} className="text-white/30" />,
//   },
// ]

// const popularBlogs = [
//   {
//     title: "Cracking the Coding Interview",
//     description: "Strategies and approaches to solve the most common coding interview questions.",
//     category: "Interviews",
//     readTime: 14,
//     author: "James Wilson",
//     isNew: false,
//     icon: <Code size={60} className="text-white/30" />,
//   },
//   {
//     title: "TypeScript Best Practices in 2025",
//     description: "Modern TypeScript patterns and practices to write cleaner, safer code.",
//     category: "TypeScript",
//     readTime: 9,
//     author: "Olivia Taylor",
//     isNew: false,
//     icon: <Code size={60} className="text-white/30" />,
//   },
//   {
//     title: "Introduction to Web3 Development",
//     description: "Getting started with blockchain and decentralized application development.",
//     category: "Web3",
//     readTime: 11,
//     author: "Ethan Brown",
//     isNew: true,
//     icon: <Code size={60} className="text-white/30" />,
//   },
// ]

// const codingChallenges = [
//   {
//     title: "Two Sum Problem: Explained",
//     description: "Step-by-step solution to the classic Two Sum problem with time and space complexity analysis.",
//     category: "Algorithms",
//     readTime: 5,
//     author: "Ryan Lee",
//     isNew: false,
//     icon: <Code size={60} className="text-white/30" />,
//   },
//   {
//     title: "Building a Real-time Chat App",
//     description: "Hands-on challenge: Create a real-time chat application using Next.js and WebSockets.",
//     category: "Project",
//     readTime: 20,
//     author: "Mia Johnson",
//     isNew: true,
//     icon: <Code size={60} className="text-white/30" />,
//   },
//   {
//     title: "Solving Graph Problems",
//     description: "Techniques for tackling common graph-based interview questions and algorithms.",
//     category: "Algorithms",
//     readTime: 12,
//     author: "Daniel Kim",
//     isNew: false,
//     icon: <Code size={60} className="text-white/30" />,
//   },
// ]

// const categories = [
//   {
//     name: "JavaScript",
//     count: 42,
//     color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
//     icon: <Code size={20} />,
//   },
//   {
//     name: "React",
//     count: 38,
//     color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
//     icon: <Code size={20} />,
//   },
//   {
//     name: "Algorithms",
//     count: 27,
//     color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
//     icon: <Code size={20} />,
//   },
//   {
//     name: "System Design",
//     count: 19,
//     color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
//     icon: <TrendingUp size={20} />,
//   },
// ]


import React from 'react'

function Blog() {
  return (
    <div className="p-2 text-center ">
       <h1 className="text-4xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">
            Developer Community Blog
          </h1>
         <p className="text-lg text-gray-600 dark:text-gray-300">
           Insights, interview questions, and coding challenges to help you crack the code and ace your next tech
            interview.
          </p>
    </div>
  )
}

export default Blog
