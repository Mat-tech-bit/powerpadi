'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap, LayoutDashboard, Briefcase, Calendar, MessageSquare, UserCircle, Menu, X, Bell, LogOut, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TechnicianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/technician' },
    { icon: Briefcase, label: 'Job Requests', href: '/technician/requests' },
    { icon: Calendar, label: 'Calendar', href: '/technician/calendar' },
    { icon: MessageSquare, label: 'Messages', href: '/technician/messages' },
    { icon: UserCircle, label: 'My Profile', href: '/technician/profile' },
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
                <span className="font-bold text-lg text-white leading-tight">PowerConnect</span>
                <span className="text-xs text-primary font-medium">Provider Portal</span>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 space-y-1 p-4 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/technician')
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

        {/* Bottom Actions */}
        <div className="p-4 border-t border-sidebar-border/50 space-y-1">
          <Link href="/technician/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-white hover:bg-sidebar-accent transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500/80 hover:text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
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
            <h2 className="hidden md:block text-lg font-bold">Good morning, Provider!</h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Emergency
              </div>
              
              <button className="relative p-2 text-muted-foreground hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
              </button>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="flex flex-col items-end hidden sm:block text-right">
                <span className="text-sm font-semibold text-white">PowerTech Solutions</span>
                <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Verified Pro</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=4" alt="Provider" className="w-full h-full object-cover" />
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
