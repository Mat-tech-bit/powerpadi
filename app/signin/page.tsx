'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

const signinSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
})

type SigninFormData = z.infer<typeof signinSchema>

export default function SigninPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors }, control } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: { rememberMe: false }
  })

  const onSubmit = async (data: SigninFormData) => {
    setIsLoading(true)
    setAuthError(null)
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Signin error:', error)
      setAuthError('Invalid email or password.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignin = async () => {
    setIsLoading(true)
    setAuthError(null)
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user

      // Check if user exists in Firestore, if not create a default record
      const userDocRef = doc(db, 'users', user.uid)
      const userDoc = await getDoc(userDocRef)
      
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          fullName: user.displayName || 'Google User',
          email: user.email,
          role: 'resident', // default
          createdAt: new Date().toISOString()
        })
      }

      router.push('/dashboard')
    } catch (error: any) {
      console.error('Google signin error:', error)
      setAuthError('Google sign-in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left Side - Sign In Form */}
      <div className="flex-1 flex flex-col lg:border-r lg:border-border">
        {/* Header */}
        <div className="border-b lg:border-b-0 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">PowerPadi</span>
            </Link>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to access real-time electricity intelligence.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {authError && (
                <div className="p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded-md">
                  {authError}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register('email')}
                  className="bg-input border-border"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register('password')}
                  className="bg-input border-border"
                />
                {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <Checkbox 
                        id="rememberMe" 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                      />
                    )}
                  />
                  <label htmlFor="rememberMe" className="text-sm text-muted-foreground">
                    Remember Me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={handleGoogleSignin} disabled={isLoading} type="button">
              Continue with Google
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline font-medium">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Dashboard Preview */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center bg-card border-l border-border px-8 py-12">
        <div className="max-w-md space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Active Connection</h2>
            <p className="text-muted-foreground">Victoria Island, Hub</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">STATUS</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <p className="text-lg font-semibold text-primary">Available</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">LIVE POWER MAP</p>
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">GRID POWER</p>
              <p className="text-lg font-semibold text-foreground">On</p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-border">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">AI PREDICTION</p>
            <p className="text-muted-foreground">Power is expected to remain available until 5:45 PM based on historical patterns.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
