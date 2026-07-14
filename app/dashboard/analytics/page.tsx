'use client'

import { useState } from 'react'
import { BarChart3, LineChart as LineChartIcon, Activity, Battery, Zap, DollarSign, ArrowUpRight, ArrowDownRight, Fuel, Sparkles, Clock } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const monthlyData = [
  { name: 'Jan', gridPower: 120, generatorPower: 80, fuelCost: 150000 },
  { name: 'Feb', gridPower: 150, generatorPower: 60, fuelCost: 110000 },
  { name: 'Mar', gridPower: 110, generatorPower: 100, fuelCost: 185000 },
  { name: 'Apr', gridPower: 180, generatorPower: 40, fuelCost: 80000 },
  { name: 'May', gridPower: 190, generatorPower: 30, fuelCost: 65000 },
  { name: 'Jun', gridPower: 210, generatorPower: 20, fuelCost: 45000 },
]

const hourlyData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  efficiency: 60 + Math.random() * 40
}))

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '12m'>('30d')

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Business Analytics</h1>
          <p className="text-muted-foreground mt-1">Track ROI, fuel consumption, and generator efficiency.</p>
        </div>
        <div className="flex bg-background border border-border rounded-lg p-1">
          {(['7d', '30d', '12m'] as const).map((range) => (
            <button 
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${timeRange === range ? 'bg-primary text-black' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '12 Months'}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Fuel Saved</CardTitle>
            <Fuel className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,240 Liters</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">12.5%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cost Avoidance</CardTitle>
            <DollarSign className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦954,000</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Grid Reliance</CardTitle>
            <Zap className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">68%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">4.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Gen Efficiency</CardTitle>
            <Activity className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">92%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDownRight className="w-3 h-3 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">1.5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Power Source Distribution (Hours)</CardTitle>
            <CardDescription>Compare grid availability vs generator usage over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGrid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#1F2937', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="gridPower" name="Grid (hrs)" stroke="#3b82f6" fillOpacity={1} fill="url(#colorGrid)" />
                  <Area type="monotone" dataKey="generatorPower" name="Generator (hrs)" stroke="#ef4444" fillOpacity={1} fill="url(#colorGen)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Generator Efficiency */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Avg Generator Efficiency</CardTitle>
            <CardDescription>Daily performance metrics.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="time" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} interval="preserveStartEnd" />
                  <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#1F2937', borderRadius: '8px' }}
                  />
                  <Line type="monotone" dataKey="efficiency" stroke="#E5C387" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#E5C387' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Fuel Expenditure */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Fuel Expenditure (₦)</CardTitle>
            <CardDescription>Monthly spending on diesel and petrol.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#1F2937', borderRadius: '8px' }}
                    cursor={{ fill: '#1F2937', opacity: 0.4 }}
                  />
                  <Bar dataKey="fuelCost" name="Cost (₦)" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              AI Recommendations <Sparkles className="w-4 h-4 text-primary" />
            </CardTitle>
            <CardDescription>Actionable insights to reduce costs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Battery className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Inverter Upgrade Recommended</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on your generator usage in March, upgrading your battery bank by 5kWh could save you ₦45,000 monthly in fuel.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto mt-2 font-semibold">View SolarBulk Deals</Button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border flex gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Optimal Running Time</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Grid power typically returns at 6:00 PM in your area. Consider delaying heavy machinery startup until after this time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  )
}
