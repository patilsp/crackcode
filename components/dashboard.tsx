"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CourseCard from "@/components/course-cards"
import Link from "next/link"
import StudyPlanCard from "@/components/study-plan-card"
import TrendingProblems from "@/components/trending-problems"
import { Flame, Briefcase, Star } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Sharpen your coding skills every day</p>
          </div>
          <div className="flex items-center gap-2">
            <Button  size="sm">Upgrade to Premium</Button>
            <Button  variant="outline" size="sm">My Progress</Button>
          </div>
        </div>

        {/* Carousel */}
        <CourseCard />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* Study Plan */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    📚 Study Plans
                    </h2>
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:text-underline">
                        See all
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    <StudyPlanCard
                    icon="code"
                    title="New 100"
                    description="Core set of 75 must-solve problems"
                    color="blue"
                    />
                    <StudyPlanCard
                    icon="sparkles"
                    title="Top 100 Liked"
                    description="Most liked by the coding community"
                    color="pink"
                    />
                    <StudyPlanCard
                    icon="database"
                    title="SQL Challenges"
                    description="Master your SQL interviews top questions and answers"
                    color="cyan"
                    />
                </div>
                </motion.div>


            {/* Trending Problems */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <TrendingProblems />
            </motion.div>
          </div>

          <div className="space-y-6">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
            <CardContent className="p-2 pl-4 pr-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold mb-1">🔥 Daily Quiz</h2>
                <p className="text-sm mb-2">Solve today’s challenge: <strong>Quiz</strong></p>
                <Button variant="outline" size="sm">
                  <Link href="/quiz">Solve Now</Link>
                </Button>
              </div>
              <Flame className="w-10 h-10 opacity-90" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-gradient-to-r from-purple-400 to-blue-500 text-white shadow-lg">
            <CardContent className="p-2 pl-4 pr-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold mb-1">Notes</h2>
                <p className="text-sm mb-2">Programming Notes</p>
                <Button variant="outline" size="sm">
                  <Link href="/notes">Read Now</Link>
                </Button>
              </div>
              <Flame className="w-10 h-10 opacity-90" />
            </CardContent>
          </Card>
        </motion.div>
          

            {/* Top Companies */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold flex items-center gap-2 text-lg"><Briefcase size={18} />Top Companies</h3>
                  {["Amazon", "Google", "Meta", "Microsoft", "Netflix"].map((company, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{company}</span>
                      <Badge variant="outline">20+ Qs</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}
