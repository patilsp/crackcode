"use client"

import { create } from "zustand"

// Define the User type
type User = {
  id: string
  name: string
  username: string
  email: string
  bio?: string
  location?: string
  website?: string
  occupation?: string
  joinedDate?: string
  followers?: number
  following?: number
  posts?: number
  avatarUrl?: string
}

// Define the store state
type UserState = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

// Create the store
export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))
