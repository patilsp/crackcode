"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useNavStore } from "@/store/navStore"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Settings, LogOut, Home, ChevronDown, UserCircle } from "lucide-react"

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [isMounted, setIsMounted] = useState(false)
  const { isDropdownOpen, setDropdownOpen, toggleDropdown, activeTab, setActiveTab } = useNavStore()

  useEffect(() => {
    setIsMounted(true)

    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }

    fetchProviders()
  }, [])

  // Prevent hydration errors
  if (!isMounted) return null

  const menuItems = [
    { label: "Dashboard", href: "/", icon: <Home className="mr-2 h-4 w-4" />, id: "dashboard" },
    { label: "My Profile", href: "/profile", icon: <User className="mr-2 h-4 w-4" />, id: "profile" },
    { label: "Settings", href: "/settings", icon: <Settings className="mr-2 h-4 w-4" />, id: "settings" },
  ]

  return (
    <nav className="absolute right-1 z-50">
      <div className="flex items-center gap-4">
        {session?.user ? (
          <DropdownMenu open={isDropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative p-0 overflow-hidden rounded-full border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                onClick={toggleDropdown}
              >
            
                <Image
                  src={session.user.image}
                  width={32}
                  height={32}
                  className="rounded-full border transition-all duration-300 hover:scale-105"
                  alt="profile"
                />
           
                <motion.div
                  className="absolute bottom-0 right-0 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                 
                  <Image
                  src={session.user.image}
                  width={40}
                  height={40}
                  className="rounded-full border"
                  alt="profile"
                />
                </motion.div>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl p-1"
              forceMount
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownMenuLabel className="flex items-center gap-3 p-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={session.user.image || "/placeholder.svg"} alt={session.user.name || "User"} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {session.user.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{session.user.name}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-[150px]">{session.user.email}</span>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator className="my-1" />

                  {menuItems.map((item, index) => (
                    <DropdownMenuItem
                      key={item.id}
                      asChild
                      className={`p-2 my-1 cursor-pointer transition-colors ${
                        activeTab === item.id ? "bg-primary/10 text-primary" : ""
                      }`}
                      onSelect={() => setActiveTab(item.id)}
                    >
                      <Link href={item.href} className="flex items-center">
                        <motion.div
                          initial={{ x: -5, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center w-full"
                        >
                          {item.icon}
                          {item.label}
                        </motion.div>
                      </Link>
                    </DropdownMenuItem>
                  ))}

                  <DropdownMenuSeparator className="my-1" />

                  <DropdownMenuItem
                    className="p-2 my-1 text-red-600 cursor-pointer hover:text-red-700 hover:bg-red-50 transition-colors"
                    onSelect={() => signOut()}
                  >
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center w-full"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </motion.div>
                  </DropdownMenuItem>
                </motion.div>
              </AnimatePresence>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <AnimatePresence>
            {providers &&
              Object.values(providers).map((provider) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => signIn(provider.id)}
                    variant="default"
                    className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white px-5 py-2 text-sm rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-black hover:scale-105 duration-300"
                  >
                    <UserCircle className="ml-1 h-4 w-4" />
                    Sign in
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: "-100%", opacity: 0.3 }}
                      whileHover={{ x: "100%", opacity: 0.2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              ))}
          </AnimatePresence>
        )}
      </div>
    </nav>
  )
}

export default Nav
