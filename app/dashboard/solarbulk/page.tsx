'use client'

import { Button } from '@/components/ui/button'
import { Activity, Users, TrendingUp, Award, Zap, Clock, DollarSign, Map, BarChart3, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function SolarBulkPage() {
  return (
    <div className="space-y-6 lg:space-y-12 pb-12">
      {/* Hero Section */}
      <div className="bg-[#161B22] border border-[#1F2937] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-[#1A1D24] border border-[#2B303B] text-muted-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8">
            Available Now
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Community Solar
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Communities with unreliable electricity can join together and express interest in affordable shared solar solutions. Powering the future, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold h-12 px-8 rounded-xl text-base">
              Join Interest List
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-xl text-base font-semibold border-[#2B303B] bg-[#1A1D24] text-white hover:bg-[#2B303B]">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Decorative background gradients */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      </div>

      {/* Reports Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Intelligence Report */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">Power Intelligence<br/>Report</h2>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-12 text-lg max-w-md">
            Based on 90 days of automated reports in your area, the community averages only <span className="text-red-400 font-semibold">6.4 hours</span> of grid power daily.
          </p>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-white font-medium">Current Grid Availability</span>
                <span className="text-red-400 font-bold">26%</span>
              </div>
              <div className="h-2.5 w-full bg-[#1A1D24] rounded-full overflow-hidden">
                <div className="h-full bg-red-500/80 w-[26%] rounded-full" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-white font-medium">Estimated Solar Reliability</span>
                <span className="text-green-500 font-bold">99.8%</span>
              </div>
              <div className="h-2.5 w-full bg-[#1A1D24] rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[99.8%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Mayfair Estate Project</h2>
                <p className="text-muted-foreground text-lg">Victoria Island, Phase II</p>
              </div>
              <span className="inline-flex bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider items-center gap-2 whitespace-nowrap self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Trending Project
              </span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-[#1A1D24] border border-[#2B303B] rounded-2xl p-6">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Household Interest</p>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-white leading-none">28</span>
                  <span className="text-muted-foreground leading-snug">/50</span>
                </div>
                <div className="h-2 w-full bg-[#2B303B] rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[56%] rounded-full shadow-[0_0_10px_rgba(229,195,135,0.4)]" />
                </div>
              </div>
              
              <div className="bg-[#1A1D24] border border-[#2B303B] rounded-2xl p-6">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Est. Monthly Savings</p>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-green-500 leading-none">32%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Per household average</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold h-12 rounded-xl text-base">
              Join Interest List
            </Button>
            <Button variant="outline" className="flex-1 h-12 rounded-xl text-base font-semibold border-[#2B303B] bg-[#1A1D24] text-white hover:bg-[#2B303B]">
              View Site Map
            </Button>
          </div>
        </div>

      </div>

      {/* SolarBulk Advantages */}
      <div className="pt-8">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">SolarBulk Advantages</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 bg-[#161B22] border border-[#1F2937] rounded-2xl">
            <div className="w-12 h-12 bg-[#1A1D24] border border-[#2B303B] rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-3">Community Power</h3>
            <p className="text-muted-foreground leading-relaxed">
              Leverage collective buying power to negotiate better rates with manufacturers and installers.
            </p>
          </div>
          
          <div className="p-8 bg-[#161B22] border border-[#1F2937] rounded-2xl">
            <div className="w-12 h-12 bg-[#1A1D24] border border-[#2B303B] rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-3">Maximum Savings</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reduce per-unit costs by up to 40% compared to individual installations.
            </p>
          </div>
          
          <div className="p-8 bg-[#161B22] border border-[#1F2937] rounded-2xl">
            <div className="w-12 h-12 bg-[#1A1D24] border border-[#2B303B] rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-3">High ROI</h3>
            <p className="text-muted-foreground leading-relaxed">
              Recover your investment in 4-6 years with guaranteed system reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
