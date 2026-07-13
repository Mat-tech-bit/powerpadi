'use client'

import { User } from 'lucide-react'
import { useAuth } from '@/components/AuthProvider'

export default function ProfilePage() {
  const { userData } = useAuth()

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">View and manage your personal information.</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{userData?.fullName || 'User'}</h2>
            <p className="text-muted-foreground capitalize">{userData?.role || 'Resident'}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Email Address</label>
            <p className="text-foreground font-medium">{userData?.email || 'No email provided'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Account Status</label>
            <p className="text-green-500 font-medium">Active</p>
          </div>
        </div>
      </div>
    </div>
  )
}
