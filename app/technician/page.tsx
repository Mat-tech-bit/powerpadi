'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Wrench, Calendar, User, Phone, MapPin, Clock, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceTicket {
  id: string
  client: string
  service: string
  location: string
  scheduledDate: string
  status: 'pending' | 'assigned' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high'
  rating?: number
}

export default function TechnicianDashboard() {
  const [tickets, setTickets] = useState<ServiceTicket[]>([
    {
      id: 'TK001',
      client: 'Adekunle Adeyemi',
      service: 'Solar Panel Installation',
      location: 'Victoria Island',
      scheduledDate: 'Today, 2:30 PM',
      status: 'assigned',
      priority: 'high',
    },
    {
      id: 'TK002',
      client: 'Chioma Williams',
      service: 'Inverter Replacement',
      location: 'Ikoyi',
      scheduledDate: 'Tomorrow, 10:00 AM',
      status: 'pending',
      priority: 'medium',
    },
    {
      id: 'TK003',
      client: 'David Okafor',
      service: 'System Maintenance',
      location: 'Lekki',
      scheduledDate: 'Dec 25, 9:00 AM',
      status: 'pending',
      priority: 'low',
    },
    {
      id: 'TK004',
      client: 'Ayesha Malik',
      service: 'Battery Installation',
      location: 'VI',
      scheduledDate: 'Dec 22, 3:00 PM',
      status: 'completed',
      priority: 'medium',
      rating: 5,
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-600'
      case 'assigned':
        return 'bg-blue-500/20 text-blue-600'
      case 'completed':
        return 'bg-green-500/20 text-green-600'
      case 'cancelled':
        return 'bg-red-500/20 text-red-600'
      default:
        return 'bg-gray-500/20 text-gray-600'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case 'medium':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case 'low':
        return <AlertCircle className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Technician Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your service requests and projects</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Active Tickets</p>
            <p className="text-3xl font-bold text-primary">3</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Completed This Month</p>
            <p className="text-3xl font-bold text-secondary">12</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Average Rating</p>
            <p className="text-3xl font-bold text-accent">4.8/5</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Monthly Earnings</p>
            <p className="text-3xl font-bold text-foreground">₦245K</p>
          </div>
        </div>

        {/* Service Tickets */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Service Requests</h2>

          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-muted-foreground">{ticket.id}</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </span>
                      <div className="flex items-center gap-1">
                        {getPriorityIcon(ticket.priority)}
                        <span className="text-xs text-muted-foreground capitalize">{ticket.priority}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{ticket.service}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{ticket.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{ticket.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{ticket.scheduledDate}</span>
                    </div>
                    {ticket.status === 'completed' && ticket.rating && (
                      <div className="flex items-center gap-1">
                        {Array.from({ length: ticket.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  {ticket.status === 'pending' && (
                    <Button size="sm">Accept Job</Button>
                  )}
                  {ticket.status === 'assigned' && (
                    <>
                      <Button size="sm" variant="outline">Update Status</Button>
                      <Button size="sm">Start Navigation</Button>
                    </>
                  )}
                  {ticket.status === 'completed' && (
                    <Button size="sm" variant="outline" disabled>Completed</Button>
                  )}
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Profile Setup</h3>
            <p className="text-sm text-muted-foreground mb-4">Complete your technician profile to get more jobs</p>
            <Button variant="outline" className="w-full" size="sm">Edit Profile</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Certifications</h3>
            <p className="text-sm text-muted-foreground mb-4">Verify your skills and increase customer trust</p>
            <Button variant="outline" className="w-full" size="sm">Add Certificates</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Earnings</h3>
            <p className="text-sm text-muted-foreground mb-4">Track your income and withdrawals</p>
            <Button variant="outline" className="w-full" size="sm">View Earnings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
