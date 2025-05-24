// store/postStore.ts
import { create } from 'zustand';

type Creator = {
  _id: string;
  username: string;
  email: string;
};

type Post = {
  _id?: string;
  title: string;
  description: string;
  tag: string;
  imagePath: string;
  creator?: Creator;
};

type PostState = {
  post: Post;
  posts: Post[];
  setPost: (newPost: Partial<Post>) => void;
  fetchPosts: () => Promise<void>;
};

const usePostStore = create<PostState>((set) => ({
  post: {
    title: '',
    description: '',
    tag: '',
    imagePath: '',
  },
  posts: [],
  setPost: (newPost) =>
    set((state) => ({
      post: { ...state.post, ...newPost },
    })),
  fetchPosts: async () => {
    try {
      const res = await fetch('/api/post');
      const data = await res.json();
      set({ posts: data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
}));

export default usePostStore;
