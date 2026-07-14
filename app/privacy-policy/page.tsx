import { ArrowLeft, Zap } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account, update your profile, use the interactive features of our services, or communicate with us. The types of information we may collect include your name, email address, phone number, location data, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information.</li>
              <li>Send technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. Location Information</h2>
            <p>
              PowerPadi relies on accurate location data to provide our PowerWatch reporting services. When you submit a power report, we collect your approximate location to update the community map. You can control location tracking through your device settings, but disabling it may limit your ability to use certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. Data Sharing</h2>
            <p>
              We do not share your personal information with third parties except in the following cases:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>With your consent or at your direction (e.g., sharing your details with an electrician you book via PowerConnect).</li>
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.
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
