'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import Form from "@/components/post-form";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tag: "",
    imagePath: "",
  });

  const createPost = async (e) => {
    e.preventDefault();
    if (!session?.user?.id) {
      toast.error("You must be logged in to create a post.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          title: "title",
          description: "description",
          tag: "tag",
          imagePath: "imagePath",
        }),
      });
      
      if (response.ok) {
        toast.success("Post created successfully!");
        router.push("/posts");
      } else {
        const errorData = await response.json(); // ❌ this line fails
        throw new Error(errorData.message || "Failed to create post");
      }
      

    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
