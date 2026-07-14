'use client'

import { useState } from 'react'
import { Calendar as CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TechnicianCalendarPage() {
  const [currentWeek, setCurrentWeek] = useState('Oct 21 - Oct 27, 2024')

  const schedule = [
    { day: 'Mon', date: '21', jobs: [] },
    { day: 'Tue', date: '22', jobs: [{ id: 1, time: '10:00 AM', title: 'Solar Inspection', customer: 'Sarah A.', duration: '2h' }] },
    { day: 'Wed', date: '23', jobs: [{ id: 2, time: '02:00 PM', title: 'Wiring Check', customer: 'Kenneth O.', duration: '1h' }] },
    { day: 'Thu', date: '24', jobs: [{ id: 3, time: '09:00 AM', title: 'Generator Repair', customer: 'Tunde M.', duration: '3h' }, { id: 4, time: '03:00 PM', title: 'Meter Setup', customer: 'Fatima', duration: '2h' }] },
    { day: 'Fri', date: '25', jobs: [] },
    { day: 'Sat', date: '26', jobs: [{ id: 5, time: '11:00 AM', title: 'Fault Tracing', customer: 'Chioma B.', duration: '4h' }] },
    { day: 'Sun', date: '27', jobs: [] },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendar & Availability</h1>
          <p className="text-muted-foreground mt-1">Manage your schedule and set your working hours.</p>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90 font-bold gap-2">
          <Plus className="w-4 h-4" /> Block Time Off
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" /> {currentWeek}
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-border hover:bg-muted"><ChevronLeft className="w-4 h-4" /></Button>
            <Button variant="outline" size="icon" className="border-border hover:bg-muted"><ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {schedule.map((day, i) => (
            <div key={i} className="flex flex-col h-[500px] border border-border rounded-lg bg-background/50 overflow-hidden">
              <div className={`p-3 text-center border-b border-border ${day.date === '24' ? 'bg-primary/10 border-b-primary/30 text-primary' : 'bg-muted/30 text-foreground'}`}>
                <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{day.day}</p>
                <p className="text-2xl font-black">{day.date}</p>
              </div>
              <div className="flex-1 p-2 space-y-2 overflow-y-auto">
                {day.jobs.map(job => (
                  <div key={job.id} className="bg-card border border-border rounded p-2 text-xs hover:border-primary/50 transition-colors cursor-pointer shadow-sm group">
                    <p className="font-bold text-foreground truncate group-hover:text-primary transition-colors">{job.title}</p>
                    <p className="text-muted-foreground truncate my-1">{job.customer}</p>
                    <div className="flex items-center gap-1 text-muted-foreground/80 mt-2">
                      <Clock className="w-3 h-3" /> {job.time} ({job.duration})
                    </div>
                  </div>
                ))}
                {day.jobs.length === 0 && (
                  <div className="h-full w-full flex items-center justify-center">
                    <p className="text-xs font-medium text-muted-foreground opacity-30 text-center px-2">No bookings</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Default Working Hours</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
            <div key={d} className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border ${d !== 'Sunday' ? 'bg-primary border-primary flex items-center justify-center' : 'border-border'}`}>
                  {d !== 'Sunday' && <Check className="w-3 h-3 text-black" />}
                </div>
                <span className="font-medium text-foreground">{d}</span>
              </div>
              <span className="text-sm text-muted-foreground">{d !== 'Sunday' ? '08:00 AM - 06:00 PM' : 'Off'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
