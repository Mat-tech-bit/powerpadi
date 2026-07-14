'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Star, MapPin, ShieldCheck, CheckCircle2, Clock, Calendar as CalendarIcon, MessageCircle, FileText, Image as ImageIcon, ThumbsUp } from 'lucide-react'
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
  languages: ['English', 'Yoruba', 'Pidgin'],
  licenses: ['NEMSA Certified Installer', 'Lagos State Electrical Contractor'],
  portfolio: [
    'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1611365892597-0996b59cea26?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1592833159057-6101c70e2815?auto=format&fit=crop&w=400&q=80'
  ],
  services: [
    { name: 'Standard Consultation', price: '₦5,000', duration: '1 Hour' },
    { name: 'Inverter Repair/Servicing', price: '₦15,000/hr', duration: 'Variable' },
    { name: 'Solar Panel Installation', price: 'Contact for Quote', duration: '1-3 Days' }
  ],
  reviewList: [
    { name: 'Ken O.', rating: 5, date: '2 days ago', comment: 'Very professional. Fixed my inverter fast.' },
    { name: 'Sarah A.', rating: 5, date: '1 week ago', comment: 'Installed a new 5KVA solar system. Flawless work and clean wiring.' },
    { name: 'Tunde M.', rating: 4, date: '2 weeks ago', comment: 'Arrived a bit late due to traffic but the work was excellent.' }
  ]
}

export default function ElectricianProfilePage() {
  const router = useRouter()
  const params = useParams()
  
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const [activeTab, setActiveTab] = useState<'about' | 'portfolio' | 'reviews'>('about')
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request sent successfully!')
    router.push('/dashboard/bookings')
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto">
      <Link href="/dashboard/electricians" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to PowerConnect Search
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

            {/* Profile Navigation */}
            <div className="flex border-b border-border mt-8">
              <button 
                className={`pb-4 px-4 font-medium transition-colors border-b-2 ${activeTab === 'about' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-white'}`}
                onClick={() => setActiveTab('about')}
              >
                About & Services
              </button>
              <button 
                className={`pb-4 px-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'portfolio' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-white'}`}
                onClick={() => setActiveTab('portfolio')}
              >
                Portfolio <span className="bg-secondary/50 text-xs py-0.5 px-2 rounded-full">{electrician.portfolio.length}</span>
              </button>
              <button 
                className={`pb-4 px-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'reviews' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-white'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews <span className="bg-secondary/50 text-xs py-0.5 px-2 rounded-full">{electrician.reviews}</span>
              </button>
            </div>

            <div className="mt-8">
              {activeTab === 'about' && (
                <div className="space-y-8 animate-in fade-in">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">About Me</h3>
                    <p className="text-muted-foreground leading-relaxed">{electrician.about}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {electrician.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="bg-secondary/50 text-secondary-foreground text-sm py-1.5 px-3">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Certifications</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {electrician.licenses.map((lic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" /> {lic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-primary" /> Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {electrician.languages.map(lang => (
                          <Badge key={lang} variant="outline" className="border-border text-sm py-1.5 px-3">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
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
              )}

              {activeTab === 'portfolio' && (
                <div className="animate-in fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">Past Projects</h3>
                    <Button variant="outline" size="sm" className="border-border"><ImageIcon className="w-4 h-4 mr-2" /> View Full Gallery</Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {electrician.portfolio.map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border group relative cursor-pointer">
                        <img src={img} alt="Portfolio" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="animate-in fade-in space-y-6">
                  <div className="flex items-center justify-between bg-background p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-6">
                      <div className="text-5xl font-black text-white">{electrician.rating}</div>
                      <div>
                        <div className="flex gap-1 mb-1">
                          {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
                        </div>
                        <p className="text-sm text-muted-foreground">Based on {electrician.reviews} verified reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {electrician.reviewList.map((review, i) => (
                      <div key={i} className="p-6 rounded-xl border border-border bg-background/30">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold text-white">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                        <div className="mt-4 pt-4 border-t border-border flex items-center gap-4">
                          <button className="text-xs text-muted-foreground hover:text-white flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" /> Helpful
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                <label className="block text-sm font-medium text-foreground mb-1.5">Service Type</label>
                <select required className="w-full rounded-md border border-border bg-background px-3 h-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground">
                  <option value="">Select a service...</option>
                  {electrician.services.map((s, i) => <option key={i} value={s.name}>{s.name} - {s.price}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Date</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      type="date" 
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="pl-9 bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      type="time" 
                      required
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="pl-9 bg-background border-border"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Property Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Enter address..." className="pl-9 bg-background border-border" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Problem Description</label>
                <textarea 
                  rows={3} 
                  required
                  placeholder="Describe the electrical issue..." 
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12 mt-4 shadow-[0_0_15px_rgba(229,195,135,0.3)]">
                Confirm Booking Request
              </Button>

              <Link href={`/dashboard/messages?to=${electrician.id}`} className="block">
                <Button type="button" variant="outline" className="w-full border-border bg-transparent hover:bg-muted font-semibold gap-2 h-12 mt-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat before booking
                </Button>
              </Link>
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
