'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Home, Map, Users, Zap as ZapIcon, Bell, User, Settings, Menu, X, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Map, label: 'Live Map', href: '/dashboard/map' },
    { icon: Users, label: 'Community', href: '/dashboard/community' },
    { icon: ZapIcon, label: 'SolarBulk', href: '/dashboard/solarbulk' },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transition-transform lg:relative lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="border-b border-sidebar-border p-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-sidebar-primary" />
              <span className="font-bold text-sidebar-foreground">PowerPadi</span>
            </Link>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="relative">
              <input
                type="text"
                placeholder="Search communities or grid status..."
                className="w-full px-3 py-2 rounded bg-sidebar-accent text-sidebar-foreground placeholder-sidebar-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-sidebar-ring"
              />
            </div>
          </div>

          {/* Location */}
          <div className="px-4 py-3 border-b border-sidebar-border text-xs">
            <p className="text-sidebar-foreground/60">Active Connection</p>
            <p className="text-sidebar-foreground font-semibold mt-1">Victoria Island, Hub</p>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-sidebar-border p-4 space-y-2">
            <Link href="/dashboard/notifications">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Bell className="w-4 h-4" />
                <span>Notifications</span>
              </Button>
            </Link>
            <Link href="/dashboard/profile">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-2 text-destructive" onClick={handleSignOut}>
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b border-border bg-card sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex-1 flex items-center justify-between">
              <h2 className="text-sm font-medium text-muted-foreground">Dashboard</h2>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-muted rounded-lg">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
