'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { onAuthStateChanged, User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

interface AuthContextType {
  user: User | null;
  userData: any | null;
}

const AuthContext = createContext<AuthContextType>({ user: null, userData: null })

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      
      if (currentUser) {
        // Fetch extra user data from Firestore
        try {
          const docRef = doc(db, 'users', currentUser.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            setUserData(docSnap.data())
          } else {
            // Fallback if no firestore doc exists
            setUserData({ fullName: currentUser.displayName || 'User' })
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
          setUserData({ fullName: currentUser.displayName || 'User' })
        }
      } else {
        setUserData(null)
      }
      
      setLoading(false)

      const isAuthRoute = pathname === '/signin' || pathname === '/signup'
      const isProtectedRoute = pathname.startsWith('/dashboard')

      if (currentUser && isAuthRoute) {
        router.push('/dashboard')
      } else if (!currentUser && isProtectedRoute) {
        router.push('/signin')
      }
    })

    return () => unsubscribe()
  }, [pathname, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, userData }}>
      {children}
    </AuthContext.Provider>
  )
}
