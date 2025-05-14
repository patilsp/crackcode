import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Link from 'next/link';

import {
  AlbumIcon,
  Book,
  Code,
  ComponentIcon,
  Heart,
  Layout,
  LayoutTemplate,
  Pencil,
  Server,
  FileCode2,
  Code2,
  FileJson,
  TerminalSquare,
  FileText,
} from 'lucide-react';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          height={80}
          width={100}
          className="object-contain"
        />
      </>
    ),
  },

  links: [
    {
      type: 'menu',
      text: 'Documentation',
      url: '/docs/ui',
      items: [
        {
          icon: <Book />,
          text: 'Getting Started',
          description: 'Learn to use Crack The Code docs site.',
          url: '/docs/ui',
        },
       
        {
          icon: <ComponentIcon />,
          text: 'Components',
          description: 'Add interactive experience to your docs.',
          url: '/docs/ui/components',
        
        },
        {
          icon: <Server />,
          text: 'OpenAPI',
          description:
            'Generate interactive playgrounds and docs for your OpenAPI schema.',
          url: '/docs/ui/openapi',
        
        },
        {
          icon: <Pencil />,
          text: 'Markdown',
          description: 'Learn the writing format/syntax of Fumadocs.',
          url: '/docs/ui/markdown',
          menu: {
            className: 'lg:col-start-3 lg:row-start-1',
          },
        },
        {
          icon: <Layout />,
          text: 'Layouts',
          description: 'See the available layouts of Fumadocs UI.',
          url: '/docs/ui/layouts/docs',
         
        },
      ],
    },
    {
      type: 'menu',
      text: 'Programming Languages',
      url: '/docs/languages',
      items: [
        {
          icon: <FileCode2 />,
          text: 'HTML',
          description: 'The structure of the web — learn semantic HTML.',
          url: '/docs/languages/html',
        },
        {
          icon: <FileText />,
          text: 'CSS',
          description: 'Style your web pages with modern CSS techniques.',
          url: '/docs/languages/css',
        },
        {
          icon: <Code2 />,
          text: 'JavaScript',
          description: 'Add interactivity to your web applications.',
          url: '/docs/languages/javascript',
        },
        {
          icon: <TerminalSquare />,
          text: 'React',
          description: 'Build fast and reactive UIs with React.js.',
          url: '/docs/languages/react',
       
        },
        {
          icon: <Code />,
          text: 'Next.js',
          description: 'The React framework for production-grade apps.',
          url: '/docs/languages/nextjs',
    
        },
        {
          icon: <Server />,
          text: 'Node.js',
          description: 'Run JavaScript on the server with Node.js.',
          url: '/docs/languages/nodejs',
          // menu: {
          //   className: 'lg:col-start-3',
          // },
        },
      ],
    },
  ],
};
