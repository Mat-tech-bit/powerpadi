'use client'

import { MapPin, UploadCloud, CheckCircle2, AlertTriangle, Zap, ZapOff, Info, Maximize2, Map, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReportPage() {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Report Electricity Status</h1>
            <p className="text-muted-foreground text-lg">Help your community stay informed by sharing the latest electricity update.</p>
          </div>

          <div className="space-y-8">
            {/* Community Dropdown */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">Select Community</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#161B22] border border-[#1F2937] text-white focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
                  <option>Mayfair Estate</option>
                  <option>Victoria Island Hub</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Power Status Grid */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">Power Status</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-green-500 bg-green-500/10 text-center transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-sm font-semibold text-green-500 leading-tight">Electricity<br/>Available</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-[#2B303B] bg-[#161B22] hover:bg-[#1A1D24] text-center transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center">
                    <ZapOff className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-white leading-tight">Power<br/>Outage</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-[#2B303B] bg-[#161B22] hover:bg-[#1A1D24] text-center transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-white leading-tight">Low<br/>Voltage</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-[#2B303B] bg-[#161B22] hover:bg-[#1A1D24] text-center transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-white leading-tight">Transformer<br/>Fault</span>
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">Additional Notes</label>
                <textarea 
                  rows={4}
                  placeholder="Add more details (e.g. 'Since 2 PM', 'Flickering lights')"
                  className="w-full p-4 rounded-xl bg-[#161B22] border border-[#1F2937] text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 resize-none h-[140px]"
                />
              </div>

              {/* Upload Evidence */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">Upload Evidence</label>
                <div className="w-full h-[140px] rounded-xl border-2 border-dashed border-[#2B303B] bg-[#161B22] flex flex-col items-center justify-center text-center p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#1A1D24] flex items-center justify-center mb-2">
                    <UploadCloud className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-white mb-1">Drag photos or videos here</p>
                  <p className="text-xs text-muted-foreground">Supports JPG, PNG, MP4</p>
                </div>
              </div>
            </div>

            {/* Verification */}
            <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Current Community Verification</p>
                  <p className="text-sm text-muted-foreground">Mayfair Estate, Ile-Ife</p>
                </div>
              </div>
              <Button variant="outline" className="w-full sm:w-auto border-[#2B303B] bg-transparent text-white hover:bg-[#1A1D24] h-10 px-6 gap-2 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Use Current Location
              </Button>
            </div>
          </div>
          
          <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-14 text-lg rounded-xl mt-8">
            Submit Report
          </Button>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          
          {/* Community Impact */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live Updates
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">Community<br/>Impact</h2>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Your reports help 1,240 people in Mayfair Estate stay productive.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1A1D24] border border-[#2B303B] rounded-2xl p-4">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Reports Today</p>
                <p className="text-2xl font-bold text-white">18</p>
              </div>
              <div className="bg-[#1A1D24] border border-[#2B303B] rounded-2xl p-4">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Accuracy</p>
                <p className="text-2xl font-bold text-white">98%</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-bold text-white mb-3">Top Contributors</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#2B303B] border-2 border-[#161B22] overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=11" alt="User" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2B303B] border-2 border-[#161B22] overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=12" alt="User" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2B303B] border-2 border-[#161B22] overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=13" alt="User" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                  +15
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-3xl overflow-hidden relative group">
            {/* Map image placeholder */}
            <div className="w-full h-48 bg-[#1A1D24] relative">
              <div className="absolute inset-0 bg-[url('https://maps.wikimedia.org/osm-intl/14/8314/7918.png')] bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(229,195,135,0.6)]">
                <div className="absolute inset-0 rounded-full border border-primary animate-ping" />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Currently viewing</p>
                <p className="text-sm font-bold text-white">Mayfair Sector 4</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Reporting Tip */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-5 h-5 text-muted-foreground" />
              <p className="text-sm font-bold text-white">Reporting Tip</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adding a photo of your meter or the local transformer helps utility providers identify the issue 40% faster.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

function Users(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}
