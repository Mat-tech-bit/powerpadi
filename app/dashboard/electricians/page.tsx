'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Star, Filter, ShieldCheck, Zap, AlertTriangle, Map as MapIcon, List, Clock, CheckCircle2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const SERVICE_CATEGORIES = [
  'Electrical Fault Repair', 'Emergency Electrician', 'House Wiring', 
  'Office Wiring', 'Socket Installation', 'Switch Installation', 
  'Distribution Board Installation', 'Circuit Breaker Repairs', 
  'Generator Installation', 'Generator Maintenance', 'Inverter Installation', 
  'Solar Installation', 'Solar Maintenance', 'Electrical Inspection', 
  'Meter Installation', 'Electrical Safety Check', 'Cable Repairs', 
  'Lighting Installation', 'Transformer Services', 'Commercial Electrical Services'
]

const mockElectricians = [
  {
    id: '1',
    name: 'Oluwaseun Adewale',
    specialty: 'Inverter & Solar Expert',
    categories: ['Solar Installation', 'Inverter Installation', 'Solar Maintenance'],
    rating: 4.9,
    reviews: 128,
    location: 'Victoria Island, Lagos',
    distance: '2.4 km',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=1',
    experience: '8 Years',
    hourlyRate: '₦15,000',
    emergencyResponse: '< 30 mins',
    available: true
  },
  {
    id: '2',
    name: 'Chinedu Eze',
    specialty: 'Generator Technician',
    categories: ['Generator Installation', 'Generator Maintenance', 'Electrical Fault Repair'],
    rating: 4.8,
    reviews: 94,
    location: 'Lekki Phase 1, Lagos',
    distance: '4.1 km',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=2',
    experience: '12 Years',
    hourlyRate: '₦10,000',
    emergencyResponse: '1 Hour',
    available: false
  },
  {
    id: '3',
    name: 'Fatima Ibrahim',
    specialty: 'Domestic Wiring',
    categories: ['House Wiring', 'Socket Installation', 'Lighting Installation', 'Circuit Breaker Repairs'],
    rating: 4.7,
    reviews: 65,
    location: 'Ikeja, Lagos',
    distance: '15.2 km',
    verified: false,
    avatar: 'https://i.pravatar.cc/150?u=3',
    experience: '4 Years',
    hourlyRate: '₦8,000',
    emergencyResponse: '2 Hours',
    available: true
  },
  {
    id: '4',
    name: 'PowerTech Solutions',
    specialty: 'Commercial Electrical',
    categories: ['Commercial Electrical Services', 'Transformer Services', 'Office Wiring', 'Distribution Board Installation'],
    rating: 5.0,
    reviews: 210,
    location: 'Yaba, Lagos',
    distance: '8.5 km',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=4',
    experience: '15 Years',
    hourlyRate: '₦25,000',
    emergencyResponse: '45 mins',
    available: true
  }
]

