'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MapPin, Clock, User, MessageSquare, CheckCircle2, AlertCircle, Zap } from 'lucide-react';

interface ServiceTicket {
  id: string;
  customerId: string;
  customerName: string;
  location: string;
  status: 'pending' | 'assigned' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  issueType: string;
  description: string;
  createdAt: string;
  assignedTo?: string;
  rating?: number;
}

const MOCK_TICKETS: ServiceTicket[] = [
  {
    id: 'TK-2024-001',
    customerId: 'C-001',
    customerName: 'Adekunle Johnson',
    location: 'Victoria Island, Lagos',
    status: 'completed',
    priority: 'medium',
    issueType: 'Power Outage',
    description: 'Complete power loss in residential area',
    createdAt: '2024-07-12',
    assignedTo: 'You',
    rating: 5,
  },
  {
    id: 'TK-2024-002',
    customerId: 'C-002',
    customerName: 'Zainab Okafor',
    location: 'Ikoyi, Lagos',
    status: 'in-progress',
    priority: 'high',
    issueType: 'Voltage Fluctuation',
    description: 'Erratic voltage causing appliance damage',
    createdAt: '2024-07-13',
    assignedTo: 'You',
  },
  {
    id: 'TK-2024-003',
    customerId: 'C-003',
    customerName: 'Chioma Adeyemi',
    location: 'Lekki, Lagos',
    status: 'pending',
    priority: 'low',
    issueType: 'Meter Issue',
    description: 'Meter not registering consumption correctly',
    createdAt: '2024-07-13',
  },
  {
    id: 'TK-2024-004',
    customerId: 'C-004',
    customerName: 'Mohammed Hassan',
    location: 'Yaba, Lagos',
    status: 'assigned',
    priority: 'high',
    issueType: 'Service Connection',
    description: 'Requesting new service connection',
    createdAt: '2024-07-13',
    assignedTo: 'Segun Oduola',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/20 text-green-600';
    case 'in-progress':
      return 'bg-blue-500/20 text-blue-600';
    case 'assigned':
      return 'bg-yellow-500/20 text-yellow-600';
    case 'pending':
      return 'bg-gray-500/20 text-gray-600';
    default:
      return 'bg-gray-500/20 text-gray-600';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-500/20 text-red-600';
    case 'medium':
      return 'bg-orange-500/20 text-orange-600';
    case 'low':
      return 'bg-blue-500/20 text-blue-600';
    default:
      return 'bg-gray-500/20 text-gray-600';
  }
};

export default function ServiceTicketsPage() {
  const [tickets, setTickets] = useState<ServiceTicket[]>(MOCK_TICKETS);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTickets = tickets.filter((ticket) => {
    const matchesFilter = filter === 'all' || ticket.status === filter;
    const matchesSearch =
      ticket.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const updateTicketStatus = (id: string, newStatus: ServiceTicket['status']) => {
    setTickets(tickets.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const completedCount = tickets.filter((t) => t.status === 'completed').length;
  const inProgressCount = tickets.filter((t) => t.status === 'in-progress').length;
  const pendingCount = tickets.filter((t) => t.status === 'pending').length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Service Tickets</h1>
        <p className="text-muted-foreground mt-2">Manage and track electrical service requests from your community</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Total Tickets</p>
              <p className="text-3xl font-bold text-foreground">{tickets.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <p className="text-3xl font-bold text-green-600">{completedCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">In Progress</p>
              <p className="text-3xl font-bold text-blue-600">{inProgressCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Tickets</CardTitle>
          <CardDescription>Filter and search your service tickets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Search by customer name, ticket ID, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-input"
          />

          <div className="flex gap-2 flex-wrap">
            {['all', 'pending', 'assigned', 'in-progress', 'completed'].map((status) => (
              <Button
                key={status}
                variant={filter === status ? 'default' : 'outline'}
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status === 'all' ? 'All Tickets' : status.replace('-', ' ')}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.length === 0 ? (
          <Card>
            <CardContent className="pt-8 text-center">
              <AlertCircle className="w-12 h-12 mx-auto text-muted-foreground mb-3 opacity-50" />
              <p className="text-muted-foreground">No tickets found</p>
            </CardContent>
          </Card>
        ) : (
          filteredTickets.map((ticket) => (
            <Card key={ticket.id} className="hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{ticket.id}</h3>
                        <Badge className={getStatusColor(ticket.status)} variant="outline">
                          {ticket.status.replace('-', ' ')}
                        </Badge>
                        <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                          {ticket.priority}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground">{ticket.issueType}</p>
                      <p className="text-sm text-muted-foreground mt-1">{ticket.description}</p>
                    </div>
                    {ticket.rating && (
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end">
                          {Array(ticket.rating)
                            .fill(0)
                            .map((_, i) => (
                              <span key={i} className="text-yellow-400">
                                ★
                              </span>
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Customer rating</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Customer</p>
                        <p className="font-medium text-foreground">{ticket.customerName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground text-xs">{ticket.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Created</p>
                        <p className="font-medium text-foreground">{ticket.createdAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Assigned To</p>
                        <p className="font-medium text-foreground">{ticket.assignedTo || 'Unassigned'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3 border-t">
                    {ticket.status === 'pending' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateTicketStatus(ticket.id, 'assigned')}
                      >
                        Assign to Me
                      </Button>
                    )}
                    {ticket.status === 'assigned' && ticket.assignedTo === 'You' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateTicketStatus(ticket.id, 'in-progress')}
                      >
                        Start Work
                      </Button>
                    )}
                    {ticket.status === 'in-progress' && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => updateTicketStatus(ticket.id, 'completed')}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Mark Complete
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
