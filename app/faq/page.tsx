import { ArrowLeft, Zap, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: "What is PowerPadi?",
    answer: "PowerPadi is an AI-powered Community Energy Intelligence Platform. We provide real-time updates on electricity availability in your area, connect you with verified electricians, and offer community solar purchasing options."
  },
  {
    question: "How does PowerWatch work?",
    answer: "PowerWatch relies on crowdsourced reports from residents in your community. When users report that power is on or off, our live map updates instantly. Our AI then analyzes this historical data to predict when power is likely to be restored."
  },
  {
    question: "Is PowerPadi free to use?",
    answer: "Yes, the core tracking and community reporting features for residents are completely free. Businesses and service providers (Electricians, Solar Companies) may have premium tools available to them."
  },
  {
    question: "How do I book an electrician?",
    answer: "Through our PowerConnect marketplace, you can search for verified electricians in your area, view their ratings and past work, and book them directly for routine or emergency services."
  },
  {
    question: "What is SolarBulk?",
    answer: "SolarBulk allows neighbors and communities to group together to purchase solar installations in bulk from verified vendors. This significantly lowers the cost of hardware and installation for everyone involved."
  },
  {
    question: "Are the electricians verified?",
    answer: "Yes. Every electrician on PowerConnect undergoes a background check and credential verification process to ensure your safety and the quality of their work."
  }
]

export default function FAQPage() {
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

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about PowerPadi.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2 flex justify-between items-center">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
            Contact Us
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PowerPadi. All rights reserved.
      </footer>
    </div>
  )
}
