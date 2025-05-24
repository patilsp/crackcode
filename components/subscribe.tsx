"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Laptop } from "lucide-react"

const floatingTags = [
  { name: "CSS", x: "15%", y: "25%", color: "bg-blue-500", delay: 0 },
  { name: "HTML", x: "75%", y: "15%", color: "bg-orange-500", delay: 0.2 },
  { name: "React", x: "80%", y: "54%", color: "bg-red-500", delay: 0.4 },
  { name: "Java Script", x: "5%", y: "53%", color: "bg-yellow-500", delay: 0.6 },
  { name: "Next Js", x: "65%", y: "85%", color: "bg-gray-800", delay: 0.6 },
  { name: "Mongo DB", x: "25%", y: "75%", color: "bg-orange-500", delay: 0.2 },
]

const spiralElements = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  color: ["#8B5CF6", "#F59E0B", "#EF4444", "#10B981", "#3B82F6"][Math.floor(Math.random() * 5)],
  delay: i * 0.1,
}))

export default function Subscribe() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isClient, setIsClient] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }


  // const handleSubscribe = async () => {
  //   if (!email) return;
  
  //   try {
  //     const res = await fetch("/api/subscribe", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email }),
  //     });
  
  //     const data = await res.json();
  
  //     if (res.status === 201) {
  //       setIsSubscribed(true);
  //       setEmail("");
  //     } else if (res.status === 409) {
  //       alert("⚠️ You are already subscribed.");
  //     } else {
  //       alert("❌ Subscription failed: " + data.message);
  //     }
  //   } catch (error) {
  //     console.error("Subscription error:", error);
  //     alert("Something went wrong.");
  //   }
  // };
  

  
  // if (!isClient) return null;

  return (
    <div className="min-h-screen  mt-10 relative overflow-hidden">
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 relative z-10">
        {/* Floating Programming Language Tags */}
        {floatingTags.map((tag, index) => (
          <motion.div
            key={tag.name}
            className={`absolute ${tag.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
            style={{ left: tag.x, top: tag.y }}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              delay: tag.delay + 1,
              duration: 0.6,
              rotate: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            {tag.name}
          </motion.div>
        ))}

        {/* Central Illustration */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Desk */}
          <motion.div
            className="w-80 h-4 bg-gray-800 rounded-lg relative"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {/* Desk legs */}
            <div className="absolute -bottom-16 left-4 w-2 h-16 bg-gray-700 rounded"></div>
            <div className="absolute -bottom-16 right-4 w-2 h-16 bg-gray-700 rounded"></div>
          </motion.div>

          {/* Monitor */}
          <motion.div
            className="absolute -top-24 left-20 w-24 h-16 bg-gray-200 border-4 border-gray-800 rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="w-full h-full bg-purple-600 rounded flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-800"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-800 rounded"></div>
          </motion.div>

          {/* Laptop */}
          <motion.div
            className="absolute -top-8 left-4 w-16 h-12 bg-gray-300 border-2 border-gray-800 rounded transform -rotate-12"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: -12, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <div className="w-full h-8 bg-gray-800 rounded-t flex items-center justify-center">
              <Laptop className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* Coffee Cup */}
          <motion.div
            className="absolute -top-6 right-8 w-6 h-8 bg-white border-2 border-gray-800 rounded-b-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.3, type: "spring" }}
          >
            <div className="w-full h-4 bg-amber-600 rounded-b"></div>
            <div className="absolute -right-2 top-2 w-2 h-3 border-2 border-gray-800 rounded-r"></div>
            {/* Steam */}
            <motion.div
              className="absolute -top-2 left-1 w-1 h-2 bg-gray-400 rounded-full opacity-60"
              animate={{ y: [-2, -6, -2] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -top-2 right-1 w-1 h-2 bg-gray-400 rounded-full opacity-60"
              animate={{ y: [-2, -6, -2] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
          </motion.div>

          {/* Person */}
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            {/* Head */}
            <div className="w-8 h-8 bg-purple-600 rounded-full mx-auto mb-1"></div>
            {/* Body */}
            <div className="w-12 h-16 bg-red-500 rounded-lg mx-auto"></div>
            {/* Arms */}
            <div className="absolute top-8 -left-2 w-6 h-2 bg-red-500 rounded transform -rotate-45"></div>
            <div className="absolute top-8 -right-2 w-6 h-2 bg-red-500 rounded transform rotate-45"></div>
          </motion.div>

          {/* Chair */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <div className="w-12 h-8 bg-gray-800 rounded-t-lg"></div>
            <div className="w-2 h-8 bg-gray-700 mx-auto"></div>
            <div className="w-16 h-2 bg-gray-700 rounded mx-auto"></div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 mt-5">Want daily coding challenges?</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">subscribe now</p>
        </motion.div>

        {/* Subscription Form */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          <div className="flex bg-purple-700 rounded-full p-2 shadow-lg">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-0 text-white placeholder-purple-200 focus:outline-none"
              onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleSubscribe}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 rounded-full"
                disabled={!email}
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </Button>
            </motion.div>
          </div>

          {isSubscribed && (
            <motion.p
              className="text-center text-green-600 mt-4 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              🎉 Welcome to daily coding challenges!
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
