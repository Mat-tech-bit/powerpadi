'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Star, MapPin, ShieldCheck, CheckCircle2, Clock, Calendar as CalendarIcon, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

// Mock data
const electrician = {
  id: '1',
  name: 'Oluwaseun Adewale',
  specialty: 'Inverter & Solar Expert',
  rating: 4.9,
  reviews: 128,
  location: 'Victoria Island, Lagos',
  verified: true,
  avatar: 'https://i.pravatar.cc/150?u=1',
  about: 'I have over 8 years of experience installing and repairing inverters and solar systems across Lagos. My team ensures 100% safety compliance and we provide a 6-month warranty on all our installations.',
  skills: ['Solar Install', 'Inverter Repair', 'Battery Maintenance', 'Load Balancing', 'Smart Meter Setup'],
  hourlyRate: '₦15,000',
  completedJobs: 342,
  responseRate: '98%',
  services: [
    { name: 'Standard Consultation', price: '₦5,000', duration: '1 Hour' },
    { name: 'Inverter Repair/Servicing', price: '₦15,000/hr', duration: 'Variable' },
    { name: 'Solar Panel Installation', price: 'Contact for Quote', duration: '1-3 Days' }
  ]
}

export default function ElectricianProfilePage() {
  const router = useRouter()
  const params = useParams()
  // In a real app we'd fetch the electrician by params.id
  
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking logic
    alert('Booking request sent successfully!')
    router.push('/dashboard/bookings')
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto">
      <Link href="/dashboard/electricians" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to PowerConnect
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Profile Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <img src={electrician.avatar} alt={electrician.name} className="w-32 h-32 rounded-2xl object-cover border-4 border-background shadow-xl" />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                      {electrician.name}
                      {electrician.verified && <ShieldCheck className="w-6 h-6 text-green-500" />}
                    </h1>
                    <p className="text-lg text-primary font-medium">{electrician.specialty}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="font-bold text-foreground text-base">{electrician.rating}</span>
                    <span>({electrician.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {electrician.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {electrician.completedJobs} jobs completed
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">{electrician.about}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {electrician.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/50 text-secondary-foreground text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Services Offered</h3>
            <div className="space-y-4">
              {electrician.services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-border bg-background/50 hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="font-semibold text-foreground">{service.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xl sticky top-6">
            <h3 className="text-xl font-bold text-foreground mb-2">Book Appointment</h3>
            <p className="text-sm text-muted-foreground mb-6">Schedule a visit or consultation.</p>
            
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="date" 
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="pl-10 bg-background border-border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="time" 
                    required
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="pl-10 bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Issue Description</label>
                <textarea 
                  rows={3} 
                  required
                  placeholder="Describe the electrical issue..." 
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12 mt-4">
                Request Booking
              </Button>

              <Button type="button" variant="outline" className="w-full border-border bg-transparent hover:bg-muted font-semibold gap-2 h-12">
                <MessageCircle className="w-4 h-4" />
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Response Rate</span>
                <span className="font-bold text-green-500">{electrician.responseRate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
