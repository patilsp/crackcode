import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const trendingProblems = [
  { title: "Two Sum", difficulty: "Easy", tag: "Array", time: "1 hour ago" }, 
  { title: "Binary Tree Zigzag", difficulty: "Medium", tag: "Tree", time: "2 days ago" },
  { title: "Longest Substring", difficulty: "Hard", tag: "Sliding Window", time: "3 days ago" }
]

const difficultyStyles = {
  Easy: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  Hard: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
}

export default function TrendingProblems() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">🔥 Trending Problems</h2>
      <div className="space-y-4">
        {trendingProblems.map((item, i) => (
          <Card
            key={i}
            className="py-3 transition-shadow hover:shadow-md border dark:border-gray-800 hover:shadow-md transition-shadow"
          >
            <CardContent className="p-2 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-muted-foreground">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.tag} · {item.time}</p>
              </div>
              <Badge className={`${difficultyStyles[item.difficulty]} text-sm px-3 py-1 rounded-full`}>
                {item.difficulty}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
