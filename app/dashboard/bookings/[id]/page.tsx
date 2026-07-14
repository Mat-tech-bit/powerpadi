'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, MapPin, Clock, Calendar, ShieldCheck, Phone, MessageCircle, FileText, CheckCircle2, ChevronRight, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

const bookingData = {
  id: 'B-1029',
  provider: {
    name: 'Oluwaseun Adewale',
    specialty: 'Inverter & Solar Expert',
    avatar: 'https://i.pravatar.cc/150?u=1',
    rating: 4.9,
    phone: '+234 801 234 5678'
  },
  service: 'Inverter Servicing',
  date: 'Oct 24, 2024',
  time: '10:00 AM',
  status: 'In Progress', // Could be 'Requested', 'Accepted', 'En Route', 'Arrived', 'In Progress', 'Completed'
  location: '12 Admiralty Way, Lekki',
  price: '₦15,000',
  description: 'The inverter keeps beeping and shutting down. Error code 04 is showing on the display.',
  timeline: [
    { status: 'Requested', time: '09:00 AM', completed: true },
    { status: 'Accepted', time: '09:15 AM', completed: true },
    { status: 'En Route', time: '09:40 AM', completed: true },
    { status: 'Arrived', time: '10:05 AM', completed: true },
    { status: 'In Progress', time: '10:10 AM', completed: true, active: true },
    { status: 'Completed', time: '--', completed: false }
  ]
}

export default function JobTrackingPage() {
  const params = useParams()
  // ID is params.id

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto">
      <Link href="/dashboard/bookings" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Bookings
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Details</h1>
          <p className="text-muted-foreground mt-1">ID: {bookingData.id}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border">
            <FileText className="w-4 h-4 mr-2" /> View Invoice
          </Button>
          <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
            Confirm Completion
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tracking Map/Banner */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="h-48 bg-muted relative border-b border-border">
              <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lekki,Lagos&zoom=14&size=800x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.stroke|color:0x334e87&style=feature:landscape.natural|element:geometry|color:0x021019&style=feature:poi|element:geometry|color:0x283d6a&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:poi.park|element:geometry.fill|color:0x023e58&style=feature:poi.park|element:labels.text.fill|color:0x3C7680&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:road.highway|element:geometry|color:0x2c6675&style=feature:road.highway|element:geometry.stroke|color:0x255763&style=feature:road.highway|element:labels.text.fill|color:0xb0d5ce&style=feature:road.highway|element:labels.text.stroke|color:0x023e58&style=feature:transit|element:labels.text.fill|color:0x98a5be&style=feature:transit|element:labels.text.stroke|color:0x1d2c4d&style=feature:transit.line|element:geometry.fill|color:0x283d6a&style=feature:transit.station|element:geometry|color:0x3a4762&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70')] bg-cover bg-center mix-blend-screen" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/20 p-4 rounded-full animate-pulse border border-primary/50">
                  <Navigation className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Job Details</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service Type</p>
                  <p className="font-semibold text-foreground">{bookingData.service}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Estimated Cost</p>
                  <p className="font-semibold text-primary">{bookingData.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" /> {bookingData.date} at {bookingData.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" /> {bookingData.location}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Problem Description</p>
                <p className="text-foreground text-sm bg-background p-4 rounded-xl border border-border">
                  {bookingData.description}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">Real-Time Status Tracker</h2>
            <div className="relative pl-6 space-y-8">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border"></div>
              
              {bookingData.timeline.map((step, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[30px] w-4 h-4 rounded-full border-2 ${step.active ? 'bg-orange-500 border-orange-500 ring-4 ring-orange-500/20' : step.completed ? 'bg-primary border-primary' : 'bg-background border-muted-foreground'}`}></div>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold ${step.active ? 'text-orange-500' : step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.status}
                    </h3>
                    <span className="text-sm text-muted-foreground">{step.time}</span>
                  </div>
                  {step.active && (
                    <p className="text-sm text-muted-foreground mt-1 animate-pulse">The electrician is currently working on the issue.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm sticky top-6">
            <h3 className="font-bold text-foreground mb-4 uppercase text-sm tracking-wider">Your Provider</h3>
            
            <div className="flex flex-col items-center text-center">
              <img src={bookingData.provider.avatar} alt="Provider" className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg mb-4" />
              <h4 className="font-bold text-lg text-foreground flex items-center gap-1 justify-center">
                {bookingData.provider.name} <ShieldCheck className="w-4 h-4 text-green-500" />
              </h4>
              <p className="text-sm text-primary font-medium mb-2">{bookingData.provider.specialty}</p>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-6">
                <span className="text-white font-medium flex items-center"><Star className="w-4 h-4 fill-primary text-primary mr-1" /> {bookingData.provider.rating}</span>
                <span>• 342 jobs</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold gap-2">
                <MessageCircle className="w-4 h-4" /> Message
              </Button>
              <Button variant="outline" className="w-full border-border bg-transparent hover:bg-muted font-bold gap-2">
                <Phone className="w-4 h-4" /> Call Provider
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
