'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

import usePostStore from '@/store/postStore'
import { toast } from "sonner"
import Upload from '@/lib/Upload';

const PostForm = ({ type, submitting, handleSubmit }) => {
  const { post, setPost } = usePostStore()

  return (
    <section className='w-full max-w-full flex-center px-2 flex-col mb-5'>
      <div className="container mx-auto py-10">
        <Card className="glassmorphism w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {type} Post
              </span>
            </CardTitle>
            <CardDescription className="text-center">
              {type} and share amazing tools with the world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Post Title</Label>
                <Input
                  id="title"
                  placeholder="Enter title"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />

              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Post Description</Label>
                <Textarea
                  id="description"
                  placeholder="Write your post here"
                  value={post.description || ''}
                  onChange={(e) => setPost({ ...post, description: e.target.value })}
                  required
                  className="min-h-[100px]"
                />
              </div>

              {/* Tag */}
              <div className="space-y-2">
                <Label htmlFor="tag">Post Tags</Label>
                <Input
                  id="tag"
                  placeholder="#Tag"
                  value={post.tag || ''}
                  onChange={(e) => setPost({ ...post, tag: e.target.value })}
                  required
                />
              </div>

              {/* Upload */}
              {/* <div className="space-y-2">
                <Label htmlFor="upload">Image Upload</Label>
                <Upload
                  onImageUpload={(fileUrl) =>
                    setPost((prev) => ({ ...prev, imagePath: fileUrl }))
                  }
                />
                {post.imagePath && (
                  <img
                    src={post.imagePath}
                    alt="Uploaded Preview"
                    className="mt-2 w-40 h-40 object-cover rounded border"
                  />
                )}
              </div> */}

              {/* Image Path */}
              <div className="space-y-2">
                <Label htmlFor="imagePath">Image Path</Label>
                <Input
                  id="imagePath"
                  placeholder="Image Path"
                  value={post.imagePath || ''}
                  onChange={(e) => setPost({ ...post, imagePath: e.target.value })}
                  required
                />
              </div>

              <CardFooter className="flex justify-end border-t py-2">
                <Link href="/">
                  <Button variant="outline" className="text-white w-20 hover:text-white mr-2 bg-red-400 hover:bg-red-600">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {`${type}ing...`}
                    </>
                  ) : (
                    type
                  )}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default PostForm;
