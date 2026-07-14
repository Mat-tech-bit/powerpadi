'use client'

import { DollarSign, Star, Briefcase, Clock, TrendingUp, Calendar as CalendarIcon, CheckCircle2, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TechnicianOverview() {
  const stats = [
    { label: 'Monthly Earnings', value: '₦450,000', trend: '+12%', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Completed Jobs', value: '342', trend: '+8', icon: CheckCircle2, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Average Rating', value: '4.9', trend: 'Top 5%', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Response Time', value: '14 mins', trend: '-2 mins', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ]

  const todaySchedule = [
    { id: '1', time: '10:00 AM', customer: 'Kenneth O.', service: 'Inverter Servicing', location: '12 Admiralty Way', status: 'Next' },
    { id: '2', time: '02:00 PM', customer: 'Sarah A.', service: 'Solar Panel Inspection', location: '24 Broad St', status: 'Upcoming' },
  ]

  const recentRequests = [
    { id: 'Req-112', customer: 'Tunde M.', service: 'Emergency Fault Repair', time: '10 mins ago', urgent: true },
    { id: 'Req-113', customer: 'Chioma B.', service: 'House Wiring Assessment', time: '1 hr ago', urgent: false },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Here is what is happening with your business today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border">Download Report</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-card border-border hover:border-primary/30 transition-colors">
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
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" /> Today's Schedule
              </h2>
              <Link href="/technician/calendar" className="text-sm text-primary hover:underline font-medium">View Full Calendar</Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {todaySchedule.map((job) => (
                  <div key={job.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-border bg-background/50 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`px-3 py-1.5 rounded-lg text-sm font-bold text-center min-w-[90px] ${job.status === 'Next' ? 'bg-primary text-black' : 'bg-muted text-foreground'}`}>
                        {job.time}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{job.service}</h4>
                        <p className="text-sm text-muted-foreground">For {job.customer} • {job.location}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0 border-border bg-background hover:bg-muted">
                      Start Job
                    </Button>
                  </div>
                ))}
                {todaySchedule.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No jobs scheduled for today.</p>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Performance Chart Placeholder */}
          <Card className="bg-card border-border h-[300px] flex items-center justify-center p-6">
             <div className="text-center">
               <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
               <h3 className="font-bold text-foreground mb-2">Revenue Analytics Chart</h3>
               <p className="text-sm text-muted-foreground">Your detailed performance metrics will appear here.</p>
             </div>
          </Card>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Incoming Requests */}
          <Card className="bg-card border-border">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-bold text-foreground">New Requests <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full ml-1">2</span></h2>
            </div>
            <div className="p-0">
              <div className="divide-y divide-border">
                {recentRequests.map((req) => (
                  <div key={req.id} className="p-4 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">{req.time}</span>
                      {req.urgent && <span className="text-[10px] uppercase tracking-wider font-bold text-white bg-red-500 px-1.5 py-0.5 rounded">Urgent</span>}
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{req.service}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{req.customer}</p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary text-black hover:bg-primary/90 h-8 text-xs font-bold shadow-[0_0_10px_rgba(229,195,135,0.3)]">Accept</Button>
                      <Button variant="outline" className="flex-1 h-8 text-xs border-border bg-transparent">Decline</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/technician/requests" className="block text-center text-sm font-medium text-primary hover:text-white p-4 border-t border-border transition-colors">
                View All Requests
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