export default function ElectriciansPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [emergencyMode, setEmergencyMode] = useState(false)

  const filteredElectricians = mockElectricians.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) || e.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || e.categories.includes(selectedCategory)
    const matchesEmergency = !emergencyMode || e.emergencyResponse.includes('mins') || e.emergencyResponse.includes('30')
    return matchesSearch && matchesCategory && matchesEmergency
  })

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header & Emergency CTA */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            PowerConnect Marketplace <ShieldCheck className="w-6 h-6 text-primary" />
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Find, compare, and book verified electricians for your residential or commercial needs. All professionals are vetted for safety and quality.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={() => setEmergencyMode(!emergencyMode)}
            className={`font-bold h-12 px-6 shadow-lg transition-all ${emergencyMode ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse shadow-red-500/50' : 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/30'}`}
          >
            <AlertTriangle className="w-5 h-5 mr-2" />
            {emergencyMode ? 'Cancel Emergency Search' : 'Need an Electrician Now'}
          </Button>
          <Button className="bg-primary text-black hover:bg-primary/90 font-bold h-12">
            <Zap className="w-4 h-4 mr-2" /> Join as Provider
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search names, specialties, or keywords..." 
              className="pl-10 bg-background border-border h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative w-full lg:w-64">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Your Location" 
              className="pl-10 bg-background border-border h-12"
              defaultValue="Lekki Phase 1"
            />
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full lg:w-72 rounded-md border border-border bg-background px-3 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option>All Categories</option>
            {SERVICE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Secondary Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="border-border text-xs rounded-full bg-background"><Filter className="w-3 h-3 mr-1" /> Sort by Distance</Button>
            <Button variant="outline" size="sm" className="border-border text-xs rounded-full bg-background"><Star className="w-3 h-3 mr-1" /> Top Rated</Button>
            <Button variant="outline" size="sm" className="border-border text-xs rounded-full bg-background"><ShieldCheck className="w-3 h-3 mr-1" /> Verified Only</Button>
            <Button variant="outline" size="sm" className="border-border text-xs rounded-full bg-background"><Clock className="w-3 h-3 mr-1" /> Available Now</Button>
          </div>
          
          <div className="flex bg-background border border-border rounded-lg p-1">
            <button 
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === 'list' ? 'bg-primary text-black' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" /> List
            </button>
            <button 
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === 'map' ? 'bg-primary text-black' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setViewMode('map')}
            >
              <MapIcon className="w-4 h-4" /> Map
            </button>
          </div>
        </div>
      </div>

      {emergencyMode && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold">Emergency Request Broadcasting</h3>
            <p className="text-sm opacity-90 mt-1">We are actively pinging available electricians within a 5km radius. Below are the closest professionals who can arrive in under 45 minutes.</p>
          </div>
        </div>
      )}

      {/* Results View */}
      {viewMode === 'list' ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          {filteredElectricians.map((electrician) => (
            <div key={electrician.id} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img src={electrician.avatar} alt={electrician.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-background shadow-md" />
                      {electrician.available && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 border-2 border-card rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                        {electrician.name}
                        {electrician.verified && <ShieldCheck className="w-5 h-5 text-green-500" />}
                      </h3>
                      <p className="text-sm text-primary font-bold mt-1">{electrician.specialty}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground mt-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-foreground">{electrician.rating}</span>
                          <span>({electrician.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {electrician.distance} away
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          Est: {electrician.emergencyResponse}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {electrician.categories.slice(0, 3).map(cat => (
                      <Badge key={cat} variant="secondary" className="bg-secondary/40 text-secondary-foreground font-normal rounded-full px-3">
                        {cat}
                      </Badge>
                    ))}
                    {electrician.categories.length > 3 && (
                      <Badge variant="secondary" className="bg-secondary/40 text-secondary-foreground font-normal rounded-full px-3">
                        +{electrician.categories.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Pricing / Rate</p>
                  <p className="text-xl font-bold text-foreground">{electrician.hourlyRate}<span className="text-sm font-normal text-muted-foreground">/hr</span></p>
                </div>
                <div className="flex gap-3">
                  <Link href={`/dashboard/electricians/${electrician.id}`}>
                    <Button variant="outline" className="border-border hover:bg-muted font-bold transition-all">
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/dashboard/electricians/${electrician.id}?booking=true`}>
                    <Button className={`font-bold transition-all ${emergencyMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-primary text-black hover:bg-primary/90'}`}>
                      {emergencyMode ? 'Request Urgent' : 'Book Now'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl h-[600px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-50 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lekki,Lagos&zoom=13&size=800x600&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.stroke|color:0x334e87&style=feature:landscape.natural|element:geometry|color:0x021019&style=feature:poi|element:geometry|color:0x283d6a&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:poi.park|element:geometry.fill|color:0x023e58&style=feature:poi.park|element:labels.text.fill|color:0x3C7680&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:road.highway|element:geometry|color:0x2c6675&style=feature:road.highway|element:geometry.stroke|color:0x255763&style=feature:road.highway|element:labels.text.fill|color:0xb0d5ce&style=feature:road.highway|element:labels.text.stroke|color:0x023e58&style=feature:transit|element:labels.text.fill|color:0x98a5be&style=feature:transit|element:labels.text.stroke|color:0x1d2c4d&style=feature:transit.line|element:geometry.fill|color:0x283d6a&style=feature:transit.station|element:geometry|color:0x3a4762&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70')] bg-cover bg-center mix-blend-screen" />
          
          {/* Mock Map Markers */}
          {filteredElectricians.map((e, idx) => (
            <div key={e.id} className="absolute z-10 flex flex-col items-center group cursor-pointer" style={{ top: `${30 + idx * 15}%`, left: `${20 + idx * 25}%` }}>
              <div className="bg-primary text-black font-bold text-xs px-2 py-1 rounded shadow-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {e.name} • {e.rating}★
              </div>
              <div className="w-8 h-8 rounded-full bg-card border-2 border-primary overflow-hidden shadow-[0_0_15px_rgba(229,195,135,0.5)]">
                <img src={e.avatar} alt="Provider" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}

          <div className="absolute top-4 right-4 bg-card/90 backdrop-blur border border-border p-4 rounded-xl shadow-xl w-64">
            <h4 className="font-bold mb-2">Map View Active</h4>
            <p className="text-sm text-muted-foreground">Showing {filteredElectricians.length} providers within a 10km radius of your location.</p>
          </div>
        </div>
      )}

      {filteredElectricians.length === 0 && (
        <div className="text-center py-16 bg-card border border-border rounded-xl">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">No professionals found</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">Try adjusting your filters, location, or expanding your search criteria.</p>
          <Button variant="outline" onClick={() => {setSearchQuery(''); setSelectedCategory('All Categories'); setEmergencyMode(false)}} className="mt-6">
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  )
}
