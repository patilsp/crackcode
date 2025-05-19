'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useUserStore } from '@/store/userStore'

export default function InitUser() {
  const { data: session, status } = useSession()
  const setUser = useUserStore((state) => state.setUser)
  const clearUser = useUserStore((state) => state.clearUser)

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUser({
        id: session.user.id as string,
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || '',
      })
    } else if (status === 'unauthenticated') {
      clearUser()
    }
  }, [session, status, setUser, clearUser])

  return null
}
