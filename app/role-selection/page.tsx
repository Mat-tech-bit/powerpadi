'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Zap, Home, Briefcase, Wrench, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import { motion } from 'framer-motion'
import { onAuthStateChanged } from 'firebase/auth'

export default function RoleSelectionPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<'resident' | 'business' | 'technician' | 'vendor' | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [userUid, setUserUid] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid)
        // Check if role is already assigned properly
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        if (userDoc.exists() && userDoc.data().role && userDoc.data().role !== 'unassigned') {
          router.push('/dashboard')
        }
      } else {
        router.push('/signin')
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleContinue = async () => {
    if (!selectedRole || !userUid) return

    setIsLoading(true)
    try {
      await updateDoc(doc(db, 'users', userUid), {
        role: selectedRole
      })
      
      // Route based on selected role
      if (selectedRole === 'technician') {
        router.push('/technician')
      } else if (selectedRole === 'vendor') {
        router.push('/vendor')
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error updating role:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const roles = [
    {
      id: 'resident',
      title: 'Resident',
      description: 'Monitor neighborhood power, get AI predictions, and join community solar.',
      icon: <Home className="w-6 h-6 text-primary" />
    },
    {
      id: 'business',
      title: 'Business Owner',
      description: 'Track fuel costs, generator analytics, and optimize operational uptime.',
      icon: <Briefcase className="w-6 h-6 text-primary" />
    },
    {
      id: 'technician',
      title: 'Electrician',
      description: 'Find jobs, manage appointments, and grow your professional services.',
      icon: <Wrench className="w-6 h-6 text-primary" />
    },
    {
      id: 'vendor',
      title: 'Solar Company',
      description: 'List products, manage community bulk orders, and provide consultations.',
      icon: <Sun className="w-6 h-6 text-primary" />
    }
  ] as const

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How will you use PowerPadi?</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose your account type. This helps us customize your dashboard and features to suit your specific energy needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                selectedRole === role.id 
                ? 'border-primary bg-primary/5 shadow-[0_0_30px_rgba(229,195,135,0.1)]' 
                : 'border-[#1F2937] bg-[#161B22] hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  selectedRole === role.id ? 'bg-primary/20' : 'bg-[#1A1D24]'
                }`}>
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedRole || isLoading}
            className="h-14 px-12 text-lg rounded-xl bg-primary text-black hover:bg-primary/90 font-bold"
          >
            {isLoading ? 'Setting up...' : 'Continue to Dashboard'}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
