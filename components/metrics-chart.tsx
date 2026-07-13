'use client';

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const PowerConsumptionChart = () => {
  const data = [
    { time: '12am', usage: 45, limit: 80 },
    { time: '4am', usage: 32, limit: 80 },
    { time: '8am', usage: 58, limit: 100 },
    { time: '12pm', usage: 95, limit: 120 },
    { time: '4pm', usage: 88, limit: 120 },
    { time: '8pm', usage: 110, limit: 150 },
    { time: '12am', usage: 62, limit: 80 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: `1px solid hsl(var(--border))`,
            borderRadius: '8px',
          }}
        />
        <Area
          type="monotone"
          dataKey="usage"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorUsage)"
        />
        <Line type="monotone" dataKey="limit" stroke="hsl(var(--destructive))" strokeDasharray="5 5" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const CommunityActivityChart = () => {
  const data = [
    { day: 'Mon', posts: 12, comments: 24 },
    { day: 'Tue', posts: 19, comments: 32 },
    { day: 'Wed', posts: 14, comments: 28 },
    { day: 'Thu', posts: 28, comments: 52 },
    { day: 'Fri', posts: 23, comments: 45 },
    { day: 'Sat', posts: 35, comments: 68 },
    { day: 'Sun', posts: 30, comments: 58 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: `1px solid hsl(var(--border))`,
            borderRadius: '8px',
          }}
        />
        <Bar dataKey="posts" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
        <Bar dataKey="comments" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const SolarGenerationChart = () => {
  const data = [
    { month: 'Jan', generated: 4000, avg: 3500 },
    { month: 'Feb', generated: 3800, avg: 3400 },
    { month: 'Mar', generated: 4500, avg: 4000 },
    { month: 'Apr', generated: 5200, avg: 4500 },
    { month: 'May', generated: 5800, avg: 5000 },
    { month: 'Jun', generated: 6200, avg: 5500 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: `1px solid hsl(var(--border))`,
            borderRadius: '8px',
          }}
        />
        <Line type="monotone" dataKey="generated" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="avg" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};
