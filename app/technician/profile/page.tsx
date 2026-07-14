'use client'

import { useState } from 'react'
import { ShieldCheck, Upload, MapPin, Briefcase, FileText, Image as ImageIcon, Camera } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function TechnicianProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'services' | 'portfolio'>('profile')

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your public presence and service offerings.</p>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8">Save Changes</Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="flex border-b border-border bg-background/50 overflow-x-auto">
          {['Profile Details', 'Services & Pricing', 'Portfolio Gallery'].map((tab, i) => {
            const id = ['profile', 'services', 'portfolio'][i] as any
            return (
              <button 
                key={id}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === id ? 'text-primary border-primary bg-card' : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50'}`}
                onClick={() => setActiveTab(id)}
              >
                {tab}
              </button>
            )
          })}
        </div>

        <div className="p-8">
          {activeTab === 'profile' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative group">
                  <img src="https://i.pravatar.cc/150?u=4" alt="Provider Avatar" className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg" />
                  <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">PowerTech Solutions <ShieldCheck className="w-5 h-5 text-green-500" /></h3>
                  <p className="text-sm text-primary font-medium mb-3">Verified Business Profile</p>
                  <Button variant="outline" size="sm" className="border-border">Change Photo</Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name / Business Name</label>
                  <Input defaultValue="PowerTech Solutions" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Specialty</label>
                  <Input defaultValue="Commercial Electrical" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Contact Email</label>
                  <Input type="email" defaultValue="hello@powertech.com" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <Input type="tel" defaultValue="+234 800 000 0000" className="bg-background border-border" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Bio / Description</label>
                  <textarea rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" defaultValue="We are a team of certified electrical engineers specializing in commercial wiring and transformer services."></textarea>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Areas (Comma separated)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="Lagos Island, Yaba, Surulere, Ikeja" className="pl-9 bg-background border-border" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground">My Offered Services</h3>
                <Button variant="outline" size="sm" className="border-border border-dashed hover:border-primary/50 text-primary">Add Service</Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Commercial Wiring Assessment', price: '₦25,000', duration: '2 Hours' },
                  { name: 'Transformer Maintenance', price: 'Contact for quote', duration: 'Variable' },
                ].map((s, i) => (
                  <div key={i} className="grid sm:grid-cols-3 gap-4 p-4 rounded-xl border border-border bg-background/50 items-center">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Service Name</label>
                      <Input defaultValue={s.name} className="bg-background border-border h-9" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Price / Rate</label>
                      <Input defaultValue={s.price} className="bg-background border-border h-9" />
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-muted-foreground mb-1">Duration</label>
                        <Input defaultValue={s.duration} className="bg-background border-border h-9" />
                      </div>
                      <Button variant="outline" className="border-red-500/20 text-red-500 hover:bg-red-500/10 px-3 h-9">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-8 border-2 border-dashed border-border rounded-xl bg-background/30 text-center hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 border border-border group-hover:border-primary/50 transition-colors">
                  <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold text-foreground mb-1">Upload Portfolio Image</h4>
                <p className="text-sm text-muted-foreground">JPG, PNG or WEBP. Max 5MB.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-muted overflow-hidden relative group">
                    <img src={`https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=300&q=80&sig=${i}`} alt="Portfolio" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="destructive" size="sm" className="font-bold">Remove</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
