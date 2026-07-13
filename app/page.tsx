'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, MapPin, Zap, Users, Sun, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">PowerPadi</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Electricity Intelligence for Your Community
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Real-time power monitoring, community solar solutions, and grid intelligence to help you make smarter energy decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              Start Free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Smart Energy Management Made Simple
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* PowerWatch */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">PowerWatch</h3>
            <p className="text-muted-foreground">
              Live electricity status map showing real-time grid information and community power availability across your area.
            </p>
          </div>

          {/* SolarBulk */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors">
            <Sun className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">SolarBulk</h3>
            <p className="text-muted-foreground">
              Join group solar purchasing programs to get affordable shared solar solutions for your household or community.
            </p>
          </div>

          {/* PowerConnect */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-secondary/50 transition-colors">
            <Users className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">PowerConnect</h3>
            <p className="text-muted-foreground">
              Connect with technicians and vendors for maintenance, repairs, and technical support for your power systems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2.5M+</p>
              <p className="text-muted-foreground">Households Connected</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">15K+</p>
              <p className="text-muted-foreground">Communities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">99.8%</p>
              <p className="text-muted-foreground">Solar Reliability</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">32%</p>
              <p className="text-muted-foreground">Avg Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Join Thousands of Communities Already Using PowerPadi
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take control of your electricity intelligence and start saving with smart energy solutions.
        </p>
        <Link href="/signup">
          <Button size="lg">
            Get Started for Free
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary">PowerWatch</a></li>
                <li><a href="#" className="hover:text-primary">SolarBulk</a></li>
                <li><a href="#" className="hover:text-primary">PowerConnect</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PowerPadi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
