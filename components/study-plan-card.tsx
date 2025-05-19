"use client"

import { motion } from "framer-motion"
import { Code, Target, Database, BarChart, CodeSquare, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StudyPlanCardProps {
  icon: string
  title: string
  description: string
  color: string
}

export default function StudyPlanCard({ icon, title, description, color }: StudyPlanCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className="h-5 w-5" />
      case "target":
        return <Target className="h-5 w-5" />
      case "database":
        return <Database className="h-5 w-5" />
      case "chart":
        return <BarChart className="h-5 w-5" />
      case "code-square":
        return <CodeSquare className="h-5 w-5" />
      case "shopping-bag":
        return <ShoppingBag className="h-5 w-5" />
      default:
        return <Code className="h-5 w-5" />
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-500 text-white"
      case "purple":
        return "bg-purple-500 text-white"
      case "cyan":
        return "bg-cyan-500 text-white"
      case "amber":
        return "bg-amber-500 text-white"
      case "gray":
        return "bg-gray-700 text-white"
      default:
        return "bg-blue-500 text-white"
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Card className="py-2 overflow-hidden border hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-center gap-3 p-2 pl-4 pr-4">
            <div className={cn("w-10 h-10 rounded-md flex items-center justify-center", getColorClasses())}>
              {getIcon()}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
