'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle, Droplets, Map, Sparkles, Users, Zap, CheckCircle2, Home, Briefcase, Globe, BarChart3, ChevronRight, Sun } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary/30 overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 border-b border-[#1F2937] bg-[#0B0F19]/80 backdrop-blur-md z-50"
      >
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
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Never Guess <span className="text-primary">Power</span> Again.
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            PowerPadi helps families and businesses know when electricity is available, predict outages, and make smarter energy decisions through community-driven intelligence.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" className="border-[#2B303B] bg-[#1A1D24] text-white hover:bg-[#2B303B] font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
              View Live Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Dashboard Mockup Showcase */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full rounded-2xl md:rounded-[2rem] bg-[#161B22] border border-[#1F2937] p-2 md:p-4 shadow-2xl overflow-hidden group"
        >
          <img 
            src="/laptop.png" 
            alt="PowerPadi Dashboard on Laptop" 
            className="w-full h-auto rounded-xl md:rounded-[1.5rem] border border-[#2B303B] object-cover group-hover:scale-[1.02] transition-transform duration-700" 
          />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="px-6 max-w-6xl mx-auto pb-32 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Electricity shouldn't be a guessing game.</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-16">Traditional methods of checking power status are outdated and inefficient.</motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <motion.div variants={fadeUp} className="bg-[#161B22] border border-[#1F2937] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center mb-6">
                <Phone className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Calling neighbours</h3>
              <p className="text-muted-foreground leading-relaxed">Interrupting others just to check if the grid is live is tedious and unreliable.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-[#161B22] border border-[#1F2937] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center mb-6">
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Checking WhatsApp groups</h3>
              <p className="text-muted-foreground leading-relaxed">Sifting through hundreds of messages to find a simple update on power availability.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-[#161B22] border border-[#1F2937] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-[#2B303B] flex items-center justify-center mb-6">
                <Droplets className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wasting generator fuel</h3>
              <p className="text-muted-foreground leading-relaxed">Running expensive generators because you don't know the grid just came back online.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {/* Live Power Map */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Real-time Data
            </span>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Live Power Map</h3>
            <p className="text-muted-foreground text-lg max-w-md relative z-10">
              Visualize power distribution across your city in real-time. Know exactly where the grid is active before you head home or to the office.
            </p>
            
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[url('https://maps.wikimedia.org/osm-intl/14/8314/7918.png')] bg-cover opacity-20 rotate-12 rounded-3xl filter contrast-125 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* AI Predictions */}
          <motion.div variants={fadeUp} className="bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl group hover:border-primary/50 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Power Predictions</h3>
            <p className="text-muted-foreground">
              Our algorithms analyze community data to predict exactly when your neighborhood will experience outages with 89% accuracy.
            </p>
          </motion.div>

          {/* Community Solar */}
          <motion.div variants={fadeUp} className="bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl group hover:border-green-500/50 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community Solar</h3>
            <p className="text-muted-foreground">
              Unlock bulk-purchased solar at reduced rates. Group with neighbors to reduce individual energy costs.
            </p>
          </motion.div>

          {/* The Smarter Way */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-[#161B22] border border-[#1F2937] p-8 md:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-4">The Smarter Way to Power</h3>
              <p className="text-muted-foreground text-lg">
                Connect with thousands of users providing real-time data to create the most accurate energy network in Africa.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700 group-hover:text-primary">
              <Zap className="w-48 h-48" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How it Works</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 1, title: 'Report', desc: 'Users quickly report power status in their location via the app.' },
              { num: 2, title: 'Community Data', desc: 'Information is aggregated to create a massive database of live updates.' },
              { num: 3, title: 'AI Analysis', desc: 'Our algorithms analyze the patterns, factors and variables.' },
              { num: 4, title: 'Smarter Decisions', desc: 'You receive exactly when to automate other power sources.' }
            ].map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6 mx-auto sm:mx-0 shadow-[0_0_15px_rgba(229,195,135,0.2)]">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Showcase Rows */}
      <section className="px-6 max-w-6xl mx-auto pb-32 space-y-32">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full rounded-3xl overflow-hidden relative border border-[#1F2937] shadow-2xl bg-[#161B22]"
          >
            <img src="/monitor.png" alt="Real-time Dashboard Monitor" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="order-2 md:order-1 w-full rounded-3xl overflow-hidden relative border border-[#1F2937] shadow-2xl bg-[#161B22]"
          >
            <img src="/tablet.png" alt="Interactive Power Map Tablet" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interactive Power Map</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Search for any area and see the current status of the power grid. Essential for planning your day, meetings, or production schedules.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Explore the Map <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Built For */}
      <section className="bg-[#161B22] border-y border-[#1F2937] py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="px-6 max-w-6xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-16 text-center">Built for Energy Intelligence</motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Families</h3>
              <p className="text-muted-foreground leading-relaxed">
                Know when the grid is back so you can return home, charge devices, and plan meals without stress.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Businesses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimize operational costs by running heavy machinery only when grid power is available or predicted to be stable.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Communities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unite neighborhood resources to negotiate better deals on solar installations and joint maintenance services.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SolarBulk CTA */}
      <section className="px-6 max-w-6xl mx-auto py-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-[#161B22] border border-[#1F2937] rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden group"
        >
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
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "95%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-green-500 rounded-full" 
                />
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
            
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto hover:scale-105 transition-transform">
              Join Interest Group
            </Button>
          </div>
          
          <div className="lg:w-1/2 flex items-center justify-center relative z-10">
            <motion.div 
              animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center border-4 border-[#161B22] shadow-[0_0_50px_rgba(229,195,135,0.1)] group-hover:shadow-[0_0_80px_rgba(229,195,135,0.3)] transition-shadow duration-700"
            >
              <Sun className="w-32 h-32 text-primary" />
            </motion.div>
          </div>
          
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 max-w-4xl mx-auto pb-32 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to make smarter electricity decisions?</motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-10">
            Join 35,000+ Nigerians using PowerPadi to outsmart outages and save on energy costs.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-green-500 text-black hover:bg-green-400 font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
                Launch Dashboard
              </Button>
            </Link>
            <Button variant="outline" className="border-[#2B303B] bg-transparent text-white hover:bg-[#1A1D24] font-bold h-14 px-8 rounded-xl text-lg w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1F2937] bg-[#0B0F19] pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold text-white">PowerPadi</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Built for the housing deficit generation. Revolutionizing how we monitor electricity grids through community intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-3">
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
              
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Legal</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Twitter</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1F2937] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} PowerPadi. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#161B22] border border-[#2B303B] flex items-center justify-center hover:bg-[#1A1D24] transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#161B22] border border-[#2B303B] flex items-center justify-center hover:bg-[#1A1D24] transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
