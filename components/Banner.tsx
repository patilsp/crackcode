"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Left column with text content */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              Ace Your Next <span className="text-emerald-600 dark:text-emerald-500">Interview</span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive interview preparation for students and professionals. Master technical questions, behavioral
            interviews, and boost your confidence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>1000+ Practice Questions</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Users className="h-5 w-5 text-emerald-500" />
              <span>Mock Interviews</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <BookOpen className="h-5 w-5 text-emerald-500" />
              <span>Expert Resources</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/get-started">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight
                    className={`h-5 w-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  />
                </span>
                <span className="absolute inset-0 z-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right column with image */}
        <motion.div
          className="relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative lg:h-full">
            <Image
              src="/assets/images/Job-Interview.png"
              alt="Interview preparation"
              width={800}
              height={800}
              className="rounded-lg object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10 dark:ring-white/10" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
