'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Search, Plus, User, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const mockBookings = [
  {
    id: 'B-1029',
    provider: 'Oluwaseun Adewale',
    service: 'Inverter Servicing',
    date: 'Oct 24, 2024',
    time: '10:00 AM',
    status: 'Upcoming',
    location: '12 Admiralty Way, Lekki',
    price: '₦15,000'
  },
  {
    id: 'B-0941',
    provider: 'PowerTech Solutions',
    service: 'Commercial Wiring Assessment',
    date: 'Oct 15, 2024',
    time: '2:00 PM',
    status: 'Completed',
    location: '45 Broad St, Lagos Island',
    price: '₦25,000'
  },
  {
    id: 'B-0832',
    provider: 'Chinedu Eze',
    service: 'Generator Repair',
    date: 'Oct 02, 2024',
    time: '9:30 AM',
    status: 'Completed',
    location: 'Home Address',
    price: '₦12,500'
  }
]

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const filteredBookings = mockBookings.filter(b => 
    activeTab === 'upcoming' ? b.status === 'Upcoming' : b.status === 'Completed'
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
          <p className="text-muted-foreground mt-1">Manage your appointments with electricians and vendors.</p>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90 font-semibold gap-2">
          <Plus className="w-4 h-4" />
          New Booking
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        {/* Tabs and Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex bg-background border border-border rounded-lg p-1 w-full sm:w-auto">
            <button 
              className={`flex-1 sm:flex-none px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'upcoming' ? 'bg-primary text-black' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`flex-1 sm:flex-none px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'past' ? 'bg-primary text-black' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setActiveTab('past')}
            >
              Past Bookings
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search ID or provider..." 
              className="pl-9 bg-background border-border"
            />
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div key={booking.id} className="border border-border rounded-xl p-5 hover:border-primary/50 transition-colors bg-background/50 flex flex-col md:flex-row gap-6 md:items-center justify-between group">
                
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-foreground text-lg">{booking.service}</h3>
                      <Badge variant="outline" className={booking.status === 'Upcoming' ? 'text-blue-500 border-blue-500/30 bg-blue-500/10' : 'text-green-500 border-green-500/30 bg-green-500/10'}>
                        {booking.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-primary font-medium">{booking.provider}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {booking.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {booking.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {booking.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between gap-4 border-t md:border-t-0 border-border pt-4 md:pt-0">
                  <div className="text-lg font-bold text-foreground">{booking.price}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-border">
                      <FileText className="w-4 h-4 mr-2" /> Details
                    </Button>
                    {booking.status === 'Upcoming' && (
                      <Button variant="outline" size="sm" className="border-destructive/50 text-destructive hover:bg-destructive hover:text-white">
                        Reschedule
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-4 bg-background rounded-xl border border-dashed border-border">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-foreground mb-2">No {activeTab} bookings</h3>
              <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                You don't have any {activeTab} appointments scheduled at the moment.
              </p>
              <Button className="bg-primary text-black hover:bg-primary/90 font-semibold">
                Find an Electrician
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
