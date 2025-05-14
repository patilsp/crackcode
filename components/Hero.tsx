import React from 'react'
import { cn } from '@/lib/cn';
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="relative z-[2] flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
          <div
            className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent, white, transparent)',
              background:
                'repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
            }}
          />
          <div
            className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent, white, transparent)',
              background:
                'repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
            }}
          />
          <h1 className="mb-8 text-4xl font-medium">Build Your Docs</h1>
          <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
            Build excellent documentation site with less effort
          </h1>
          <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
            Fumadocs is a beautiful documentation framework for Developers, flexible
            and performant, with everything from Next.js.
          </p>
          <div className="inline-flex items-center gap-3 max-md:mx-auto">
            <Link
              href="/docs/ui"
              className="">
              Getting Started
            </Link>
            <a
              href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-fd-background">
              Open Demo
            </a>
          </div>
         
        </div>
      );
}
