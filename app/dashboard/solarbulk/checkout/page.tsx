'use client'

import { ShoppingCart } from 'lucide-react'

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-4">
      <div className="w-16 h-16 bg-[#1A1D24] border border-[#2B303B] rounded-full flex items-center justify-center">
        <ShoppingCart className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-2xl font-bold text-white">Checkout Coming Soon</h1>
      <p className="text-muted-foreground max-w-sm">We are finalizing the payment and project commitment infrastructure.</p>
    </div>
  )
}
