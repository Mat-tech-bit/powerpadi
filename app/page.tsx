'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle, Droplets, Map, Sparkles, Users, Zap, CheckCircle2, Home, Briefcase, Globe, BarChart3, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 border-b border-[#1F2937] bg-[#0B0F19]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">PowerPadi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#" className="text-white">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">How it Works</Link>
            <Link href="#" className="hover:text-white transition-colors">SolarBulk</Link>
            <Link href="#" className="hover:text-white transition-colors">News</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/signin">
              <Button variant="ghost" className="text-white hover:bg-[#1A1D24] hover:text-white">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold rounded-lg px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Never Guess <span className="text-primary">Power</span> Again.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          PowerPadi helps families and businesses know when electricity is available, predict outages, and make smarter energy decisions through community-driven intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Button variant="outline" className="border-[#2B303B] bg-[#1A1D24] text-white hover:bg-[#2B303B] font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
            View Live Demo
          </Button>
        </div>
      </section>

      {/* Dashboard Mockup Showcase */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <div className="w-full aspect-[16/9] rounded-2xl md:rounded-[2rem] bg-gradient-to-b from-[#161B22] to-[#0B0F19] border border-[#1F2937] p-2 md:p-4 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
          
          <div className="relative w-full h-full rounded-xl md:rounded-[1.5rem] border border-[#2B303B] bg-[#161B22] overflow-hidden flex flex-col">
            {/* Fake browser bar */}
            <div className="h-12 border-b border-[#2B303B] bg-[#0B0F19] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Mockup content */}
            <div className="flex-1 p-6 grid grid-cols-3 gap-6 opacity-80">
              <div className="col-span-2 space-y-4">
                <div className="h-32 rounded-xl bg-[#1A1D24] border border-[#2B303B]" />
                <div className="h-64 rounded-xl bg-[#1A1D24] border border-[#2B303B]" />
              </div>
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-[#1A1D24] border border-[#2B303B]" />
                <div className="h-48 rounded-xl bg-[#1A1D24] border border-[#2B303B]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 max-w-6xl mx-auto pb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Electricity shouldn't be a guessing game.</h2>
        <p className="text-muted-foreground mb-16">Traditional methods of checking power status are outdated and inefficient.</p>
        
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161B22] border border-[#1F2937] p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center mb-6">
              <Phone className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Calling neighbours</h3>
            <p className="text-muted-foreground leading-relaxed">Interrupting others just to check if the grid is live is tedious and unreliable.</p>
          </div>
          
          <div className="bg-[#161B22] border border-[#1F2937] p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center mb-6">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Checking WhatsApp groups</h3>
            <p className="text-muted-foreground leading-relaxed">Sifting through hundreds of messages to find a simple update on power availability.</p>
          </div>
          
          <div className="bg-[#161B22] border border-[#1F2937] p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center mb-6">
              <Droplets className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Wasting generator fuel</h3>
            <p className="text-muted-foreground leading-relaxed">Running expensive generators because you don't know the grid just came back online.</p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Live Power Map */}
          <div className="md:col-span-2 bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Real-time Data
            </span>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Live Power Map</h3>
            <p className="text-muted-foreground text-lg max-w-md relative z-10">
              Visualize power distribution across your city in real-time. Know exactly where the grid is active before you head home or to the office.
            </p>
            
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[url('https://maps.wikimedia.org/osm-intl/14/8314/7918.png')] bg-cover opacity-20 rotate-12 rounded-3xl filter contrast-125 group-hover:scale-110 transition-transform duration-700" />
          </div>

          {/* AI Predictions */}
          <div className="bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Power Predictions</h3>
            <p className="text-muted-foreground">
              Our algorithms analyze community data to predict exactly when your neighborhood will experience outages with 89% accuracy.
            </p>
          </div>

          {/* Community Solar */}
          <div className="bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community Solar</h3>
            <p className="text-muted-foreground">
              Unlock bulk-purchased solar at reduced rates. Group with neighbors to reduce individual energy costs.
            </p>
          </div>

          {/* The Smarter Way */}
          <div className="md:col-span-2 bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-4">The Smarter Way to Power</h3>
              <p className="text-muted-foreground text-lg">
                Connect with thousands of users providing real-time data to create the most accurate energy network in Africa.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 p-8 opacity-10">
              <Zap className="w-48 h-48 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How it Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6 mx-auto sm:mx-0">1</div>
            <h3 className="text-xl font-bold text-white mb-3">Report</h3>
            <p className="text-muted-foreground text-sm">Users quickly report power status in their location via the app.</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6 mx-auto sm:mx-0">2</div>
            <h3 className="text-xl font-bold text-white mb-3">Community Data</h3>
            <p className="text-muted-foreground text-sm">Information is aggregated to create a massive database of live updates.</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6 mx-auto sm:mx-0">3</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Analysis</h3>
            <p className="text-muted-foreground text-sm">Our algorithms analyze the patterns, factors and variables.</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6 mx-auto sm:mx-0">4</div>
            <h3 className="text-xl font-bold text-white mb-3">Smarter Decisions</h3>
            <p className="text-muted-foreground text-sm">You receive exactly when to automate other power sources.</p>
          </div>
        </div>
      </section>

      {/* Showcase Rows */}
      <section className="px-6 max-w-6xl mx-auto pb-32 space-y-32">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Real-time Dashboard</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a bird's-eye view of your home or business energy landscape. Track reliability scores and current status effortlessly.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                In-depth metrics monitoring
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                Instant mobile push notifications
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                Detailed monthly reliability reports
              </li>
            </ul>
          </div>
          <div className="w-full aspect-[4/3] bg-[#161B22] border border-[#1F2937] rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            {/* Mockup visual */}
            <div className="absolute inset-8 rounded-2xl bg-[#0B0F19] border border-[#2B303B] p-4 flex flex-col gap-4">
              <div className="h-8 w-1/3 bg-[#1A1D24] rounded-lg" />
              <div className="flex-1 bg-[#1A1D24] rounded-xl flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-primary/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 w-full aspect-[4/3] bg-[#161B22] border border-[#1F2937] rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <div className="absolute inset-0 bg-[url('https://maps.wikimedia.org/osm-intl/14/8314/7918.png')] bg-cover opacity-20 filter contrast-125" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary animate-ping" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interactive Power Map</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Search for any area and see the current status of the power grid. Essential for planning your day, meetings, or production schedules.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Explore the Map <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="bg-[#161B22] border-y border-[#1F2937] py-24">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Built for Energy Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Families</h3>
              <p className="text-muted-foreground leading-relaxed">
                Know when the grid is back so you can return home, charge devices, and plan meals without stress.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Businesses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimize operational costs by running heavy machinery only when grid power is available or predicted to be stable.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Communities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unite neighborhood resources to negotiate better deals on solar installations and joint maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SolarBulk CTA */}
      <section className="px-6 max-w-6xl mx-auto py-32">
        <div className="bg-[#161B22] border border-[#1F2937] rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="lg:w-1/2 relative z-10">
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-4 block">
              Community Solar
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Power Your Community for Less.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              SolarBulk aggregates demand from entire neighborhoods to secure wholesale pricing on high-quality solar panels and batteries.
            </p>
            
            <div className="bg-[#0B0F19] border border-[#2B303B] rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-white font-bold">Community Interest Score</span>
                <span className="text-green-500 font-bold">95%</span>
              </div>
              <div className="h-2 w-full bg-[#1A1D24] rounded-full overflow-hidden mb-6">
                <div className="h-full bg-green-500 w-[95%] rounded-full" />
              </div>
              
              <div className="flex items-center justify-between border-t border-[#1F2937] pt-4">
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Average Savings</p>
                  <p className="text-xl font-bold text-white">40%</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Active Members</p>
                  <p className="text-xl font-bold text-white">1,240+</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
              Join Interest Group
            </Button>
          </div>
          
          <div className="lg:w-1/2 flex items-center justify-center relative z-10">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center border-4 border-[#161B22] shadow-[0_0_50px_rgba(229,195,135,0.1)]">
              <Sun className="w-32 h-32 text-primary" />
            </div>
          </div>
          
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 max-w-4xl mx-auto pb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to make smarter electricity decisions?</h2>
        <p className="text-xl text-muted-foreground mb-10">
          Join 35,000+ Nigerians using PowerPadi to outsmart outages and save on energy costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button className="bg-green-500 text-black hover:bg-green-400 font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
              Launch Dashboard
            </Button>
          </Link>
          <Button variant="outline" className="border-[#2B303B] bg-transparent text-white hover:bg-[#1A1D24] font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1F2937] bg-[#0B0F19] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-white">PowerPadi</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Built for the housing deficit generation. Revolutionizing how we monitor electricity grids through community intelligence.
            </p>
            <p className="text-xs text-muted-foreground">© 2024 PowerPadi.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Live Map</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Predictions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
