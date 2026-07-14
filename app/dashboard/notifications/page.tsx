'use client'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { 
  Bell, CheckCircle2, Settings, Zap, ZapOff, BrainCircuit, 
  Sun, AlertTriangle, MapPin, SlidersHorizontal 
} from 'lucide-react'

export default function NotificationsPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Notifications</h1>
            <p className="text-sm text-muted-foreground">Stay updated with important electricity events from your communities.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-muted-foreground hover:text-white transition-colors">Mark All as Read</button>
            <button className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-white transition-colors">
              <Settings className="w-4 h-4" /> Settings
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-4 py-2 rounded-full bg-[#E5C387] text-black text-sm font-semibold whitespace-nowrap">All</button>
          <button className="px-4 py-2 rounded-full border border-[#2B303B] text-muted-foreground hover:text-white hover:border-primary/50 text-sm font-semibold whitespace-nowrap transition-colors">Power Updates</button>
          <button className="px-4 py-2 rounded-full border border-[#2B303B] text-muted-foreground hover:text-white hover:border-primary/50 text-sm font-semibold whitespace-nowrap transition-colors">AI Alerts</button>
          <button className="px-4 py-2 rounded-full border border-[#2B303B] text-muted-foreground hover:text-white hover:border-primary/50 text-sm font-semibold whitespace-nowrap transition-colors">Community Reports</button>
          <button className="px-4 py-2 rounded-full border border-[#2B303B] text-muted-foreground hover:text-white hover:border-primary/50 text-sm font-semibold whitespace-nowrap transition-colors">SolarBulk</button>
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          
          {/* Item 1 - Restored */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-bold text-white truncate">Power Restored</h3>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">3 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Electricity has been restored in <span className="font-semibold text-white">Mayfair Estate</span>.
              </p>
            </div>
          </div>

          {/* Item 2 - Outage (Active) */}
          <div className="bg-[#161B22] border border-red-500/50 rounded-xl p-5 flex items-start gap-4 hover:border-red-500 transition-colors cursor-pointer relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
              <ZapOff className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-bold text-white truncate">Power Outage</h3>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">12 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Multiple users have reported an outage in <span className="font-semibold text-white">OAU Campus</span>.
              </p>
            </div>
          </div>

          {/* Item 3 - AI Prediction */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center shrink-0">
              <BrainCircuit className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-white truncate">AI Prediction Updated</h3>
                  <span className="bg-[#2B303B] text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Smart Alert</span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">25 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Power is now expected to return at <span className="font-semibold text-white">7:30 PM</span>.
              </p>
              <div className="text-xs text-muted-foreground">
                Confidence: <span className="text-green-500 font-bold">91%</span>
              </div>
            </div>
          </div>

          {/* Item 4 - SolarBulk */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-white truncate">SolarBulk Progress</h3>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">45 mins ago</span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>Goal: 50 Households</span>
                <span className="font-bold text-white">35/50</span>
              </div>
              <div className="h-1.5 w-full bg-[#2B303B] rounded-full overflow-hidden mb-3">
                <div className="h-full bg-green-500 w-[70%] rounded-full" />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your community now has <span className="font-semibold text-white">35 interested households</span>. 15 more needed to reach goal.
              </p>
            </div>
          </div>

          {/* Item 5 - Fault */}
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 flex items-start gap-4 hover:border-red-500/30 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-bold text-white truncate">Transformer Fault</h3>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">1 hour ago</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A transformer fault has been reported in <span className="font-semibold text-white">Iremo</span>. Technical crew notified.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[360px] space-y-6 shrink-0">
        
        {/* Notification Preferences */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-semibold text-white">Notification Preferences</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Power Restored Alerts</p>
                <p className="text-xs text-muted-foreground mt-0.5">Notify when power is back</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Outage Alerts</p>
                <p className="text-xs text-muted-foreground mt-0.5">Urgent outage notifications</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">AI Prediction Updates</p>
                <p className="text-xs text-muted-foreground mt-0.5">Smart prediction changes</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">SolarBulk Updates</p>
                <p className="text-xs text-muted-foreground mt-0.5">Group purchase progress</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Weekly Summary</p>
                <p className="text-xs text-muted-foreground mt-0.5">Digest of community activity</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
            </div>
          </div>

          <Button variant="outline" className="w-full mt-8 bg-transparent border-[#2B303B] hover:bg-[#2B303B] text-white">
            Reset to Default
          </Button>
        </div>

        {/* Live Map Context */}
        <div className="bg-[#161B22] border border-[#1F2937] rounded-xl overflow-hidden relative h-[200px] group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
          <img src="/placeholder.svg" alt="Map Context" className="w-full h-full object-cover opacity-60 grayscale invert-[0.8] mix-blend-screen" />
          <div className="absolute inset-x-0 top-0 p-5 z-20 bg-gradient-to-b from-black/80 to-transparent">
            <h3 className="font-bold text-white text-sm">Live Map Context</h3>
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-1">Lagos Main Grid</p>
          </div>
          <div className="absolute left-5 bottom-5 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-white">Live Activity Near You</span>
          </div>
        </div>

      </div>
    </div>
  )
}
