"use client";

import { motion } from "framer-motion";
import { Brain, Code2, UserCheck, BarChart3, Layers, Clock, DatabaseZap, BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Code2,
    title: "Real Interview Questions",
    description: "400+ questions curated from FAANG interviews with detailed solutions.",
    stats: "98% relevance to actual interviews",
    color: "text-emerald-600"
  },
  {
    icon: Brain,
    title: "AI-Powered Practice",
    description: "Our AI analyzes your solutions and provides real-time optimization suggestions.",
    stats: "3.2x faster skill improvement",
    color: "text-blue-600"
  },
  {
    icon: UserCheck,
    title: "Expert Mentorship",
    description: "Weekly 1:1 sessions with engineers from Google, Meta, and Amazon.",
    stats: "50+ active mentors",
    color: "text-purple-600"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed metrics on your problem-solving speed, accuracy, and patterns.",
    stats: "15+ tracked metrics",
    color: "text-amber-600"
  },
  {
    icon: Layers,
    title: "Role-Specific Paths",
    description: "Customized learning paths for Frontend, Backend, DevOps, and ML roles.",
    stats: "8 specialized tracks",
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Timed Mock Interviews",
    description: "Simulate real interview pressure with our timed coding environment.",
    stats: "120+ mock interviews available",
    color: "text-indigo-600"
  }
];

export default function Showcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            How <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Crack the Code</span> Works
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join 10,000+ developers who landed their dream jobs with our proven system
          </p>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group rounded-2xl p-8 shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-5">
                <div className={cn(
                  "p-3 rounded-xl bg-opacity-20",
                  feature.color.replace("text", "bg"),
                  "bg-gray-100 rounded-xl group-hover:scale-110 transition-transform duration-300"
                )}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 flex-grow">
                {feature.description}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {feature.stats}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          Start Your 7-Day Free Trial
        </button>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          No credit card required · Cancel anytime
        </p>
      </motion.div>
    </section>
  );
}