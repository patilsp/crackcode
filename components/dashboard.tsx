"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import {
  Search,
  Filter,
  Star,
  Clock,
  Trophy,
  Target,
  BookOpen,
  Code,
  Database,
  Hash,
  Calculator,
  Zap,
  CheckCircle,
  Circle,
  Lock,
  Flame,
  Briefcase,
} from "lucide-react"

const problems = [
  {
    id: 1,
    title: "Two Sum",
    status: "solved",
    solution: true,
    acceptance: "47.2%",
    difficulty: "Easy",
    frequency: 85,
  },
  {
    id: 2,
    title: "Add Two Numbers",
    status: "attempted",
    solution: true,
    acceptance: "37.2%",
    difficulty: "Medium",
    frequency: 72,
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    status: "unsolved",
    solution: true,
    acceptance: "32.4%",
    difficulty: "Medium",
    frequency: 68,
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    status: "locked",
    solution: false,
    acceptance: "35.1%",
    difficulty: "Hard",
    frequency: 45,
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    status: "unsolved",
    solution: true,
    acceptance: "31.8%",
    difficulty: "Medium",
    frequency: 62,
  },
]

const topics = [
  { name: "Array", count: 1584, icon: Database },
  { name: "String", count: 687, icon: Hash },
  { name: "Dynamic Programming", count: 416, icon: Zap },
  { name: "Hash Table", count: 398, icon: Hash },
  { name: "Math", count: 336, icon: Calculator },
  { name: "Depth-First Search", count: 335, icon: Target },
  { name: "Sort", count: 267, icon: Filter },
  { name: "Greedy", count: 245, icon: Star },
]

 export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen">
    

      {/* Main Content */}
      <div className="flex">
        <div className="flex-1 p-6">
          {/* Top Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Crack the Code + Interview</h3>
                    <p className="text-sm opacity-90">Ace your coding interviews</p>
                    <Button size="sm" className="mt-3 bg-white text-blue-600 hover:bg-gray-100">
                      Start Practicing
                    </Button>
                  </div>
                  <Code className="w-16 h-16 opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-600 to-teal-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Detailed Explanation of Graphs</h3>
                    <p className="text-sm opacity-90">Master graph algorithms</p>
                    <Button size="sm" className="mt-3 bg-white text-green-600 hover:bg-gray-100">
                      Get Started
                    </Button>
                  </div>
                  <Target className="w-16 h-16 opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Weekly Contest 266</h3>
                    <p className="text-sm opacity-90">Dec 5 • 8:00 AM UTC</p>
                    <Button size="sm" className="mt-3 bg-white text-orange-600 hover:bg-gray-100">
                      Register
                    </Button>
                  </div>
                  <Trophy className="w-16 h-16 opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Study Plans */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-0 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">14 Day Study Plan to Crack Java Script</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-0 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">2 Week Study Plan to Tackle DS</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Ultimate System Design Study Plan</h3>
              </CardContent>
            </Card>
          </div>

          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-6">
            {topics.map((topic) => (
              <Button
                key={topic.name}
                variant="outline"
                size="sm"
                className=" border-gray-600 text-gray-700 hover:bg-gray-100"
              >
                <topic.icon className="w-4 h-4 mr-1" />
                {topic.name}
                <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700">
                  {topic.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" className=" border-gray-600 text-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              All Topics
            </Button>
            <Button variant="outline" className=" border-gray-600 text-gray-700">
              <Target className="w-4 h-4 mr-2" />
              Algorithms
            </Button>
            <Button variant="outline" className=" border-gray-600 text-gray-700">
              <Database className="w-4 h-4 mr-2" />
              Database
            </Button>
            <Button variant="outline" className=" border-gray-600 text-gray-700">
              <Code className="w-4 h-4 mr-2" />
              Shell
            </Button>
            <Button variant="outline" className=" border-gray-600 text-gray-700">
              <Calculator className="w-4 h-4 mr-2" />
              Concurrency
            </Button>
          </div>

          {/* Filters Row */}
          <div className="flex items-center gap-4 mb-4">
            <Select defaultValue="lists">
              <SelectTrigger className="w-32  border-gray-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lists">Lists</SelectItem>
                <SelectItem value="favorites">Favorites</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-32  border-gray-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Difficulty</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-32  border-gray-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Status</SelectItem>
                <SelectItem value="solved">Solved</SelectItem>
                <SelectItem value="attempted">Attempted</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-32  border-gray-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tags</SelectItem>
                <SelectItem value="array">Array</SelectItem>
                <SelectItem value="string">String</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search problems" className="pl-10  border-gray-600 text-white" />
            </div>
          </div>

          {/* Problems Table */}
          <Card className="bg-white dark:bg-black">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 text-gray-700 font-medium">Status</th>
                      <th className="text-left p-4 text-gray-700 font-medium">Title</th>
                      <th className="text-left p-4 text-gray-700 font-medium">Solution</th>
                      <th className="text-left p-4 text-gray-700 font-medium">Acceptance</th>
                      <th className="text-left p-4 text-gray-700 font-medium">Difficulty</th>
                      <th className="text-left p-4 text-gray-700 font-medium">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {problems.map((problem) => (
                      <tr key={problem.id} className="border-b">
                        <td className="p-4">
                          {problem.status === "solved" && <CheckCircle className="w-5 h-5 text-green-500" />}
                          {problem.status === "attempted" && <Circle className="w-5 h-5 text-yellow-500" />}
                          {problem.status === "unsolved" && <Circle className="w-5 h-5 text-gray-500" />}
                          {problem.status === "locked" && <Lock className="w-5 h-5 text-gray-500" />}
                        </td>
                        <td className="p-4">
                          <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                            {problem.id}. {problem.title}
                          </span>
                        </td>
                        <td className="p-4">
                          {problem.solution ? (
                            <BookOpen className="w-5 h-5 text-gray-400" />
                          ) : (
                            <span className="text-gray-100">-</span>
                          )}
                        </td>
                        <td className="p-4 text-gray-700">{problem.acceptance}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              problem.difficulty === "Easy"
                                ? "default"
                                : problem.difficulty === "Medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              problem.difficulty === "Easy"
                                ? "bg-green-600 text-white"
                                : problem.difficulty === "Medium"
                                  ? "bg-yellow-600 text-white"
                                  : "bg-red-600 text-white"
                            }
                          >
                            {problem.difficulty}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Progress value={problem.frequency} className="w-16 h-2" />
                            <span className="text-sm text-gray-700">{problem.frequency}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-6">
          {/* Calendar */}
          <Card className=" border-gray-700">
            <CardHeader className="">
              <CardTitle className="">Day 5 Streak!</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border-0" />
            </CardContent>
          </Card>

          {/* Study Plan */}
          <Card className="bg-white dark:bg-black">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                📚 Study Plans
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Algorithm Fundamentals</span>
                  <Badge className="bg-green-600 text-white"><Link href="/notes">Read Now</Link></Badge>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-sm text-gray-400">13 of 20 problems completed</p>
              </div>
            </CardContent>
          </Card>

          {/* Session */}
          <Card className="bg-white dark:bg-black">
            <CardHeader>
              <CardTitle className="">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                💡 Session
                </h2>
                </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Easy</span>
                  <span className="text-green-400 font-semibold">2/323</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Medium</span>
                  <span className="text-yellow-400 font-semibold">2/1702</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Hard</span>
                  <span className="text-red-400 font-semibold">0/723</span>
                </div>
              </div>
            </CardContent>
          </Card>

         

          {/* Featured Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
            <CardContent className="p-2 pl-4 pr-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold mb-1">Daily Quiz</h2>
                <p className="text-sm mb-2">Solve today’s challenge</p>
                <Button variant="outline" size="sm" className="mt-4">
                  <Link href="/quiz">Solve Now</Link>
                </Button>
              </div>
              <Flame className="w-10 h-10 opacity-90" />
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </div>
  )
}
