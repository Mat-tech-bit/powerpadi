'use client'

import { Button } from '@/components/ui/button'
import { 
  MapPin, Users, Share2, Zap, AlertTriangle, 
  BrainCircuit, Activity, Clock, ShieldCheck, 
  Sun, ChevronRight, TrendingUp
} from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">OAU Campus, Ile-Ife</h1>
              <span className="bg-[#E5C387]/10 text-[#E5C387] border border-[#E5C387]/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Smart Grid</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Osun State, Nigeria</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>3.2k members</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none bg-transparent border-[#2B303B] hover:bg-[#2B303B] text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="flex-1 md:flex-none bg-[#E5C387] text-black hover:bg-[#E5C387]/90 font-semibold">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Status
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-green-500/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Current Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-lg font-bold text-green-500 uppercase tracking-wide">Power On</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Verified 2 mins ago</p>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-primary/50 transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 p-3 opacity-20"><BrainCircuit className="w-12 h-12 text-primary" /></div>
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">AI Prediction</p>
            <p className="text-lg font-bold text-white uppercase tracking-wide leading-tight">Outage Expected<br/><span className="text-primary">@ 8:00 PM</span></p>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-primary/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Reliability Score</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">7.2<span className="text-sm text-muted-foreground">/10</span></p>
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div className="h-1 w-full bg-[#2B303B] rounded-full overflow-hidden mt-3">
              <div className="h-full bg-primary w-[72%] rounded-full" />
            </div>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-green-500/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Grid Stability</p>
            <div className="flex items-end justify-between">
              <p className="text-lg font-bold text-green-500 uppercase tracking-wide leading-tight">Stable</p>
              <ShieldCheck className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Normal voltage range</p>
          </div>
        </div>

        {/* Power Timeline */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-white">Power Timeline (Last 24h)</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-green-500"/> On</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-red-500"/> Off</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-primary"/> Unstable</div>
            </div>
          </div>
          
          {/* Timeline visualization */}
          <div className="space-y-2">
            <div className="h-8 flex rounded-md overflow-hidden bg-[#1A1D24]">
              {/* 24 segments representing hours */}
              <div className="w-[10%] bg-red-500/80 hover:bg-red-500 transition-colors" title="Outage" />
              <div className="w-[30%] bg-green-500/80 hover:bg-green-500 transition-colors" title="Power On" />
              <div className="w-[5%] bg-primary/80 hover:bg-primary transition-colors" title="Unstable" />
              <div className="w-[15%] bg-red-500/80 hover:bg-red-500 transition-colors" title="Outage" />
              <div className="w-[40%] bg-green-500/80 hover:bg-green-500 transition-colors" title="Power On" />
            </div>
            <div className="flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              <span>12:00 AM</span>
              <span>6:00 AM</span>
              <span>12:00 PM</span>
              <span>6:00 PM</span>
              <span>NOW</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 border-t border-[#1F2937] pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-1">16.5h</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Power</p>
            </div>
            <div className="text-center border-l border-r border-[#1F2937]">
              <p className="text-2xl font-bold text-white mb-1">2</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Outages</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary mb-1">94%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">AI Accuracy</p>
            </div>
          </div>
        </div>

        {/* Active Reports */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">Active Community Reports</h2>
            <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">View All History</button>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl">
            <div className="p-5 flex items-start gap-4 border-b border-[#1F2937] hover:bg-[#1A1D24] transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">Transformer Sparking</h4>
                  <span className="text-xs text-muted-foreground">45 mins ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-3">Sparks observed on the main transformer near the campus gate. Technicians have been notified.</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#2B303B] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">High Priority</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3"/> 12 Verifications</span>
                </div>
              </div>
            </div>
            <div className="p-5 flex items-start gap-4 hover:bg-[#1A1D24] transition-colors cursor-pointer group rounded-b-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">Low Voltage Warning</h4>
                  <span className="text-xs text-muted-foreground">3 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-3">Voltage is dropping below 180V. Advise turning off heavy appliances to prevent damage.</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Resolving</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3"/> 8 Verifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[360px] space-y-6 shrink-0">
        
        {/* AI Community Insight */}
        <div className="bg-gradient-to-br from-[#161B22] to-[#1A1D24] border border-primary/30 rounded-xl p-6 relative overflow-hidden shadow-[0_0_20px_rgba(229,195,135,0.05)]">
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-white">AI Community Insight</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed relative z-10 mb-6">
            Based on historical data and current grid load, our models predict an <span className="font-semibold text-white">85% chance of load shedding</span> between 8:00 PM and 10:00 PM tonight.
          </p>
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-[#1A1D24] border border-[#2B303B]">
              <span className="text-muted-foreground">Confidence Level</span>
              <span className="font-bold text-primary flex items-center gap-1"><TrendingUp className="w-3 h-3"/> High (85%)</span>
            </div>
            <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-[#1A1D24] border border-[#2B303B]">
              <span className="text-muted-foreground">Historical Pattern</span>
              <span className="font-bold text-white">Matches last Tuesday</span>
            </div>
          </div>
        </div>

        {/* SolarBulk Group */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#E5C387] flex items-center justify-center">
              <Sun className="w-4 h-4 text-black" />
            </div>
            <h3 className="text-sm font-semibold text-white">SolarBulk Initiative</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Join the community solar purchasing group to get premium installations at wholesale prices.
          </p>
          
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-white">32 / 50 Households</span>
              <span className="text-primary font-bold">64%</span>
            </div>
            <div className="h-2 w-full bg-[#2B303B] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-[#FDE68A] w-[64%] rounded-full" />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">18 more needed to unlock wholesale tier</p>
          </div>

          <Button className="w-full bg-white text-black hover:bg-white/90 font-semibold mb-3">
            Join SolarBulk Group
          </Button>
          <Button variant="outline" className="w-full bg-transparent border-[#2B303B] hover:bg-[#2B303B] text-white">
            View Cost Estimate
          </Button>
        </div>

        {/* Top Contributors */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-white">Top Contributors</h3>
            <button className="text-xs text-primary hover:text-primary/80">See all</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Adekunle A.', role: 'Grid Expert', pts: '1,240' },
              { name: 'Sarah O.', role: 'Active Member', pts: '980' },
              { name: 'Chidi M.', role: 'Active Member', pts: '845' },
              { name: 'Fatima B.', role: 'New Member', pts: '420' },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{user.name}</p>
                    <p className="text-[10px] text-muted-foreground">{user.role}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-white">{user.pts}</span>
                  <span className="text-[10px] text-primary">pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
