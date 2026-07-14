'use client'

import { ArrowLeft, Zap, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">PowerPadi</span>
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Get in touch with the PowerPadi team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">support@powerpadi.com</p>
                    <p className="text-muted-foreground">partnerships@powerpadi.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+234 (0) 800 000 0000</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground">Victoria Island, Lagos</p>
                    <p className="text-muted-foreground">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-500 mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-4">Thanks for reaching out. Our team will get back to you shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <Input id="name" required className="bg-input border-border" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <Input id="email" type="email" required className="bg-input border-border" placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <Input id="subject" required className="bg-input border-border" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5}
                    className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PowerPadi. All rights reserved.
      </footer>
    </div>
  )
}
