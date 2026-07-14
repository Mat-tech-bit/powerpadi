'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap, LayoutDashboard, Users, ShieldCheck, FileText, Settings, LogOut, Menu, X, Bell } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: LayoutDashboard, label: 'Platform Analytics', href: '/admin' },
    { icon: ShieldCheck, label: 'Provider Approvals', href: '/admin/providers' },
    { icon: Users, label: 'User Management', href: '/admin/users' },
    { icon: FileText, label: 'Booking Logs', href: '/admin/bookings' },
  ]

  return (
    <div className="flex h-screen bg-[#0F1420] text-foreground font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0B0F19] border-r border-border transition-transform lg:relative lg:translate-x-0 flex flex-col justify-between ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-border">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-red-500 p-1.5 rounded text-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">PowerConnect</span>
                <span className="text-xs text-red-500 font-medium uppercase tracking-wider">Admin Portal</span>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 space-y-1 p-4 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative group ${
                    isActive ? 'text-red-500 bg-red-500/10' : 'text-muted-foreground hover:text-white hover:bg-[#1A1D24]'
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500 rounded-r-full" />}
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-red-500' : 'text-muted-foreground group-hover:text-white'}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-border space-y-1">
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-white hover:bg-[#1A1D24] transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Platform Settings</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-white hover:bg-[#1A1D24] transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 border-b border-border bg-[#0B0F19] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-white"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h2 className="hidden md:block text-lg font-bold">System Administration</h2>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-muted-foreground hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="flex flex-col items-end hidden sm:block text-right">
                <span className="text-sm font-semibold text-white">Super Admin</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-500 font-bold">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 bg-[#0F1420]">
          <div className="max-w-7xl mx-auto h-full">
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
