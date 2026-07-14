'use client'

import { useAuth } from '@/components/AuthProvider'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle2, Edit2, MapPin, Network, BarChart3, Star, Calendar,
  Zap, AlertTriangle, ChevronRight, Users, ShieldCheck, Cpu, LogOut,
  Globe, Lock, HelpCircle, Info, User
} from 'lucide-react'
import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'

export default function ProfilePage() {
  const { userData } = useAuth()
  
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1A1D24] border border-[#2B303B] overflow-hidden flex items-center justify-center">
                <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover opacity-90" />
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-black hover:bg-primary/90 transition-colors shadow-lg">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{userData?.fullName || 'User'}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5 text-green-500 bg-green-500/10 px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-semibold">Community Contributor</span>
                </div>
                <span className="hidden sm:inline">|</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none bg-transparent border-[#2B303B] hover:bg-[#2B303B] text-white">Edit Profile</Button>
            <Button className="flex-1 md:flex-none bg-[#E5C387] text-black hover:bg-[#E5C387]/90 font-semibold">Account Settings</Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-primary/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Communities Following</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">5</p>
              <Network className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-green-500/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Reports Submitted</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">42</p>
              <BarChart3 className="w-5 h-5 text-green-500" />
            </div>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-primary/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Contribution Score</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">96%</p>
              <Star className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5 hover:border-muted-foreground/50 transition-colors">
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Member Since</p>
            <div className="flex items-end justify-between">
              <p className="text-lg font-bold text-white leading-tight">July<br/>2026</p>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Saved Communities */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">Saved Communities</h2>
            <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-bold text-white">Home</h3>
                  <p className="text-xs text-muted-foreground mt-1">Lekki Phase 1</p>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> POWER ON
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Reliability Score</span>
                  <span className="font-bold text-white">8.4 / 10</span>
                </div>
                <div className="h-1.5 w-full bg-[#2B303B] rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[84%] rounded-full" />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-[#1A1D24] border-[#2B303B] hover:bg-[#2B303B] text-white transition-colors">Quick View</Button>
            </div>
            {/* Card 2 */}
            <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-bold text-white">Business</h3>
                  <p className="text-xs text-muted-foreground mt-1">Victoria Island</p>
                </div>
                <div className="flex items-center gap-1.5 bg-red-500/10 text-red-500 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> OUTAGE
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Reliability Score</span>
                  <span className="font-bold text-white">6.1 / 10</span>
                </div>
                <div className="h-1.5 w-full bg-[#2B303B] rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[61%] rounded-full" />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-[#1A1D24] border-[#2B303B] hover:bg-[#2B303B] text-white transition-colors">Quick View</Button>
            </div>
            {/* Card 3 */}
            <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-bold text-white">Parents' House</h3>
                  <p className="text-xs text-muted-foreground mt-1">Ikeja Gra</p>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> POWER ON
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Reliability Score</span>
                  <span className="font-bold text-white">9.2 / 10</span>
                </div>
                <div className="h-1.5 w-full bg-[#2B303B] rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[92%] rounded-full" />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-[#1A1D24] border-[#2B303B] hover:bg-[#2B303B] text-white transition-colors">Quick View</Button>
            </div>
            {/* Card 4 */}
            <div className="bg-[#161B22] border border-[#1F2937] rounded-xl p-5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-bold text-white">Favorite Community</h3>
                  <p className="text-xs text-muted-foreground mt-1">Ibadan North</p>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> POWER ON
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Reliability Score</span>
                  <span className="font-bold text-white">4.8 / 10</span>
                </div>
                <div className="h-1.5 w-full bg-[#2B303B] rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[48%] rounded-full" />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-[#1A1D24] border-[#2B303B] hover:bg-[#2B303B] text-white transition-colors">Quick View</Button>
            </div>
          </div>
        </div>

        {/* Recent Contributions */}
        <div>
          <h2 className="text-sm font-semibold text-white mb-4">Recent Contributions</h2>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl">
            {/* Item 1 */}
            <div className="p-5 flex items-start gap-4 border-b border-[#1F2937]">
              <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">Power Restored</h4>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-2">OAU Campus, Ile-Ife</p>
                <div className="flex items-center gap-3">
                  <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Verified</span>
                  <span className="text-[10px] text-muted-foreground">+5 Contribution Points</span>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="p-5 flex items-start gap-4 border-b border-[#1F2937]">
              <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">Outage Reported</h4>
                  <span className="text-xs text-muted-foreground">6 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-2">Mayfair Estate, Ile-Ife</p>
                <div className="flex items-center gap-3">
                  <span className="bg-[#2B303B] text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Pending</span>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">Low Voltage Reported</h4>
                  <span className="text-xs text-muted-foreground">Yesterday</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-2">Iremo Area</p>
                <div className="flex items-center gap-3">
                  <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Verified</span>
                  <span className="text-[10px] text-muted-foreground">+3 Contribution Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[320px] space-y-6 shrink-0">
        
        {/* Impact Summary */}
        <div className="bg-[#161B22] border border-primary/30 rounded-xl p-6 relative overflow-hidden shadow-[0_0_20px_rgba(229,195,135,0.05)]">
          <div className="absolute -right-6 -bottom-6 opacity-5">
            <Zap className="w-48 h-48" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-2 relative z-10">Impact Summary</h3>
          <p className="text-xs text-muted-foreground mb-8 leading-relaxed relative z-10">
            Your contributions directly improve the AI predictions for thousands of users.
          </p>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">320</p>
                <p className="text-xs text-muted-foreground">Members Helped</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">42</p>
                <p className="text-xs text-muted-foreground">Verified Updates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">18</p>
                <p className="text-xs text-muted-foreground">AI Predictions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings Menu */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 px-1">Account Settings</h3>
          <div className="bg-[#161B22] border border-[#1F2937] rounded-xl flex flex-col">
            <button className="flex items-center justify-between p-4 border-b border-[#1F2937] hover:bg-[#1A1D24] transition-colors rounded-t-xl group">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-white font-medium transition-colors">Personal Information</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
            <button className="flex items-center justify-between p-4 border-b border-[#1F2937] hover:bg-[#1A1D24] transition-colors group">
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-white font-medium transition-colors">Change Password</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
            <button className="flex items-center justify-between p-4 border-b border-[#1F2937] hover:bg-[#1A1D24] transition-colors group">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-white font-medium transition-colors">Language</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
            <button className="flex items-center justify-between p-4 border-b border-[#1F2937] hover:bg-[#1A1D24] transition-colors group">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-white font-medium transition-colors">Privacy & Security</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
            <button className="flex items-center justify-between p-4 border-b border-[#1F2937] hover:bg-[#1A1D24] transition-colors group">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-white font-medium transition-colors">Help & Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
            <button className="flex items-center justify-between p-4 hover:bg-[#1A1D24] transition-colors rounded-b-xl group">
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-white font-medium transition-colors">About PowerPadi</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Sign Out Button */}
        <Button 
          variant="outline" 
          onClick={handleSignOut}
          className="w-full bg-transparent border-[#EF4444]/20 text-[#EF4444] hover:bg-[#EF4444]/10 hover:border-[#EF4444]/40 h-12 rounded-xl transition-colors mt-8"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span className="font-semibold">Sign Out</span>
        </Button>

      </div>
    </div>
  )
}
