"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BookList } from "@/components/book-list"
import { PdfViewer } from "@/components/pdf-viewer"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const books = [
  { id: 1, title: "Introduction to React", author: "John Doe", category: "Programming", pdfUrl: "/sample.pdf" },
  { id: 2, title: "JavaScript Fundamentals", author: "Jane Smith", category: "Programming", pdfUrl: "/sample.pdf" },
  { id: 3, title: "CSS Mastery", author: "Bob Johnson", category: "Web Design", pdfUrl: "/sample.pdf" },
  { id: 4, title: "Node.js Basics", author: "Alice Brown", category: "Programming", pdfUrl: "/sample.pdf" },
  { id: 5, title: "UI/UX Design Principles", author: "Charlie Green", category: "Design", pdfUrl: "/sample.pdf" },
  { id: 6, title: "Database Management", author: "David White", category: "Data", pdfUrl: "/sample.pdf" },
  { id: 7, title: "Cloud Computing", author: "Eva Black", category: "Infrastructure", pdfUrl: "/sample.pdf" },
  { id: 8, title: "Machine Learning Intro", author: "Frank Gray", category: "AI", pdfUrl: "/sample.pdf" },
]

export function NotesDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleBookClick = (book) => {
    setSelectedBook(book)
  }

  const handleCloseViewer = () => {
    setSelectedBook(null)
  }

  return (
    <SidebarProvider>
      <div className="flex w-full h-screen bg-gradient-to-r from-slate-100 via-white to-slate-200 dark:from-[#0f0f0f] dark:to-[#1a1a1a] transition-colors duration-500">
        <Sidebar className="transition-transform duration-300">
          <SidebarHeader>
            <div className="p-0 mr-2">
              <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                height={80}
                width={110}
                className="object-contain mr-10 hover:scale-105 transition-transform duration-300"
              />
              </Link>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-muted-foreground text-sm px-4 py-1 uppercase tracking-wide">
                Categories
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu >
                  {["All Notes", "Programming", "Design", "Data", "AI"].map((category) => (
                    <SidebarMenuItem key={category}>
                      <SidebarMenuButton
                        className="hover:bg-primary/10 hover:text-purple-600 cursor-pointer rounded-md px-3 py-2 hover:scale-105 transition-transform duration-300"
                      >
                        {category}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-black/70 p-4 transition-colors">
            <div className="flex items-center space-x-2">
              <SidebarTrigger className="mr-2" />
              <h1 className="text-xl font-semibold text-primary">My Notes</h1>
            </div>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notes..."
                className="w-full pl-8 focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </header>

          <main className="p-4 animate-fade-in">
            {selectedBook ? (
              <PdfViewer book={selectedBook} onClose={handleCloseViewer} />
            ) : (
              <BookList books={filteredBooks} onBookClick={handleBookClick} />
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
