"use client"

import { create } from "zustand"

type NavState = {
  isDropdownOpen: boolean
  setDropdownOpen: (isOpen: boolean) => void
  toggleDropdown: () => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const useNavStore = create<NavState>((set) => ({
  isDropdownOpen: false,
  setDropdownOpen: (isOpen) => set({ isDropdownOpen: isOpen }),
  toggleDropdown: () => set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
  activeTab: "dashboard",
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
