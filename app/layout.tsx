import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import SessionProvider from "@/components/Provider";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: "Crack The Code | Programming Interview Preparation",
  description:
    "Master web development with Crack The Code – your ultimate resources for programming languages, coding challenges, and interview questions. Learn, practice, and crack your next tech interview!",
  icons: {
    icon: "/assets/images/logo1.png",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
       <SessionProvider>
          <body className="flex flex-col min-h-screen">       
              <RootProvider>{children}</RootProvider>       
          </body>
        </SessionProvider>
    </html>
  );
}
