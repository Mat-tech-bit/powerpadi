'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Zap, Users, TrendingUp, Award, Check, ShoppingCart, MapPin, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

interface SolarProject {
  id: string
  name: string
  location: string
  status: 'open' | 'closing' | 'active'
  households: number
  maxHouseholds: number
  costPerKw: number
  estimatedMonthlySavings: number
  reliability: number
  roi: number
  interestCount: number
}

export default function SolarBulkPage() {
  const [projects, setProjects] = useState<SolarProject[]>([
    {
      id: '1',
      name: 'Mayfair Estate Phase II',
      location: 'Victoria Island, Lagos',
      status: 'open',
      households: 28,
      maxHouseholds: 50,
      costPerKw: 450000,
      estimatedMonthlySavings: 32,
      reliability: 99.8,
      roi: 5.2,
      interestCount: 28,
    },
    {
      id: '2',
      name: 'Ikoyi Community Solar',
      location: 'Ikoyi, Lagos',
      status: 'closing',
      households: 45,
      maxHouseholds: 50,
      costPerKw: 425000,
      estimatedMonthlySavings: 35,
      reliability: 99.9,
      roi: 4.8,
      interestCount: 45,
    },
    {
      id: '3',
      name: 'Lekki Phase 1 Grid',
      location: 'Lekki, Lagos',
      status: 'active',
      households: 52,
      maxHouseholds: 50,
      costPerKw: 470000,
      estimatedMonthlySavings: 30,
      reliability: 99.7,
      roi: 5.5,
      interestCount: 52,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-500/20 text-green-600'
      case 'closing':
        return 'bg-yellow-500/20 text-yellow-600'
      case 'active':
        return 'bg-primary/20 text-primary'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open':
        return 'Accepting Interests'
      case 'closing':
        return 'Closing Soon'
      case 'active':
        return 'Active Project'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">SolarBulk</h1>
        <p className="text-muted-foreground mt-2">Group solar purchasing power for affordable community renewable energy</p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Power Your Home with Solar</h2>
            <p className="text-muted-foreground mb-6">
              Join community solar programs and enjoy affordable renewable energy solutions with group purchasing power.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Reduced installation costs through group bulk purchasing</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Professional installation and ongoing maintenance</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Up to 35% monthly savings on electricity bills</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">99.8% system reliability guarantee</span>
              </div>
            </div>

            <Link href="/dashboard/solarbulk/checkout">
              <Button size="lg" className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                Browse Projects
              </Button>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-40 h-40 bg-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-2">☀️</p>
                <p className="text-sm font-semibold text-accent">Renewable Energy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Projects</p>
          <p className="text-3xl font-bold text-foreground">{projects.length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Households</p>
          <p className="text-3xl font-bold text-primary">{projects.reduce((sum, p) => sum + p.households, 0)}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Avg. ROI</p>
          <p className="text-3xl font-bold text-accent">5.2 yrs</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Avg. Savings</p>
          <p className="text-3xl font-bold text-secondary">32%</p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Active Projects</h2>

        {projects.map((project) => (
          <div key={project.id} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Household Interest</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(project.households / project.maxHouseholds) * 100}%` }}
                        />
                      </div>
                      <span className="font-semibold text-foreground">{project.households}/{project.maxHouseholds}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Cost per KW</p>
                  <p className="text-lg font-bold text-foreground">₦{(project.costPerKw / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Monthly Savings</p>
                  <p className="text-lg font-bold text-primary">{project.estimatedMonthlySavings}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Reliability</p>
                  <p className="text-lg font-bold text-secondary">{project.reliability}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">ROI</p>
                  <p className="text-lg font-bold text-accent">{project.roi} yrs</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={`/dashboard/solarbulk/${project.id}`} className="flex-1">
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
              {project.status === 'open' || project.status === 'closing' ? (
                <Button className="flex-1 gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Join Interest List
                </Button>
              ) : (
                <Button disabled className="flex-1">Active Project</Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SolarBulk Advantages */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">SolarBulk Advantages</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-muted rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Community Power</h3>
            <p className="text-sm text-muted-foreground">
              Leverage collective buying power to negotiate better rates with manufacturers and installers.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Maximum Savings</h3>
            <p className="text-sm text-muted-foreground">
              Reduce per-unit costs by up to 40% compared to individual installations.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">High ROI</h3>
            <p className="text-sm text-muted-foreground">
              Recover your investment in 4-6 years with guaranteed system reliability.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Energy Independence</h3>
            <p className="text-sm text-muted-foreground">
              Reduce reliance on grid power and enjoy uninterrupted electricity supply.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Professional Support</h3>
            <p className="text-sm text-muted-foreground">
              Expert installation, maintenance, and 24/7 technical support from certified professionals.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Quick Installation</h3>
            <p className="text-sm text-muted-foreground">
              Streamlined community installation process - get solar online faster.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Go Solar?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of households enjoying clean, reliable, and affordable solar energy through SolarBulk community programs.
        </p>
        <Button size="lg" className="gap-2">
          <ShoppingCart className="w-4 h-4" />
          Explore Solar Projects
        </Button>
      </div>
    </div>
  )
}
