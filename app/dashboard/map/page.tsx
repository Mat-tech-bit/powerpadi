'use client'

import { useState } from 'react'
import { Zap, MapPin, AlertCircle, CheckCircle, AlertTriangle, Search, Filter, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GridNode {
  id: string
  name: string
  status: 'on' | 'off' | 'unstable'
  x: number
  y: number
  reliability: number
  households: number
  lastUpdated: string
}

export default function LiveMapPage() {
  const [selectedNode, setSelectedNode] = useState<GridNode | null>(null)
  const [nodes, setNodes] = useState<GridNode[]>([
    { id: '1', name: 'Victoria Island Hub', status: 'on', x: 50, y: 40, reliability: 94, households: 2500, lastUpdated: '2m ago' },
    { id: '2', name: 'Ikoyi Node', status: 'on', x: 65, y: 35, reliability: 87, households: 1800, lastUpdated: '5m ago' },
    { id: '3', name: 'Lekki Grid', status: 'unstable', x: 75, y: 50, reliability: 62, households: 3200, lastUpdated: '1m ago' },
    { id: '4', name: 'Lagos Island', status: 'on', x: 45, y: 55, reliability: 91, households: 2100, lastUpdated: '8m ago' },
    { id: '5', name: 'Apapa Station', status: 'off', x: 35, y: 60, reliability: 0, households: 1500, lastUpdated: 'Just now' },
    { id: '6', name: 'Surulere Dist', status: 'on', x: 55, y: 70, reliability: 88, households: 2800, lastUpdated: '12m ago' },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on':
        return 'text-green-500 bg-green-500/10 border-green-500/20'
      case 'off':
        return 'text-red-500 bg-red-500/10 border-red-500/20'
      case 'unstable':
        return 'text-[#E5C387] bg-[#E5C387]/10 border-[#E5C387]/20'
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/20'
    }
  }

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'on':
        return 'bg-green-500'
      case 'off':
        return 'bg-red-500'
      case 'unstable':
        return 'bg-[#E5C387]'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="h-[calc(100vh-80px)] -m-6 flex flex-col md:flex-row bg-[#0B0F19]">
      
      {/* Left Control Panel */}
      <div className="w-full md:w-[380px] bg-[#161B22] border-r border-[#1F2937] flex flex-col h-full shrink-0 z-10">
        <div className="p-6 border-b border-[#1F2937]">
          <h1 className="text-2xl font-bold text-white mb-2">Live Power Map</h1>
          <p className="text-sm text-muted-foreground mb-6">Real-time electricity status across the Lagos grid network.</p>
          
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search grid locations..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1A1D24] border border-[#2B303B] text-white placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <Button variant="outline" className="w-10 px-0 bg-[#1A1D24] border-[#2B303B] text-white hover:bg-[#2B303B] shrink-0">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
          
          {/* Node List */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Active Grid Nodes</h3>
            <div className="space-y-3">
              {nodes.map(node => (
                <div 
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedNode?.id === node.id 
                      ? 'bg-[#1A1D24] border-primary shadow-[0_0_15px_rgba(229,195,135,0.1)]' 
                      : 'bg-[#1A1D24] border-[#2B303B] hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{node.name}</h4>
                    <span className="text-[10px] text-muted-foreground">{node.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${getStatusDot(node.status)} ${node.status === 'on' ? 'animate-pulse' : ''}`} />
                        <span className="text-xs font-medium text-muted-foreground capitalize">{node.status}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-white">{node.reliability}% Rel.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Map Legend</h3>
            <div className="bg-[#1A1D24] border border-[#2B303B] rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-sm text-white font-medium">Available (Power On)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E5C387] shadow-[0_0_10px_rgba(229,195,135,0.5)]"></div>
                <span className="text-sm text-white font-medium">Unstable / Fluctuation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <span className="text-sm text-white font-medium">Offline (Outage)</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Grid Statistics</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1A1D24] border border-[#2B303B] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white mb-1">{nodes.filter((n) => n.status === 'on').length}/{nodes.length}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Nodes Online</p>
              </div>
              <div className="bg-[#1A1D24] border border-[#2B303B] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary mb-1">
                  {(nodes.reduce((sum, n) => sum + n.reliability, 0) / nodes.length).toFixed(0)}%
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Avg Reliability</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative overflow-hidden bg-[#0a0f1c] outline-none">
        
        {/* Map UI Controls */}
        <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
          <Button variant="outline" className="w-10 h-10 p-0 bg-[#161B22]/80 backdrop-blur-md border-[#2B303B] text-white hover:bg-[#2B303B] rounded-lg">
            +
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 bg-[#161B22]/80 backdrop-blur-md border-[#2B303B] text-white hover:bg-[#2B303B] rounded-lg">
            -
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 bg-[#161B22]/80 backdrop-blur-md border-[#2B303B] text-white hover:bg-[#2B303B] rounded-lg mt-4">
            <Layers className="w-4 h-4" />
          </Button>
        </div>

        {/* Selected Node Overlay */}
        {selectedNode && (
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 z-20 bg-[#161B22]/90 backdrop-blur-xl border border-primary/50 rounded-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-bold text-white">{selectedNode.name}</h2>
              <button onClick={() => setSelectedNode(null)} className="text-muted-foreground hover:text-white transition-colors">✕</button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Status</span>
                <div className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border ${getStatusColor(selectedNode.status)}`}>
                  {selectedNode.status}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Reliability</span>
                <span className="text-sm font-bold text-white">{selectedNode.reliability}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Households</span>
                <span className="text-sm font-bold text-white">{selectedNode.households.toLocaleString()}</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-primary text-black hover:bg-primary/90 font-semibold">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Issue Here
            </Button>
          </div>
        )}

        {/* SVG Map Rendering */}
        <svg className="w-full h-full cursor-crosshair" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          
          {/* Background Grid Pattern */}
          <defs>
            <pattern id="grid-pattern" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#1F2937" strokeWidth="0.1" opacity="0.3" />
            </pattern>
            
            {/* Glowing filters */}
            <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-yellow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />

          {/* Connection lines between nodes */}
          {nodes.map((node, idx) =>
            nodes.slice(idx + 1).map((other) => {
              // Only draw lines if they are close enough
              const dist = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
              if (dist > 30) return null
              
              const isSelected = selectedNode?.id === node.id || selectedNode?.id === other.id
              const isActive = node.status === 'on' && other.status === 'on'

              return (
                <line
                  key={`line-${node.id}-${other.id}`}
                  x1={node.x}
                  y1={node.y}
                  x2={other.x}
                  y2={other.y}
                  stroke={isSelected ? '#E5C387' : isActive ? '#22c55e' : '#1F2937'}
                  strokeWidth={isSelected ? "0.4" : "0.2"}
                  strokeDasharray={isActive ? "" : "1,1"}
                  opacity={isSelected ? 0.8 : 0.4}
                  style={{ transition: 'all 0.3s ease' }}
                />
              )
            })
          )}

          {/* Nodes */}
          {nodes.map((node) => {
            const isSelected = selectedNode?.id === node.id
            const glowFilter = node.status === 'on' ? 'url(#glow-green)' : node.status === 'off' ? 'url(#glow-red)' : 'url(#glow-yellow)'
            
            return (
              <g 
                key={node.id} 
                onClick={() => setSelectedNode(node)} 
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                transform={isSelected ? `scale(1.1) translate(${-node.x * 0.1}, ${-node.y * 0.1})` : ''}
              >
                {/* Ping animation for active nodes */}
                {node.status === 'on' && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="2.5"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="0.3"
                    opacity="0.5"
                  >
                    <animate attributeName="r" from="2.5" to="6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Selection Ring */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="3.5"
                    fill="none"
                    stroke="#E5C387"
                    strokeWidth="0.3"
                    className="animate-spin-slow"
                    strokeDasharray="2,1"
                  />
                )}

                {/* Inner Node Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? "1.8" : "1.2"}
                  fill={
                    node.status === 'on' ? '#22c55e' : 
                    node.status === 'off' ? '#ef4444' : 
                    '#E5C387'
                  }
                  filter={glowFilter}
                />

                {/* Label Background */}
                <rect
                  x={node.x - 6}
                  y={node.y + 2}
                  width="12"
                  height="2.5"
                  rx="0.5"
                  fill="#0B0F19"
                  opacity="0.8"
                  style={{ pointerEvents: 'none' }}
                />

                {/* Label Text */}
                <text
                  x={node.x}
                  y={node.y + 3.8}
                  textAnchor="middle"
                  fontSize="1.2"
                  fontWeight={isSelected ? "bold" : "normal"}
                  fill={isSelected ? "#E5C387" : "#F3F4F6"}
                  style={{ pointerEvents: 'none', transition: 'all 0.3s ease' }}
                >
                  {node.name.split(' ')[0]}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
