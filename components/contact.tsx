"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Send, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const contactIcons = [
  { icon: Mail, label: "Email", x: "10%", y: "30%", color: "bg-blue-500", delay: 0 },
  { icon: Phone, label: "Phone", x: "80%", y: "20%", color: "bg-green-500", delay: 0.2 },
  { icon: MapPin, label: "Location", x: "5%", y: "80%", color: "bg-purple-500", delay: 0.4 },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    alert("Message sent!")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden py-16 px-6">
     
     <motion.header
        className="flex justify-between items-center relative z-10"
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
        
      </motion.header>
      {/* Floating Icons */}
      {contactIcons.map((item) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.color} text-white p-3 rounded-xl shadow-lg backdrop-blur-sm`}
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20, scale: 0 }}
          animate={{
            opacity: 0.9,
            y: 0,
            scale: 1,
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            delay: item.delay,
            duration: 0.8,
            rotate: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileHover={{ scale: 1.2, y: -10 }}
        >
          <item.icon className="w-5 h-5" />
        </motion.div>
      ))}

     
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Let's <span className="text-purple-600">Connect</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Got a question, feedback or collaboration idea? Fill out the form and we’ll get back to you!
        </p>
        <Badge variant="secondary" className="mt-4 bg-purple-100 text-purple-700">
          <Send className="w-3 h-3 mr-1" />
          Contact Support
        </Badge>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6 z-10 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." rows={4} required />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:brightness-110 transition-all">
          Send Message
        </Button>
      </motion.form>
    </div>
  )
}
