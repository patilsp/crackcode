"use client";

import { motion } from "framer-motion";
import { Brain, Code2, UserCheck, BarChart3, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Code2,
    title: "Real Interview Questions",
    description:
      "Handpicked from top tech companies to help you prepare effectively.",
  },
  {
    icon: Brain,
    title: "AI-Powered Practice",
    description: "Get instant feedback and smart suggestions while solving.",
  },
  {
    icon: UserCheck,
    title: "Expert Mentorship",
    description: "1:1 sessions with industry veterans to boost your confidence.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your growth and identify key improvement areas.",
  },
  {
    icon: Layers,
    title: "Role-Based Prep",
    description: "Frontend, Backend, Full Stack — prepare for any role.",
  },
];

export default function Showcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-emerald-600">Crack the Code?</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unlock your full potential with features tailored to help you ace interviews.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="rounded-xl p-6 shadow-md bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex items-center gap-4">
              <feature.icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
