"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Generate calendar days
  const days = []
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  // Current day
  const today = new Date()
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    )
  }

  return (
    <Card>
      <CardHeader className="pl-4 pr-4 pb-0">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">
              {today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </h3>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${monthName}-${year}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              <div className="text-gray-500">S</div>
              <div className="text-gray-500">M</div>
              <div className="text-gray-500">T</div>
              <div className="text-gray-500">W</div>
              <div className="text-gray-500">T</div>
              <div className="text-gray-500">F</div>
              <div className="text-gray-500">S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {days.map((day, index) => (
                <div key={index} className="aspect-square flex items-center justify-center">
                  {day && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center",
                        isToday(day) ? "bg-green-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800",
                      )}
                    >
                      {day}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
