'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/AuthProvider'
import { 
  AlertTriangle, Map, Users, Sun, Sparkles, 
  CheckCircle2, AlertCircle, TrendingUp, Activity,
  Clock, ArrowUpRight
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { userData } = useAuth()
  const firstName = userData?.fullName?.split(' ')[0] || 'Adekunle'

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-center gap-2">
          Good Morning, {firstName} <span className="text-3xl">👋</span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Here's the latest electricity update for your community.
        </p>
      </div>

      {/* Top Cards Grid */}
      <div className="grid lg:grid-cols-5 gap-6">
        
        {/* Primary Location */}
        <div className="lg:col-span-3 bg-[#161B22] border border-[#1F2937] rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="flex items-start justify-between mb-8 relative z-10">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Primary Location
            </span>
            <span className="bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Electricity Available
            </span>
          </div>

          <div className="relative z-10 mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Victoria Island, Hub</h2>
          </div>

          <div className="space-y-2 relative z-10">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated 2 minutes ago
            </p>
            <p className="text-sm font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Confirmed by 18 community reports
            </p>
          </div>
          
          {/* Decorative background blur */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-green-500/20 transition-colors duration-700" />
        </div>

        {/* AI Prediction */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#161B22] to-[#1A1D24] border border-[#2B303B] rounded-2xl p-6 md:p-8 shadow-[0_0_25px_rgba(229,195,135,0.03)] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              AI Prediction
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-8">
            Power is expected to remain available until <span className="text-primary">5:45 PM</span>.
          </h3>

          <div>
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-muted-foreground font-medium">Confidence Level</span>
              <span className="text-primary font-bold text-lg">89%</span>
            </div>
            <div className="h-2 w-full bg-[#2B303B] rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[89%] rounded-full shadow-[0_0_10px_rgba(229,195,135,0.5)]" />
            </div>
          </div>
        </div>

      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <Link href="/dashboard/report">
          <div className="bg-[#161B22] border border-[#1F2937] hover:border-primary/50 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center group h-full">
            <div className="w-12 h-12 rounded-full bg-[#1A1D24] border border-[#2B303B] group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Report Power</h4>
          </div>
        </Link>
        <Link href="/dashboard/map">
          <div className="bg-[#161B22] border border-[#1F2937] hover:border-primary/50 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center group h-full">
            <div className="w-12 h-12 rounded-full bg-[#1A1D24] border border-[#2B303B] group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
              <Map className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Open Live Map</h4>
          </div>
        </Link>
        <Link href="/dashboard/community">
          <div className="bg-[#161B22] border border-[#1F2937] hover:border-primary/50 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center group h-full">
            <div className="w-12 h-12 rounded-full bg-[#1A1D24] border border-[#2B303B] group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold text-white text-sm mb-1">My Community</h4>
          </div>
        </Link>
        <Link href="/dashboard/solarbulk">
          <div className="bg-[#161B22] border border-[#1F2937] hover:border-primary/50 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center group h-full">
            <div className="w-12 h-12 rounded-full bg-[#1A1D24] border border-[#2B303B] group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
              <Sun className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold text-white text-sm mb-1">SolarBulk</h4>
          </div>
        </Link>
      </div>

      {/* Bottom Metrics Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Timeline */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-2xl p-6 md:p-8 lg:row-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Today's Timeline
            </h3>
          </div>
          
          <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[11px] before:w-0.5 before:bg-[#2B303B]">
            <div className="relative z-10 flex items-center justify-between">
              <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-green-500 border-4 border-[#161B22]" />
              <span className="text-sm font-semibold text-white">7:00 AM</span>
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Power On</span>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-red-500 border-4 border-[#161B22]" />
              <span className="text-sm font-semibold text-white">10:15 AM</span>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Power Off</span>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-green-500 border-4 border-[#161B22]" />
              <span className="text-sm font-semibold text-white">12:40 PM</span>
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Power On</span>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-12 pt-6 border-t border-[#1F2937]">
              <div className="absolute -left-[30px] top-[30px] w-4 h-4 rounded-full bg-green-500 border-4 border-[#161B22] animate-pulse" />
              <span className="text-sm font-bold text-white">Current Status</span>
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Available</span>
            </div>
          </div>
        </div>

        {/* Reliability Score */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Reliability Score
          </h3>
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2B303B" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22c55e" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.92)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-white">92%</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Top 5% reliability in Lagos Metropolis
            </p>
          </div>
        </div>

        {/* Avg Daily Power */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Avg Daily Power
          </h3>
          <div>
            <p className="text-4xl font-bold text-white mb-4">14.8 <span className="text-xl text-muted-foreground font-normal">hrs</span></p>
            <div className="h-2 w-full bg-[#2B303B] rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[61%] rounded-full" />
            </div>
          </div>
        </div>

        {/* Weekly Outages */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-2xl p-6 md:p-8">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Weekly Outages
          </h3>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-3xl font-bold text-white">2</span>
            <span className="text-xs text-muted-foreground mb-1">Incidents in last 7 days</span>
          </div>
          <div className="flex items-end gap-2 h-12 w-full">
            <div className="flex-1 bg-green-500/80 hover:bg-green-500 transition-colors rounded-t-sm h-full" />
            <div className="flex-1 bg-green-500/80 hover:bg-green-500 transition-colors rounded-t-sm h-[80%]" />
            <div className="flex-1 bg-green-500/80 hover:bg-green-500 transition-colors rounded-t-sm h-full" />
            <div className="flex-1 bg-red-500/80 hover:bg-red-500 transition-colors rounded-t-sm h-[40%]" />
            <div className="flex-1 bg-green-500/80 hover:bg-green-500 transition-colors rounded-t-sm h-[90%]" />
            <div className="flex-1 bg-green-500/80 hover:bg-green-500 transition-colors rounded-t-sm h-full" />
            <div className="flex-1 bg-red-500/80 hover:bg-red-500 transition-colors rounded-t-sm h-[30%]" />
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-2xl p-6 md:p-8">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Monthly Trend
          </h3>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-xl font-bold text-green-500 flex items-center gap-1">
              <ArrowUpRight className="w-5 h-5" />
              +12%
            </span>
            <span className="text-xs text-muted-foreground mb-0.5">Improvement from last month</span>
          </div>
          <div className="w-full h-12 relative overflow-hidden">
            <svg viewBox="0 0 100 30" className="w-full h-full stroke-green-500 stroke-2 fill-none preserve-3d" preserveAspectRatio="none">
              <path d="M 0 25 Q 10 20 20 25 T 40 20 T 60 25 T 80 10 T 100 5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}
