'use client'

import { useState } from 'react'
import { CheckCircle2, Clock, MapPin, Search, Calendar, ChevronRight, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const mockRequests = [
  { id: 'Req-112', customer: 'Tunde M.', service: 'Emergency Fault Repair', location: 'Ikeja, Lagos', date: 'Today', time: '10:00 AM', status: 'Pending', urgent: true, price: '₦12,500' },
  { id: 'Req-113', customer: 'Chioma B.', service: 'House Wiring Assessment', location: 'Lekki Phase 1', date: 'Tomorrow', time: '02:00 PM', status: 'Pending', urgent: false, price: '₦5,000' },
  { id: 'Job-105', customer: 'Kenneth O.', service: 'Inverter Servicing', location: '12 Admiralty Way', date: 'Today', time: '04:00 PM', status: 'Accepted', urgent: false, price: '₦15,000' },
  { id: 'Job-092', customer: 'Sarah A.', service: 'Solar Panel Inspection', location: '24 Broad St', date: 'Yesterday', time: '11:00 AM', status: 'Completed', urgent: false, price: '₦20,000' }
]

export default function TechnicianRequestsPage() {
  const [activeTab, setActiveTab] = useState<'Pending' | 'Accepted' | 'Completed'>('Pending')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = mockRequests.filter(req => req.status === activeTab && (req.customer.toLowerCase().includes(searchQuery.toLowerCase()) || req.service.toLowerCase().includes(searchQuery.toLowerCase())))

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Requests</h1>
          <p className="text-muted-foreground mt-1">Manage your incoming leads and current jobs.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex bg-background border border-border rounded-lg p-1 w-full md:w-auto overflow-x-auto">
            {['Pending', 'Accepted', 'Completed'].map(tab => (
              <button 
                key={tab}
                className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-primary text-black' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by customer or service..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background border-border"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filtered.length > 0 ? (
            filtered.map((req) => (
              <div key={req.id} className={`border rounded-xl p-5 hover:border-primary/50 transition-colors bg-background/50 flex flex-col md:flex-row gap-6 md:items-center justify-between group ${req.urgent && activeTab === 'Pending' ? 'border-red-500/50 bg-red-500/5' : 'border-border'}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-foreground text-lg">{req.service}</h3>
                    {req.urgent && activeTab === 'Pending' && <Badge variant="destructive" className="bg-red-500 hover:bg-red-600 animate-pulse">Urgent</Badge>}
                  </div>
                  <p className="text-sm text-foreground font-medium mb-3">{req.customer}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {req.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {req.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {req.time}</span>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between gap-4 border-t md:border-t-0 border-border pt-4 md:pt-0">
                  <div className="text-lg font-bold text-primary">{req.price}</div>
                  <div className="flex gap-2">
                    {activeTab === 'Pending' && (
                      <>
                        <Button variant="outline" size="sm" className="border-border hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50"><XCircle className="w-4 h-4 mr-1" /> Decline</Button>
                        <Button size="sm" className="bg-primary text-black hover:bg-primary/90 font-bold"><CheckCircle2 className="w-4 h-4 mr-1" /> Accept</Button>
                      </>
                    )}
                    {activeTab === 'Accepted' && (
                      <Button size="sm" className="bg-primary text-black hover:bg-primary/90 font-bold">Update Status <ChevronRight className="w-4 h-4 ml-1" /></Button>
                    )}
                    {activeTab === 'Completed' && (
                      <Button variant="outline" size="sm" className="border-border text-muted-foreground">View Details</Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-background rounded-xl border border-dashed border-border">
              <p>No {activeTab.toLowerCase()} requests found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
