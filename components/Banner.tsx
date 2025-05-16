"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Banner() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-xl">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Crack the <span className="text-emerald-600 dark:text-emerald-500">Code</span> with Confidence
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn web development, solve real interview questions, and build full-stack projects with ease. From HTML to MERN, get everything in one place.
          </motion.p>

          {/* Features */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <BookOpen className="h-5 w-5 text-emerald-500" />
              <span>Step-by-Step Learning Paths</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>1000+ Real Interview Q&As</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* CTA 1 */}
            <Link href="/docs">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
                onMouseEnter={() => setHovered("start")}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning
                  <ArrowRight
                    className={`h-5 w-5 transition-transform duration-300 ${
                      hovered === "start" ? "translate-x-1" : ""
                    }`}
                  />
                </span>
                <span className="absolute inset-0 z-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>

            {/* CTA 2 */}
            <Link href="/about">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
                onMouseEnter={() => setHovered("know")}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowRight
                    className={`h-5 w-5 transition-transform duration-300 ${
                      hovered === "know" ? "translate-x-1" : ""
                    }`}
                  />
                </span>
                <span className="absolute inset-0 z-0 bg-gray-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/assets/images/banner.svg"
            alt="Coding Interview Preparation Banner"
            width={550}
            height={550}
            className="mx-auto lg:mx-0 w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
