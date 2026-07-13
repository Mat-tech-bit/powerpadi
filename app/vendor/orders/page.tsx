'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Package, TrendingUp, DollarSign, Clock, User } from 'lucide-react';

interface VendorOrder {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  totalValue: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  orderDate: string;
  expectedDelivery: string;
}

const MOCK_ORDERS: VendorOrder[] = [
  {
    id: 'ORD-2024-001',
    customerName: 'Mayfair Estate Comm.',
    productName: 'Premium Solar Panels (400W)',
    quantity: 28,
    totalValue: 3920000,
    status: 'shipped',
    orderDate: '2024-07-05',
    expectedDelivery: '2024-07-20',
  },
  {
    id: 'ORD-2024-002',
    customerName: 'Ikoyi Community',
    productName: 'Hybrid Inverter (48V 10kW)',
    quantity: 15,
    totalValue: 1575000,
    status: 'confirmed',
    orderDate: '2024-07-08',
    expectedDelivery: '2024-07-25',
  },
  {
    id: 'ORD-2024-003',
    customerName: 'Lekki Phase 1',
    productName: 'Battery Storage System (15kWh)',
    quantity: 20,
    totalValue: 5000000,
    status: 'pending',
    orderDate: '2024-07-13',
    expectedDelivery: '2024-08-02',
  },
  {
    id: 'ORD-2024-004',
    customerName: 'Victoria Island Corp.',
    productName: 'Installation Kit & Cables',
    quantity: 50,
    totalValue: 750000,
    status: 'delivered',
    orderDate: '2024-07-01',
    expectedDelivery: '2024-07-10',
  },
  {
    id: 'ORD-2024-005',
    customerName: 'Yaba District',
    productName: 'Monitoring System & Meter',
    quantity: 35,
    totalValue: 1400000,
    status: 'delivered',
    orderDate: '2024-06-28',
    expectedDelivery: '2024-07-12',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-green-500/20 text-green-600';
    case 'shipped':
      return 'bg-blue-500/20 text-blue-600';
    case 'confirmed':
      return 'bg-yellow-500/20 text-yellow-600';
    case 'pending':
      return 'bg-gray-500/20 text-gray-600';
    default:
      return 'bg-gray-500/20 text-gray-600';
  }
};

export default function VendorOrdersPage() {
  const [orders, setOrders] = useState<VendorOrder[]>(MOCK_ORDERS);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter((order) => {
    const matchesFilter = filter === 'all' || order.status === filter;
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.productName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalValue, 0);
  const deliveredCount = orders.filter((o) => o.status === 'delivered').length;
  const pendingCount = orders.filter((o) => o.status === 'pending').length;
  const averageOrderValue = (totalRevenue / orders.length).toFixed(0);

  const updateOrderStatus = (id: string, newStatus: VendorOrder['status']) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-2">Manage and track all customer orders and shipments</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-primary">₦{(totalRevenue / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="w-8 h-8 text-primary opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg. Order Value</p>
                <p className="text-2xl font-bold text-secondary">₦{Number(averageOrderValue) / 1000}K</p>
              </div>
              <TrendingUp className="w-8 h-8 text-secondary opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Delivered</p>
                <p className="text-2xl font-bold text-green-600">{deliveredCount}</p>
              </div>
              <Package className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Orders</CardTitle>
          <CardDescription>Search and filter orders by status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Search by customer, order ID, or product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-input"
          />

          <div className="flex gap-2 flex-wrap">
            {['all', 'pending', 'confirmed', 'shipped', 'delivered'].map((status) => (
              <Button
                key={status}
                variant={filter === status ? 'default' : 'outline'}
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status === 'all' ? 'All Orders' : status}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{order.id}</h3>
                      <Badge className={getStatusColor(order.status)} variant="outline">
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground">{order.productName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">₦{(order.totalValue / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-muted-foreground mt-1">Qty: {order.quantity}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Customer</p>
                    <p className="font-medium text-foreground text-sm">{order.customerName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Order Date</p>
                    <p className="font-medium text-foreground text-sm">{order.orderDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Expected Delivery</p>
                    <p className="font-medium text-foreground text-sm">{order.expectedDelivery}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Unit Price</p>
                    <p className="font-medium text-foreground text-sm">₦{(order.totalValue / order.quantity / 1000).toFixed(0)}K</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t">
                  {order.status === 'pending' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateOrderStatus(order.id, 'confirmed')}
                    >
                      Confirm Order
                    </Button>
                  )}
                  {order.status === 'confirmed' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateOrderStatus(order.id, 'shipped')}
                    >
                      Mark as Shipped
                    </Button>
                  )}
                  {order.status === 'shipped' && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => updateOrderStatus(order.id, 'delivered')}
                    >
                      Mark as Delivered
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
