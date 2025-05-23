"use client"

import { Book } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function BookList({ books, onBookClick }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.length === 0 ? (
        <div className="col-span-full flex h-40 items-center justify-center">
          <p className="text-muted-foreground">No books found. Try a different search term.</p>
        </div>
      ) : (
        books.map((book) => (
          <Card
            key={book.id}
            className="cursor-pointer transition-all hover:shadow-md"
            onClick={() => onBookClick(book)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Book className="h-5 w-5" />
                {book.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">By {book.author}</p>
            </CardContent>
            <CardFooter>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {book.category}
              </span>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}
