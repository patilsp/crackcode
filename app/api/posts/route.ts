import Post from "@/models/post";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();
    const posts = await Post.find({}).populate('creator'); 
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const { userId, title, description, tag, imagePath } = await request.json();

    await connectToDB();

    const newPost = new Post({
      creator: userId,
      title,
      description,
      tag,
      imagePath,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    const { postId, title, description, tag, imagePath } = await request.json();

    await connectToDB();

    const postToUpdate = await Post.findById(postId);

    if (!postToUpdate) {
      return new Response("Post not found", { status: 404 });
    }

    postToUpdate.title = title ?? postToUpdate.title;
    postToUpdate.description = description ?? postToUpdate.description;
    postToUpdate.tag = tag ?? postToUpdate.tag;
    postToUpdate.imagePath = imagePath ?? postToUpdate.imagePath;

    await postToUpdate.save();

    return new Response(JSON.stringify(postToUpdate), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to update the post", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return new Response("Post ID is required", { status: 400 });
    }

    await connectToDB();

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return new Response("Post not found", { status: 404 });
    }

    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the post", { status: 500 });
  }
};
