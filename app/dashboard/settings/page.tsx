'use client'

import { Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and configurations.</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Settings className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Settings Coming Soon</h3>
        <p className="text-muted-foreground max-w-sm">
          We are working hard to bring you extensive configuration options for your PowerPadi experience.
        </p>
      </div>
    </div>
  )
}
