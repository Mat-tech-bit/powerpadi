'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Wrench, ShieldCheck, Clock, Star, Zap, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

export default function PowerConnectLanding() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary/30 pt-24 pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#0B0F19] to-[#0B0F19] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              PowerPadi Ecosystem
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Find Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Electricians</span> Near You.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Book verified electricians for electrical repairs, installations, maintenance, solar systems, inverter systems and emergency electrical services.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/dashboard/electricians" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-14 px-8 bg-primary text-black hover:bg-primary/90 font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(229,195,135,0.3)] hover:shadow-[0_0_40px_rgba(229,195,135,0.4)] transition-all">
                  Book an Electrician
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/signup" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 border-[#2B303B] hover:bg-[#1A1D24] text-white font-bold text-lg rounded-xl">
                  Become an Electrician
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="border-y border-[#1F2937] bg-[#0F1420]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1F2937]">
            <div className="text-center px-4">
              <div className="flex justify-center mb-2"><ShieldCheck className="w-6 h-6 text-primary" /></div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Verified Electricians</div>
            </div>
            <div className="text-center px-4">
              <div className="flex justify-center mb-2"><Wrench className="w-6 h-6 text-primary" /></div>
              <div className="text-3xl font-bold text-white mb-1">12,400+</div>
              <div className="text-sm text-muted-foreground">Completed Jobs</div>
            </div>
            <div className="text-center px-4">
              <div className="flex justify-center mb-2"><Star className="w-6 h-6 text-primary" /></div>
              <div className="text-3xl font-bold text-white mb-1">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center px-4">
              <div className="flex justify-center mb-2"><Clock className="w-6 h-6 text-primary" /></div>
              <div className="text-3xl font-bold text-white mb-1">&lt; 30 min</div>
              <div className="text-sm text-muted-foreground">Emergency Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How PowerConnect Works</h2>
            <p className="text-muted-foreground text-lg">Your electrical issues resolved in three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Search & Compare',
                desc: 'Browse through our directory of verified electricians in your area. Compare prices, ratings, and specialties.'
              },
              {
                step: '02',
                title: 'Book an Appointment',
                desc: 'Select a suitable time, describe your issue, and book instantly. Need urgent help? Use our emergency request.'
              },
              {
                step: '03',
                title: 'Get it Fixed',
                desc: 'Your electrician arrives on time. Pay securely through the platform only when the job is completely done.'
              }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-[#1A1D24] border border-[#2B303B] hover:border-primary/50 transition-colors group">
                <div className="text-6xl font-black text-[#0B0F19] absolute top-4 right-4 opacity-50 group-hover:text-primary/10 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3 mt-4 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Electricians */}
      <section className="py-24 bg-[#0F1420]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Experts</h2>
              <p className="text-muted-foreground text-lg">Top-rated professionals ready to help.</p>
            </div>
            <Link href="/dashboard/electricians">
              <Button variant="link" className="text-primary hover:text-primary/80 font-bold text-lg p-0">
                View All <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Oluwaseun Adewale', type: 'Solar & Inverter Expert', rating: '4.9', jobs: '342', img: '1' },
              { name: 'Chinedu Eze', type: 'Commercial Wiring', rating: '4.8', jobs: '210', img: '2' },
              { name: 'Fatima Ibrahim', type: 'Emergency Electrician', rating: '5.0', jobs: '156', img: '3' },
            ].map((prof, i) => (
              <div key={i} className="bg-[#1A1D24] border border-[#2B303B] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="h-32 bg-primary/10 relative">
                  <div className="absolute -bottom-10 left-6">
                    <img src={`https://i.pravatar.cc/150?u=${prof.img}`} alt={prof.name} className="w-20 h-20 rounded-xl object-cover border-4 border-[#1A1D24]" />
                  </div>
                </div>
                <div className="p-6 pt-14">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-white flex items-center gap-2">
                        {prof.name} <ShieldCheck className="w-4 h-4 text-green-500" />
                      </h3>
                      <p className="text-primary text-sm font-medium">{prof.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4 mb-6">
                    <span className="flex items-center gap-1 text-white font-medium"><Star className="w-4 h-4 fill-primary text-primary" /> {prof.rating}</span>
                    <span>{prof.jobs} jobs completed</span>
                  </div>
                  <Button className="w-full bg-[#2B303B] hover:bg-primary hover:text-black text-white font-medium transition-colors">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "My inverter stopped working at 8 PM. Found an expert on PowerConnect who arrived in 25 minutes. Absolutely a lifesaver!",
                author: "Kenneth O.",
                location: "Lekki, Lagos"
              },
              {
                text: "We used PowerConnect to find a contractor for our new office wiring. The transparency in pricing and the verified reviews made the decision so easy.",
                author: "Sarah A.",
                location: "Abuja"
              },
              {
                text: "Highly professional platform. The electrician was courteous, fixed the fault quickly, and I got a digital invoice immediately.",
                author: "Tunde M.",
                location: "Ikeja, Lagos"
              }
            ].map((test, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1A1D24] border border-[#2B303B]">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">"{test.text}"</p>
                <div>
                  <p className="font-bold text-white">{test.author}</p>
                  <p className="text-sm text-muted-foreground">{test.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to solve your electrical issues?</h2>
          <p className="text-xl text-muted-foreground mb-10">Join thousands of Nigerians using PowerConnect to find reliable electrical services.</p>
          <Link href="/dashboard/electricians">
            <Button className="h-16 px-10 bg-primary text-black hover:bg-primary/90 font-bold text-xl rounded-xl shadow-[0_0_30px_rgba(229,195,135,0.3)] transition-all">
              Find an Electrician Now
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}
