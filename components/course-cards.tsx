"use client"

import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "CrackTheCode's Interview Crash Course:",
    subtitle: "System Design for Interviews and Beyond",
    color: "bg-gradient-to-br from-green-500 to-green-700",
    buttonText: "Start Learning",
  },
  {
    id: 2,
    title: "CrackTheCode's DSA Crash Course",
    subtitle: "Data Structures and Algorithms",
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    buttonText: "Start Learning",
  },
  {
    id: 3,
    title: "Top Interview Questions",
    subtitle: "Curated list of most common questions",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    buttonText: "Get Started",
  },
]

export default function CourseCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className={`rounded-xl p-6 flex flex-col justify-between h-44 ${course.color}`}
        >
          <div>
            <h2 className="text-xl font-bold text-white">{course.title}</h2>
            <p className="text-white/90 mt-1">{course.subtitle}</p>
          </div>
          <Button className="self-start bg-white text-gray-800 hover:bg-white/90" size="sm">
            {course.buttonText}
          </Button>
        </div>
      ))}
    </div>
  )
}
