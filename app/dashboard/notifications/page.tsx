'use client'

import { Bell } from 'lucide-react'

export default function NotificationsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
        <p className="text-muted-foreground">Manage your community and grid alerts.</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Bell className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No new notifications</h3>
        <p className="text-muted-foreground max-w-sm">
          You're all caught up! We'll notify you when there are updates about your grid or community.
        </p>
      </div>
    </div>
  )
}
