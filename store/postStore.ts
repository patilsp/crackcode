import { create } from 'zustand';

const usePostStore = create((set) => ({
  post: {
    title: '',
    description: '',
    tag: '',
    imagePath: '',
  },
  setPost: (newPost) => set((state) => ({
    post: { ...state.post, ...newPost }
  })),
}));

export default usePostStore;
