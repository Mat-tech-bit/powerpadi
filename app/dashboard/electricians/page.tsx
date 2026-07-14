'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Star, Filter, ShieldCheck, Zap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mockElectricians = [
  {
    id: '1',
    name: 'Oluwaseun Adewale',
    specialty: 'Inverter & Solar Expert',
    rating: 4.9,
    reviews: 128,
    location: 'Victoria Island, Lagos',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=1',
    skills: ['Solar Install', 'Inverter Repair', 'Battery Maintenance'],
    hourlyRate: '₦15,000'
  },
  {
    id: '2',
    name: 'Chinedu Eze',
    specialty: 'Generator Technician',
    rating: 4.8,
    reviews: 94,
    location: 'Lekki Phase 1, Lagos',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=2',
    skills: ['Mikano', 'Percy', 'General Servicing'],
    hourlyRate: '₦10,000'
  },
  {
    id: '3',
    name: 'Fatima Ibrahim',
    specialty: 'Domestic Wiring',
    rating: 4.7,
    reviews: 65,
    location: 'Ikeja, Lagos',
    verified: false,
    avatar: 'https://i.pravatar.cc/150?u=3',
    skills: ['Fault Finding', 'New Wiring', 'Appliance Install'],
    hourlyRate: '₦8,000'
  },
  {
    id: '4',
    name: 'PowerTech Solutions',
    specialty: 'Commercial Electrical',
    rating: 5.0,
    reviews: 210,
    location: 'Yaba, Lagos',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=4',
    skills: ['3-Phase Wiring', 'Panel Upgrades', 'Consulting'],
    hourlyRate: '₦25,000'
  }
]

export default function ElectriciansPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredElectricians = mockElectricians.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    e.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">PowerConnect</h1>
          <p className="text-muted-foreground mt-1">Find and book verified electricians and solar experts in your area.</p>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90 font-semibold gap-2">
          <Zap className="w-4 h-4" />
          Become a Provider
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-card border border-border rounded-xl p-4 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search by name or specialty..." 
            className="pl-10 bg-background border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative md:w-64">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Location" 
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button variant="outline" className="border-border gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Results List */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredElectricians.map((electrician) => (
          <div key={electrician.id} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img src={electrician.avatar} alt={electrician.name} className="w-16 h-16 rounded-full object-cover border-2 border-background shadow-md" />
                <div>
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                    {electrician.name}
                    {electrician.verified && <ShieldCheck className="w-4 h-4 text-green-500" />}
                  </h3>
                  <p className="text-sm text-primary font-medium">{electrician.specialty}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-medium text-foreground">{electrician.rating}</span>
                <span>({electrician.reviews})</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {electrician.location}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {electrician.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-normal">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Starting from</p>
                <p className="text-lg font-bold text-foreground">{electrician.hourlyRate}<span className="text-sm font-normal text-muted-foreground">/hr</span></p>
              </div>
              <Link href={`/dashboard/electricians/${electrician.id}`}>
                <Button className="bg-primary/10 text-primary hover:bg-primary hover:text-black font-semibold transition-all">
                  View Profile
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredElectricians.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1">No professionals found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}
