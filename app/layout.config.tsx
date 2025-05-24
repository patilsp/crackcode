import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav'

import {
  BookOpen,
  GraduationCap,
  Code2,
  Braces,
  Server,
  Cpu,
  Library,
  FileText,
  MessagesSquare,
  Files,
  NotebookPen,
  Users,
  Rocket,
  TerminalSquare,
  Star,
} from 'lucide-react';

export const linkItems: LinkItemType[] = [
  {
    icon: <MessagesSquare />,
    text: 'Blog',
    url: '/blog',
    active: 'nested-url',
  },
  {
    icon: <NotebookPen />,
    text: 'Contact',
    url: '/contact',
    active: 'url',
  },
  {
    icon: <Star />,
    text: 'Premium',
    url: '/premium',
    active: 'url',
    className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-md px-2 py-1',
  },  

];

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center justify-between w-full">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          height={80}
          width={100}
          className="object-contain"
        />
        <Nav />
      </div>
    ),
  },
  links: [
    {
      type: 'menu',
      text: 'Programming',
      items: [
        {
          icon: <FileText />,
          text: 'HTML',
          description: 'Build structured and accessible content with HTML.',
          url: '/docs/html',
        },
        {
          icon: <FileText />,
          text: 'CSS',
          description: 'Style your sites using modern and responsive CSS.',
          url: '/docs/css',
        },
        {
          icon: <Braces />,
          text: 'JavaScript',
          description: 'Control browser logic and user interactions.',
          url: '/docs/javascript',
        },
        {
          icon: <Cpu />,
          text: 'React',
          description: 'Create fast, component-driven user interfaces.',
          url: '/docs/react',
        },
        {
          icon: <Server />,
          text: 'Next.js',
          description: 'Full-stack React framework for production apps.',
          url: '/docs/nextjs',
        },
        {
          icon: <TerminalSquare />,
          text: 'Node.js',
          description: 'Run JavaScript backend services with Node.js.',
          url: '/docs/nodejs',
        },
      ],
    },
    {
      type: 'menu',
      text: 'Resources',
      items: [
        {
          icon: <BookOpen />,
          text: 'Programming Notes',
          description: 'Master the Crack The Code documentation platform.',
          url: '/notes',
        },
        {
          icon: <Files />,
          text: 'Cheat Sheets',
          description: 'Quick-reference syntax and commands for developers.',
          url: '/docs/ui/cheatsheets',
        },
        {
          icon: <Code2 />,
          text: 'Problems',
          description: 'Solve coding challenges with detailed explanations.',
          url: '/docs/ui/problems',
        },
        {
          icon: <Library />,
          text: 'Assessments',
          description: 'Evaluate your learning with quizzes and tasks.',
          url: '/docs/ui/markdown',
        },
        {
          icon: <Users />,
          text: 'Community Discuss',
          description: 'Join the conversation with fellow developers.',
          url: '/docs/ui/layouts/docs',
        },
        {
          icon: <NotebookPen />,
          text: 'Interview Prep',
          description: 'Ace interviews with Q&A and sample problems.',
          url: '/docs/ui/interview',
        },
        {
          icon: <Rocket />,
          text: 'Roadmap',
          description: 'Track your learning journey step-by-step.',
          url: '/docs/ui/roadmap',
        },
      ],
    },
    ...linkItems,
  ],
};
