"use client"

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

// Sample book data
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
      <div className="flex w-full h-screen bg-white">
        <Sidebar>
          <SidebarHeader>
            <div className="p-2">
              <h2 className="text-xl font-bold">Notes Dashboard</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Categories</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>All Notes</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Programming</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Design</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Data</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>AI</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2">
              <p className="text-xs text-muted-foreground">© 2025 Notes</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-4">
            <div className="flex items-center">
              <SidebarTrigger className="mr-2" />
              <h1 className="text-xl font-semibold">My Notes</h1>
            </div>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notes..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </header>

          <main className="p-4">
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
