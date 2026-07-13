'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Package, BarChart3, ShoppingCart, Users, TrendingUp, Zap, Plus, Eye } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  category: string
  price: number
  sales: number
  rating: number
  inStock: number
  image: string
}

export default function VendorDashboard() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 'P001',
      name: 'Solar Panel 400W',
      category: 'Solar Panels',
      price: 85000,
      sales: 24,
      rating: 4.8,
      inStock: 15,
      image: '☀️',
    },
    {
      id: 'P002',
      name: 'Hybrid Inverter 5KW',
      category: 'Inverters',
      price: 450000,
      sales: 12,
      rating: 4.9,
      inStock: 8,
      image: '⚡',
    },
    {
      id: 'P003',
      name: 'Lithium Battery 10KWh',
      category: 'Batteries',
      price: 850000,
      sales: 8,
      rating: 4.7,
      inStock: 5,
      image: '🔋',
    },
    {
      id: 'P004',
      name: 'Charge Controller MPPT 60A',
      category: 'Controllers',
      price: 125000,
      sales: 18,
      rating: 4.6,
      inStock: 22,
      image: '🔌',
    },
  ])

  const totalSales = products.reduce((sum, p) => sum + (p.price * p.sales), 0)
  const totalRevenue = totalSales

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Vendor Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your products and sales</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-primary">₦{(totalRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-xs text-green-500 mt-2">↑ 12% this month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Sales</p>
            <p className="text-3xl font-bold text-secondary">{products.reduce((sum, p) => sum + p.sales, 0)}</p>
            <p className="text-xs text-green-500 mt-2">↑ 8 new orders</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Active Products</p>
            <p className="text-3xl font-bold text-accent">{products.length}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Average Rating</p>
            <p className="text-3xl font-bold text-foreground">4.75/5</p>
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Products</h2>
            <Button gap="2">
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-3xl">{product.image}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Price</p>
                    <p className="text-lg font-bold text-foreground">₦{(product.price / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">In Stock</p>
                    <p className="text-lg font-bold text-primary">{product.inStock}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Total Sales</p>
                    <p className="text-lg font-bold text-secondary">{product.sales}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rating</p>
                    <p className="text-lg font-bold text-accent">★ {product.rating}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                  <Button size="sm" className="flex-1">View Stats</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orders */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Orders</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-semibold">Order ID</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold">Product</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold">Customer</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold">Amount</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-4 font-semibold text-foreground">ORD-2024-001</td>
                    <td className="p-4 text-foreground">Solar Panel 400W</td>
                    <td className="p-4 text-foreground">Adekunle Adeyemi</td>
                    <td className="p-4 text-foreground">₦85,000</td>
                    <td className="p-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-600 text-xs font-semibold">Delivered</span></td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-4 font-semibold text-foreground">ORD-2024-002</td>
                    <td className="p-4 text-foreground">Hybrid Inverter 5KW</td>
                    <td className="p-4 text-foreground">Chioma Williams</td>
                    <td className="p-4 text-foreground">₦450,000</td>
                    <td className="p-4"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-600 text-xs font-semibold">Processing</span></td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-4 font-semibold text-foreground">ORD-2024-003</td>
                    <td className="p-4 text-foreground">Lithium Battery 10KWh</td>
                    <td className="p-4 text-foreground">David Okafor</td>
                    <td className="p-4 text-foreground">₦850,000</td>
                    <td className="p-4"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-600 text-xs font-semibold">Shipped</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <ShoppingCart className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Manage Inventory</h3>
            <p className="text-sm text-muted-foreground mb-4">Update product stocks and pricing</p>
            <Button variant="outline" size="sm" className="w-full">Go to Inventory</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <BarChart3 className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-semibold text-foreground mb-2">View Analytics</h3>
            <p className="text-sm text-muted-foreground mb-4">Track sales trends and performance</p>
            <Button variant="outline" size="sm" className="w-full">View Analytics</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <Users className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Customer Reviews</h3>
            <p className="text-sm text-muted-foreground mb-4">Manage feedback and ratings</p>
            <Button variant="outline" size="sm" className="w-full">View Reviews</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
