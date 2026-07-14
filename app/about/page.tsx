import { ArrowLeft, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">About PowerPadi</h1>
          <p className="text-xl text-muted-foreground">
            Building Africa's largest digital energy ecosystem.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              PowerPadi is an AI-powered Community Energy Intelligence Platform designed to solve one of the biggest daily challenges: unreliable electricity. We are dedicated to providing real-time transparency, intelligent predictions, and a unified marketplace for all your energy needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">PowerWatch</h3>
                <p className="text-sm text-muted-foreground">
                  Crowdsourced, real-time electricity tracking and AI predictions for your community. Know exactly when the power is coming back.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">SolarBulk</h3>
                <p className="text-sm text-muted-foreground">
                  A community marketplace that makes renewable energy accessible through bulk purchasing and trusted providers.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">PowerConnect</h3>
                <p className="text-sm text-muted-foreground">
                  An on-demand marketplace connecting you with verified, top-rated electricians for any job, big or small.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Energy AI</h3>
                <p className="text-sm text-muted-foreground">
                  Intelligent assistants that help you optimize your generator usage, lower fuel costs, and determine your solar readiness.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where every home and business has the intelligence and resources they need to keep the lights on. PowerPadi isn't just an app; it's a movement towards energy democratization and reliability.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PowerPadi. All rights reserved.
      </footer>
    </div>
  )
}
