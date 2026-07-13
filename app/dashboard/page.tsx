'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/AuthProvider'
import { AlertCircle, MapPin, BarChart3, Clock, TrendingUp, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { userData } = useAuth()
  const firstName = userData?.fullName?.split(' ')[0] || 'User'
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Greeting */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Good Morning, {firstName}</h1>
        <p className="text-muted-foreground">Here&apos;s the latest electricity update for your community.</p>
      </div>

      {/* Current Status */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Status Card */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Victoria Island, Hub</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <p className="text-4xl font-bold text-primary">ON</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Current Status</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{currentDate}</p>
              <p className="text-lg font-semibold text-foreground">{currentTime}</p>
            </div>
          </div>

          <p className="text-foreground mb-4">Your grid is performing at peak capacity with no reported faults.</p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/dashboard/map">
              <Button variant="outline">Open Live Map</Button>
            </Link>
            <Button>Report Power</Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Grid Reliability</p>
            <p className="text-3xl font-bold text-primary mb-2">94%</p>
            <p className="text-xs text-muted-foreground">Based on 24hr average</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Community Status</p>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-lg font-semibold text-foreground">All Good</p>
            </div>
            <p className="text-xs text-muted-foreground">18 reports in area</p>
          </div>
        </div>
      </div>

      {/* AI Prediction */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">AI PREDICTION</h3>
            <p className="text-foreground mb-4">Power is expected to remain available until <span className="font-semibold text-primary">5:45 PM</span>. Based on historical grid patterns and current hub stability.</p>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <p className="text-muted-foreground">Confidence Level</p>
                <p className="text-2xl font-bold text-foreground">89%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Community Reports</p>
                <p className="text-2xl font-bold text-foreground">18</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Updated</p>
                <p className="text-sm font-medium text-foreground">2 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
          <AlertCircle className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-semibold text-foreground mb-2">Report Power</h3>
          <p className="text-sm text-muted-foreground mb-4">Instantly notify neighbors of any outages or issues</p>
          <Button variant="outline" size="sm" className="w-full">Report Now</Button>
        </div>

        <Link href="/dashboard/map" className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
          <MapPin className="w-8 h-8 text-accent mb-4" />
          <h3 className="font-semibold text-foreground mb-2">Open Live Map</h3>
          <p className="text-sm text-muted-foreground mb-4">Real-time status view of electricity availability</p>
          <Button variant="outline" size="sm" className="w-full">View Map</Button>
        </Link>

        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
          <Users2 className="w-8 h-8 text-secondary mb-4" />
          <h3 className="font-semibold text-foreground mb-2">My Community</h3>
          <p className="text-sm text-muted-foreground mb-4">Manage Mayfair Estate and community updates</p>
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </div>
      </div>

      {/* Daily Power Timeline */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h3 className="text-lg font-semibold text-foreground mb-6">Daily Power Timeline</h3>
        <div className="space-y-4">
          <div className="text-sm font-medium text-muted-foreground mb-4">TODAY</div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>7:00 AM</span>
            </div>
            <div className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-medium">ON</div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>10:15 AM</span>
            </div>
            <div className="px-3 py-1 rounded bg-destructive/20 text-destructive text-xs font-medium">OFF</div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>12:40 PM</span>
            </div>
            <div className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-medium">ON</div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>5:45 PM</span>
            </div>
            <div className="px-3 py-1 rounded bg-amber-500/20 text-amber-600 text-xs font-medium">EXP. OFF</div>
          </div>
        </div>
      </div>

      {/* SolarBulk Promo */}
      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-lg p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">SolarBulk</h3>
            <p className="text-muted-foreground mb-4">Join group purchase options for affordable solar solutions</p>
            <Link href="/dashboard/solarbulk">
              <Button>View SolarBulk</Button>
            </Link>
          </div>
          <Zap className="w-12 h-12 text-accent/50 hidden sm:block" />
        </div>
      </div>
    </div>
  )
}

function Users2(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}
