'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

const CHECKOUT_PACKAGE = {
  name: 'Premium Solar Package (12x Group)',
  description: '12-unit bulk purchase for community members',
  price: 2400,
  perUnit: 200,
  units: 12,
  savings: 600,
  installationDate: '2024-08-15',
  warrantyYears: 25,
};

export default function CheckoutPage() {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !fullName || !email || !address) {
      alert('Please fill in all fields');
      return;
    }
    setStep('confirmation');
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">Thank you for joining our sustainable energy community</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-semibold text-foreground">#SB-2024-78652</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">July 13, 2024</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-foreground mb-3">Package Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">{CHECKOUT_PACKAGE.units} × {CHECKOUT_PACKAGE.name}</span>
                    <span className="font-semibold text-foreground">${CHECKOUT_PACKAGE.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Community Savings</span>
                    <span className="font-semibold">-${CHECKOUT_PACKAGE.savings}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground">Installation Date</span>
                  <span className="font-semibold text-foreground">{CHECKOUT_PACKAGE.installationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Warranty</span>
                  <span className="font-semibold text-foreground">{CHECKOUT_PACKAGE.warrantyYears} Years</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total Paid</span>
                  <span className="text-2xl font-bold text-primary">${CHECKOUT_PACKAGE.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Next Steps</p>
                <p className="text-sm text-blue-800">Our installation team will contact you within 24 hours to schedule your solar panel installation. Check your email for confirmation details.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/dashboard/solarbulk" className="flex-1">
              <Button variant="outline" className="w-full">
                Back to SolarBulk
              </Button>
            </Link>
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard/solarbulk" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to SolarBulk
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Package</p>
                  <p className="font-semibold text-foreground">{CHECKOUT_PACKAGE.name}</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">{CHECKOUT_PACKAGE.units} units</span>
                    <span className="font-semibold text-foreground">${CHECKOUT_PACKAGE.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span className="font-semibold">-${CHECKOUT_PACKAGE.savings}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Eco Credit</span>
                    <span className="font-semibold">+50 pts</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-foreground font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">${CHECKOUT_PACKAGE.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Installation and warranty included</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Details */}
            {step === 'details' && (
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>Enter your details to proceed with checkout</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      value={fullName.split(' ')[0] || ''}
                      onChange={(e) => setFullName(e.target.value + ' ' + (fullName.split(' ')[1] || ''))}
                      className="bg-input"
                    />
                    <Input
                      placeholder="Last Name"
                      value={fullName.split(' ')[1] || ''}
                      onChange={(e) => setFullName((fullName.split(' ')[0] || '') + ' ' + e.target.value)}
                      className="bg-input"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-input"
                  />
                  <Input
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-input"
                  />
                  <Button className="w-full" onClick={() => setStep('payment')}>
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Payment Details */}
            {step === 'payment' && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>Enter your card details to complete the purchase</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Card Number</label>
                    <Input
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      maxLength={19}
                      className="bg-input font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Expiry Date</label>
                      <Input
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(formatExpiry(e.target.value))}
                        maxLength={5}
                        className="bg-input font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">CVV</label>
                      <Input
                        type="password"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.slice(0, 3))}
                        maxLength={3}
                        className="bg-input font-mono"
                      />
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-900">✓ Secure payment processed with SSL encryption</p>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" onClick={() => setStep('details')}>
                      Back
                    </Button>
                    <Button className="flex-1" onClick={handlePayment}>
                      Complete Purchase
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
