"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center">
      <motion.div
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
           <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.2}
      >
       Page Not Found
      </motion.h1>

        <Image
          src="/assets/images/not-found.png"
          alt="Page Not Found"
          width={400}
          height={400}
          className="mx-auto rounded-2xl"
          priority
        />
      </motion.div>

   
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.4}
      >
        Sorry, the page you’re looking for doesn’t exist or It is Under development. Let’s get you back home!
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.6}
      >
        <Button asChild size="lg"  variant="outline" className="gap-2">
          <Link href="/">
            <Home className="size-4" />
            Home
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.history.back()}
        >
          Back
        </Button>
      </motion.div>
    </div>
  )
}
