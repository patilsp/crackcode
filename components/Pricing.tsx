"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Crown, Check, Star, Rocket, Target, Trophy, BookOpen, Users, Smartphone, Globe } from "lucide-react"

const floatingTechIcons = [
  { icon: Code, name: "React", x: "10%", y: "20%", color: "bg-blue-500", delay: 0 },
  { icon: Globe, name: "HTML", x: "85%", y: "15%", color: "bg-orange-500", delay: 0.2 },
  { icon: Zap, name: "JS", x: "5%", y: "80%", color: "bg-yellow-500", delay: 0.4 },
  { icon: Smartphone, name: "CSS", x: "90%", y: "75%", color: "bg-purple-500", delay: 0.6 },
  { icon: Target, name: "Node", x: "5%", y: "35%", color: "bg-green-500", delay: 0.8 },
  { icon: BookOpen, name: "Vue", x: "90%", y: "45%", color: "bg-emerald-500", delay: 1.0 },
]

const pricingPlans = [
  {
    name: "Starter",
    icon: BookOpen,
    price: "$25",
    period: "/month",
    description: "Perfect for beginners for their coding journey",
    color: "from-blue-500 to-cyan-500",
    features: [
      "50+ coding challenges",
      "Basic web development courses",
      "Community forum access",
      "Progress tracking",
      "Email support",
    ],
    popular: false,
    delay: 0.2,
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "$50",
    period: "/month",
    description: "For serious learners who want to level up fast",
    color: "from-purple-500 to-pink-500",
    features: [
      "200+ coding challenges",
      "Advanced web development courses",
    //   "Live coding sessions",
    //   "1-on-1 mentorship (2hrs/month)",
      "Priority support",
      "Certificate of completion",
      "Interview preparation",
    ],
    popular: true,
    delay: 0.4,
  },
  {
    name: "Elite",
    icon: Crown,
    price: "$99",
    period: "/month",
    description: "Ultimate package for future tech leaders",
    color: "from-yellow-500 to-orange-500",
    features: [
      "500+ coding challenges",
      "Full-stack development bootcamp",
    //   "Weekly live sessions",
    //   "Unlimited mentorship",
      "Real project collaborations",
      "Job placement assistance",
      "Lifetime access to resources",
    //   "Personal portfolio review",
    ],
    popular: false,
    delay: 0.6,
  },
]

const spiralElements = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  color: ["#8B5CF6", "#F59E0B", "#EF4444", "#10B981", "#3B82F6", "#EC4899"][Math.floor(Math.random() * 6)],
  delay: i * 0.05,
}))

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isAnnual, setIsAnnual] = useState(false)

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName)
    setTimeout(() => setSelectedPlan(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
     

      {/* Header */}
      <motion.header
        className="flex justify-between items-center p-6 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
          <Link href="/"><span className="text-2xl font-bold text-gray-800">
            Crack <span className="text-purple-600">The Code</span>
          </span>
          </Link>
          
        </div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gray-600 font-medium">Pricing Plans</span>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            <Trophy className="w-3 h-3 mr-1" />
            For Techies
          </Badge>
        </motion.div>
      </motion.header>

      {/* Floating Tech Icons */}
      {floatingTechIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute ${tech.color} text-white p-3 rounded-xl shadow-lg backdrop-blur-sm`}
          style={{ left: tech.x, top: tech.y }}
          initial={{ opacity: 0, y: 20, scale: 0 }}
          animate={{
            opacity: 0.9,
            y: 0,
            scale: 1,
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            delay: tech.delay + 1,
            duration: 0.8,
            rotate: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
          whileHover={{ scale: 1.2, y: -10 }}
        >
          <tech.icon className="w-5 h-5" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Level Up Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Coding Skills
            </span>
          </motion.h1>
          <motion.p
            className="text-md text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Join thousands of techies mastering web development through hands-on challenges, expert mentorship, and
            real-world projects. Choose your path to success.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <span className={`font-medium ${!isAnnual ? "text-purple-600" : "text-gray-500"}`}>Monthly</span>
            <motion.button
              className="relative w-14 h-7 bg-gray-300 rounded-full p-1 transition-colors duration-300"
              style={{ backgroundColor: isAnnual ? "#8B5CF6" : "#D1D5DB" }}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`font-medium ${isAnnual ? "text-purple-600" : "text-gray-500"}`}>
              Annual
              <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: plan.delay + 1.6, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: plan.delay + 2, duration: 0.5 }}
                >
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </motion.div>
              )}

              <Card
                className={`h-full ${plan.popular ? "ring-2 ring-purple-500 shadow-2xl" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</CardTitle>

                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-4xl font-bold text-gray-800">
                      {isAnnual ? `$${Math.floor(Number.parseInt(plan.price.slice(1)) * 0.8)}` : plan.price}
                    </span>
                    <span className="text-gray-500">{isAnnual ? "/month" : plan.period}</span>
                  </div>

                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: plan.delay + 2.2 + featureIndex * 0.1, duration: 0.5 }}
                      >
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full py-3 font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                          : "bg-gray-800 hover:bg-gray-900 text-white"
                      }`}
                      onClick={() => handleSelectPlan(plan.name)}
                    >
                      {selectedPlan === plan.name ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Selected!
                        </motion.span>
                      ) : (
                        `Choose ${plan.name}`
                      )}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-8 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span>10,000+ Active Learners</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              <span>500+ Companies Hiring</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            🚀 Start your 7-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </div>
  )
}
