'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import Link from "next/link";

const PostsPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingPostId, setDeletingPostId] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Handle delete post
  const handleDelete = async (postId) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    setDeletingPostId(postId);
    try {
      const res = await fetch(`/api/posts?postId=${postId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete post");

      toast.success("Post deleted successfully");
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingPostId(null);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Posts</h1>

      {posts.length === 0 ? (
        <p className="text-center">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md flex flex-col"
            >
              <img
                src="/assets/images/image-1.png"
                alt={post.title || "Post image"}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <p className="text-sm text-gray-500">{post.tag}</p>
              </div>
              {session?.user?.id === post.creator ? (
                <div className="flex justify-end space-x-2 p-3 border-t">
                  <Link
                    href={`/posts/edit/${post._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    disabled={deletingPostId === post._id}
                    className="text-red-600 hover:underline disabled:opacity-50"
                  >
                    {deletingPostId === post._id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PostsPage;
