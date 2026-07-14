'use client'

import { useState } from 'react'
import { Search, ShieldCheck, XCircle, CheckCircle2, FileText, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mockProviders = [
  { id: '1', name: 'Oluwaseun Adewale', type: 'Individual', status: 'Pending', date: 'Oct 24, 2024', documents: 3 },
  { id: '2', name: 'PowerTech Solutions', type: 'Company', status: 'Approved', date: 'Oct 20, 2024', documents: 5 },
  { id: '3', name: 'Chinedu Eze', type: 'Individual', status: 'Pending', date: 'Oct 22, 2024', documents: 2 },
  { id: '4', name: 'Global Energy Ltd', type: 'Company', status: 'Suspended', date: 'Sep 15, 2024', documents: 4 },
]

export default function AdminProvidersPage() {
  const [activeTab, setActiveTab] = useState<'All' | 'Pending' | 'Approved' | 'Suspended'>('Pending')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = mockProviders.filter(p => 
    (activeTab === 'All' || p.status === activeTab) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Provider Approvals</h1>
          <p className="text-muted-foreground mt-1">Review KYC, verify certificates, and manage provider statuses.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex bg-background border border-border rounded-lg p-1 w-full md:w-auto overflow-x-auto">
            {['All', 'Pending', 'Approved', 'Suspended'].map(tab => (
              <button 
                key={tab}
                className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-red-500 text-white' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search providers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background border-border"
              />
            </div>
            <Button variant="outline" size="icon" className="border-border shrink-0"><Filter className="w-4 h-4" /></Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-background border-y border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Provider Name</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Documents</th>
                <th className="px-6 py-4 font-medium">Date Applied</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-foreground">{p.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.type}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-primary"><FileText className="w-4 h-4" /> {p.documents} files</span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{p.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={`
                      ${p.status === 'Approved' ? 'text-green-500 border-green-500/30 bg-green-500/10' : ''}
                      ${p.status === 'Pending' ? 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10' : ''}
                      ${p.status === 'Suspended' ? 'text-red-500 border-red-500/30 bg-red-500/10' : ''}
                    `}>
                      {p.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="outline" size="sm" className="border-border text-muted-foreground">Review</Button>
                    {p.status === 'Pending' && (
                      <>
                        <Button size="sm" className="bg-green-500 text-white hover:bg-green-600 font-bold"><CheckCircle2 className="w-4 h-4 mr-1" /> Approve</Button>
                      </>
                    )}
                    {p.status === 'Approved' && (
                      <Button size="sm" variant="outline" className="border-red-500/30 text-red-500 hover:bg-red-500/10 font-bold"><XCircle className="w-4 h-4 mr-1" /> Suspend</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground border-b border-border">
              No providers found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
