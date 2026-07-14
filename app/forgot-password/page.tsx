'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Zap, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { motion } from 'framer-motion'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setStatusMessage(null)
    
    try {
      await sendPasswordResetEmail(auth, email)
      setStatusMessage({
        type: 'success',
        text: 'Password reset email sent! Check your inbox to continue.'
      })
      setEmail('')
    } catch (error: any) {
      console.error('Password reset error:', error)
      setStatusMessage({
        type: 'error',
        text: error.message || 'Failed to send password reset email. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Header / Nav */}
      <div className="fixed top-0 inset-x-0 border-b border-border bg-background/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/signin" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Sign In</span>
          </Link>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card border border-border p-8 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Zap className="w-32 h-32" />
        </div>
        
        <div className="relative z-10 text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Reset Password</h1>
          <p className="text-muted-foreground text-sm">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          {statusMessage && (
            <div className={`p-3 text-sm rounded-md border ${statusMessage.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-destructive/10 border-destructive text-destructive'}`}>
              {statusMessage.text}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="bg-input border-border pl-10"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading || !email}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>

        <div className="mt-8 text-center relative z-10">
          <p className="text-sm text-muted-foreground">
            Remembered your password?{' '}
            <Link href="/signin" className="text-primary hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
