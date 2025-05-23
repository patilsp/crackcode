'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Upload from "@/components/UploadDnD"

const Form = ({ type, post, setPost, submitting, handleSubmit, imagePath, fileUrl }) => {
  return (
    <section className='w-full max-w-full flex-center px-2 flex-col mb-5'>
        <div className="container mx-auto py-10">
          <Card className="w-full max-w-2xl mx-auto">
           
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {type} Post
                </span>
              </CardTitle>
              <CardDescription className="text-center text-sm text-muted-foreground">
                {type} and share coding challenges, interview prep questions, or dev insights with the Crack the Code community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                  <Label htmlFor="post-description">Post Title</Label>
                  <Textarea
                    id="title"
                    placeholder="Write your post title here"
                    value={post.title || ''}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="post-description">Post Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Write your post here"
                    value={post.description || ''}
                    onChange={(e) => setPost({ ...post, description: e.target.value })}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={post.category || ''}
                    onChange={(e) => setPost({ ...post, category: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-input bg-background text-sm rounded-md"
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="algorithms">Algorithms</option>
                    <option value="data-structures">Data Structures</option>
                    <option value="system-design">System Design</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="devops">DevOps</option>
                    <option value="career-tips">Career Tips</option>
                    <option value="interview-prep">Interview Prep</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Image Upload</Label>
                  <Upload
                    onImageUpload={(fileUrl) => setPost({ ...post, imagePath: fileUrl })}
                  />
                </div>
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
              </form>
            </CardContent>
            <CardFooter className="flex justify-end border-t py-2">
              <Link href="/">
                <Button variant="outline" className="text-white w-20 hover:text-white mr-2 bg-red-400 hover:bg-red-600">Cancel</Button>
              </Link>
              <Button onClick={handleSubmit} disabled={submitting}>
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
          </Card>
        </div>
    </section>
  );
};

export default Form;
