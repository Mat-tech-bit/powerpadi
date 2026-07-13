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
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

const signupSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  role: z.enum(['resident', 'technician', 'vendor']),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<'resident' | 'technician' | 'vendor'>('resident')
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { role: 'resident', agreeToTerms: false },
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setAuthError(null)
    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user

      // 2. Save additional user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        fullName: data.fullName,
        email: data.email,
        role: data.role,
        createdAt: new Date().toISOString()
      })

      // 3. Redirect to dashboard
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Signup error:', error)
      setAuthError(error.message || 'Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    setAuthError(null)
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user

      // Save user to Firestore (use setDoc with merge: true so it doesn't overwrite if they already exist)
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        fullName: user.displayName || 'Google User',
        email: user.email,
        role: selectedRole, // Default or selected
        createdAt: new Date().toISOString()
      }, { merge: true })

      router.push('/dashboard')
    } catch (error: any) {
      console.error('Google signup error:', error)
      setAuthError(error.message || 'Google sign-in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRoleChange = (role: 'resident' | 'technician' | 'vendor') => {
    setSelectedRole(role)
    setValue('role', role)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">PowerPadi</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join PowerPadi and start managing your electricity smarter</p>
          </div>

          {/* Role Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">I am a:</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'resident' as const, label: 'Resident', desc: 'Monitor power' },
                { value: 'technician' as const, label: 'Technician', desc: 'Provide service' },
                { value: 'vendor' as const, label: 'Vendor', desc: 'Sell products' },
              ].map(role => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => handleRoleChange(role.value)}
                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                    selectedRole === role.value
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="font-medium text-sm text-foreground">{role.label}</div>
                  <div className="text-xs text-muted-foreground">{role.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {authError && (
              <div className="p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded-md">
                {authError}
              </div>
            )}
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">
                Full Name
              </label>
              <Input
                id="fullName"
                placeholder="Adekunle Adeyemi"
                {...register('fullName')}
                className="bg-input border-border"
              />
              {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName.message}</p>}
            </div>

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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register('confirmPassword')}
                className="bg-input border-border"
              />
              {errors.confirmPassword && <p className="text-xs text-destructive mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox 
                      id="terms" 
                      checked={field.value} 
                      onCheckedChange={field.onChange} 
                    />
                  )}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-xs text-destructive">{errors.agreeToTerms.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
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

          <Button variant="outline" className="w-full" onClick={handleGoogleSignup} disabled={isLoading} type="button">
            Continue with Google
          </Button>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/signin" className="text-primary hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
