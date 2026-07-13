'use client'

import { useState, useEffect } from 'react'
import { Zap, MapPin, AlertCircle, CheckCircle, AlertTriangle, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GridNode {
  id: string
  name: string
  status: 'on' | 'off' | 'unstable'
  x: number
  y: number
  reliability: number
  households: number
}

export default function LiveMapPage() {
  const [selectedNode, setSelectedNode] = useState<GridNode | null>(null)
  const [nodes, setNodes] = useState<GridNode[]>([
    { id: '1', name: 'Victoria Island Hub', status: 'on', x: 50, y: 40, reliability: 94, households: 2500 },
    { id: '2', name: 'Ikoyi Node', status: 'on', x: 65, y: 35, reliability: 87, households: 1800 },
    { id: '3', name: 'Lekki Grid', status: 'unstable', x: 75, y: 50, reliability: 62, households: 3200 },
    { id: '4', name: 'Lagos Island', status: 'on', x: 45, y: 55, reliability: 91, households: 2100 },
    { id: '5', name: 'Apapa Station', status: 'off', x: 35, y: 60, reliability: 0, households: 1500 },
    { id: '6', name: 'Surulere Dist', status: 'on', x: 55, y: 70, reliability: 88, households: 2800 },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on':
        return 'text-green-500 bg-green-500/20'
      case 'off':
        return 'text-red-500 bg-red-500/20'
      case 'unstable':
        return 'text-yellow-500 bg-yellow-500/20'
      default:
        return 'text-gray-500 bg-gray-500/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on':
        return <CheckCircle className="w-5 h-5" />
      case 'off':
        return <AlertTriangle className="w-5 h-5" />
      case 'unstable':
        return <AlertCircle className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'on':
        return 'AVAILABLE'
      case 'off':
        return 'OFFLINE'
      case 'unstable':
        return 'UNSTABLE'
      default:
        return 'UNKNOWN'
    }
  }

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-4 sm:p-6 lg:p-8 border-b border-border bg-card">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Live Power Map</h1>
            <p className="text-sm text-muted-foreground mt-1">Real-time electricity status across your area</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search grid locations..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden p-4 sm:p-6 lg:p-8">
        {/* Map Area */}
        <div className="flex-1 bg-card border border-border rounded-lg p-8 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 100 100" style={{ backgroundColor: '#f5f5f5' }} preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e0e0e0" strokeWidth="0.05" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Connection lines between nodes */}
            {nodes.map((node, idx) =>
              nodes.slice(idx + 1).map((other) => (
                <line
                  key={`line-${node.id}-${other.id}`}
                  x1={node.x}
                  y1={node.y}
                  x2={other.x}
                  y2={other.y}
                  stroke="#d0d0d0"
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                />
              ))
            )}

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.id} onClick={() => setSelectedNode(node)} style={{ cursor: 'pointer' }}>
                {/* Ripple effect for active nodes */}
                {node.status === 'on' && (
                  <>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="0.2"
                      opacity="0.3"
                    >
                      <animate attributeName="r" from="3" to="6" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="1.5"
                  fill={
                    node.status === 'on'
                      ? '#22c55e'
                      : node.status === 'off'
                        ? '#ef4444'
                        : '#eab308'
                  }
                  stroke="white"
                  strokeWidth="0.15"
                />

                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + 2.5}
                  textAnchor="middle"
                  fontSize="0.6"
                  fill="#333"
                  style={{ pointerEvents: 'none' }}
                >
                  {node.name.split(' ')[0]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Sidebar */}
        <div className="w-80 flex flex-col gap-4 overflow-y-auto">
          {selectedNode ? (
            <>
              {/* Selected Node Details */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">{selectedNode.name}</h2>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <div className={`flex items-center gap-2 p-2 rounded ${getStatusColor(selectedNode.status)}`}>
                      {getStatusIcon(selectedNode.status)}
                      <span className="font-semibold">{getStatusLabel(selectedNode.status)}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Grid Reliability</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${selectedNode.reliability}%` }}
                        />
                      </div>
                      <span className="font-semibold text-foreground">{selectedNode.reliability}%</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Connected Households</p>
                    <p className="font-semibold text-foreground">{selectedNode.households.toLocaleString()}</p>
                  </div>

                  <Button className="w-full mt-4">Report Issue</Button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-muted border border-border rounded-lg p-6 text-center">
              <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Click on a grid node to view details</p>
            </div>
          )}

          {/* Legend */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Legend</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-foreground">Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-foreground">Unstable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-foreground">Offline</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Statistics</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Grid Nodes</p>
                <p className="text-2xl font-bold text-foreground">{nodes.length}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-green-500">
                  {nodes.filter((n) => n.status === 'on').length}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Households</p>
                <p className="text-2xl font-bold text-foreground">
                  {nodes.reduce((sum, n) => sum + n.households, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
