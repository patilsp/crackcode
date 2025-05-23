"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, X, Download, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Document, Page, pdfjs } from "react-pdf"

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export function PdfViewer({ book, onClose }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [isLoading, setIsLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= numPages ? newPageNumber : prevPageNumber
    })
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0))
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6))
  }

  return (
    <div className="flex flex-col h-full">
      <Card className="border-0 shadow-none">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl">{book.title}</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={zoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={zoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={book.pdfUrl} download={`${book.title}.pdf`}>
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            {isLoading && (
              <div className="flex h-96 w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            )}
            <Document
              file={book.pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex h-96 w-full items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              }
            >
              <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>

            {numPages && (
              <div className="mt-4 flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={previousPage} disabled={pageNumber <= 1}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <p className="text-sm">
                  Page {pageNumber} of {numPages}
                </p>
                <Button variant="outline" size="icon" onClick={nextPage} disabled={pageNumber >= numPages}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
