import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Link from 'next/link';

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
    type: 'icon',
    url: 'https://github.com/patilsp',
    text: 'Github',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    external: true,
  },
];

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        height={80}
        width={100}
        className="object-contain"
      />
    ),
  },
  links: [
    {
      type: 'menu',
      text: 'Languages',
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
          text: 'Docs Guide',
          description: 'Master the Crack The Code documentation platform.',
          url: '/docs/ui',
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
