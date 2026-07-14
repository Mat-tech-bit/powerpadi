'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap, LayoutGrid, Map, Users, AlertTriangle, Sun, Bell, UserCircle, Menu, X, MapPin, Settings, HelpCircle, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/AuthProvider'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { userData } = useAuth()

  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '/dashboard' },
    { icon: Map, label: 'Live Power Map', href: '/dashboard/map' },
    { icon: Users, label: 'Communities', href: '/dashboard/community' },
    { icon: AlertTriangle, label: 'Report Power', href: '/dashboard/report' },
    { icon: Sun, label: 'SolarBulk', href: '/dashboard/solarbulk' },
    { icon: Bell, label: 'Notifications', href: '/dashboard/notifications' },
    { icon: UserCircle, label: 'Profile', href: '/dashboard/profile' },
  ]

  return (
    <div className="flex h-screen bg-background text-foreground font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transition-transform lg:relative lg:translate-x-0 flex flex-col justify-between ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-sidebar-border/50">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded text-black">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">PowerPadi</span>
                <span className="text-xs text-muted-foreground">Electricity Intelligence</span>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 space-y-1 p-4 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative group ${
                    isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-white hover:bg-sidebar-accent'
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />}
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-white'}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Upgrade Plan Button */}
        <div className="p-6">
          <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold h-12 text-md shadow-[0_0_15px_rgba(229,195,135,0.2)]">
            <Zap className="w-4 h-4 mr-2" />
            Upgrade Plan
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 border-b border-border bg-background flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-white"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="relative w-full max-w-xl hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search communities or cities..." 
                className="w-full bg-[#1A1D24] border border-[#2B303B] rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 text-muted-foreground">
              <button className="hover:text-white transition-colors"><MapPin className="w-5 h-5" /></button>
              <button className="hover:text-white transition-colors"><Settings className="w-5 h-5" /></button>
              <button className="hover:text-white transition-colors"><HelpCircle className="w-5 h-5" /></button>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="flex flex-col items-end hidden sm:block text-right">
                <span className="text-sm font-semibold text-white">{userData?.fullName || 'User'}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">PRO PLAN</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center overflow-hidden">
                <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-background p-6">
          <div className="max-w-[1400px] mx-auto h-full">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
