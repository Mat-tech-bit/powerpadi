import { ArrowLeft, Zap } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the PowerPadi platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. Description of Service</h2>
            <p>
              PowerPadi provides a community-driven electricity tracking platform, a marketplace for electricians (PowerConnect), and a community solar purchasing tool (SolarBulk). We do not guarantee the absolute accuracy of crowdsourced power reports or AI predictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. PowerConnect and SolarBulk Transactions</h2>
            <p>
              PowerPadi acts as an intermediary marketplace. Contracts for electrical services or solar installations are made directly between the User and the Provider (Electrician or Solar Company). PowerPadi is not liable for the quality of services rendered or goods provided by third parties, though we maintain strict verification processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. Acceptable Use</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Submit false power reports or spam the community feed.</li>
              <li>Harass, abuse, or harm other users or service providers.</li>
              <li>Violate any local, state, national, or international law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">6. Modifications</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
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
