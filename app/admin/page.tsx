'use client'

import { Users, Briefcase, DollarSign, Activity, TrendingUp, AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AdminAnalyticsPage() {
  const stats = [
    { label: 'Total Revenue (GMV)', value: '₦4.5M', trend: '+24%', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Active Providers', value: '156', trend: '+12', icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Total Users', value: '12,400', trend: '+800', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Jobs Completed', value: '3,420', trend: '+14%', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ]

  const recentAlerts = [
    { id: 1, type: 'Complaint', message: 'User reported provider for no-show.', time: '10 mins ago', severity: 'high' },
    { id: 2, type: 'System', message: 'Surge in emergency requests in Ikeja.', time: '1 hr ago', severity: 'medium' },
    { id: 3, type: 'Verification', message: '5 new provider accounts pending approval.', time: '2 hrs ago', severity: 'low' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Platform Analytics</h1>
          <p className="text-muted-foreground mt-1">High-level overview of PowerConnect performance.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-red-500 text-white hover:bg-red-600 font-bold">Export CSV</Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-card border-border hover:border-red-500/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">{stat.trend}</span>
                <span className="text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border p-6 h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Booking Volume Chart Data</p>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Action Required
            </h3>
            <div className="space-y-4">
              {recentAlerts.map(alert => (
                <div key={alert.id} className="p-3 rounded-lg border border-border bg-background/50">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${alert.severity === 'high' ? 'bg-red-500/10 text-red-500' : alert.severity === 'medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-blue-500/10 text-blue-500'}`}>
                      {alert.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{alert.message}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
