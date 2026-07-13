# PowerPadi - Electricity Intelligence Platform

A comprehensive web application for real-time electricity management, community power coordination, and renewable energy solutions.

## Overview

PowerPadi is a multi-role platform designed to serve residents, technicians, and vendors in managing electricity distribution and community solar solutions. It provides real-time power monitoring, group purchasing capabilities, and service coordination tools.

## Features

### For Residents
- **PowerWatch Live Map**: Real-time electricity status monitoring across your community grid
- **Usage Analytics**: Detailed power consumption patterns with smart recommendations
- **Community Feed**: Connect with neighbors to share experiences and collaborate
- **SolarBulk**: Group solar purchasing programs with professional installation

### For Technicians
- **Service Ticket Management**: Manage and track service requests from residents
- **Performance Tracking**: Monitor your earnings and customer satisfaction ratings
- **Real-time Updates**: Get instant notifications on new service requests

### For Vendors
- **Order Management**: Track orders from confirmation through delivery
- **Sales Analytics**: Monitor revenue trends and product performance
- **Customer Management**: Manage relationships with community organizations

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Components**: shadcn/ui with Tailwind CSS
- **Charts & Visualization**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **State Management**: Zustand for client-side state
- **Data Fetching**: SWR for client-side data fetching

## Project Structure

```
app/
├── page.tsx                 # Landing page
├── signin/page.tsx          # Sign in page
├── signup/page.tsx          # Sign up page (role selection)
├── features/page.tsx        # Features overview
├── dashboard/               # Resident dashboard
│   ├── layout.tsx           # Dashboard layout with sidebar
│   ├── page.tsx             # Main dashboard
│   ├── map/page.tsx         # PowerWatch live map
│   ├── community/page.tsx    # Community feed
│   └── solarbulk/           # SolarBulk marketplace
│       ├── page.tsx         # Projects and products
│       └── checkout/page.tsx # Checkout flow
├── technician/              # Technician dashboard
│   ├── page.tsx             # Overview
│   └── tickets/page.tsx      # Service ticket management
├── vendor/                  # Vendor dashboard
│   ├── page.tsx             # Overview
│   └── orders/page.tsx       # Order management
components/
├── ui/                      # shadcn/ui components
└── metrics-chart.tsx        # Custom chart components
```

## Key Pages

### Landing Page (`/`)
- Comprehensive hero section showcasing PowerPadi's value proposition
- Feature highlights for each product line
- Community statistics and testimonials
- Clear calls-to-action for signup

### Authentication
- **Sign Up** (`/signup`): Register with role selection (Resident/Technician/Vendor)
- **Sign In** (`/signin`): Secure login with form validation

### Resident Dashboard (`/dashboard`)
- **Overview**: Current power status, predictions, and community insights
- **PowerWatch Map** (`/dashboard/map`): Interactive grid visualization with real-time updates
- **Community** (`/dashboard/community`): Social feed for community engagement
- **SolarBulk** (`/dashboard/solarbulk`): Browse and purchase solar packages
- **Checkout** (`/dashboard/solarbulk/checkout`): Complete purchase flow with mock payment

### Technician Portal (`/technician`)
- **Dashboard**: Quick stats and key metrics
- **Service Tickets** (`/technician/tickets`): Full ticket management with filtering and status updates

### Vendor Portal (`/vendor`)
- **Dashboard**: Revenue and performance metrics
- **Orders** (`/vendor/orders`): Order tracking and status management

### Features Page (`/features`)
- Detailed overview of all platform capabilities
- Feature descriptions and benefits

## Design System

### Color Palette
- **Primary**: Green-based (oklch(0.45 0.22 142)) - Energy and sustainability
- **Secondary**: Blue (oklch(0.58 0.15 92)) - Trust and intelligence
- **Accent**: Green (oklch(0.7 0.18 92)) - Action and highlights
- **Neutral**: Grays for backgrounds and text

### Typography
- Geist Sans for body text
- Geist Mono for code elements
- Proper line heights and spacing for readability

### Components
Built with shadcn/ui including:
- Button, Input, Checkbox
- Card with Header/Content/Footer
- Badge for status indicators

## Features Implementation

### Mock Data
All data is currently mock-based for demonstration:
- Service tickets with realistic scenarios
- Solar projects with community interest levels
- Vendor orders with multiple statuses
- Community feed posts and engagement

### Interactive Elements
- Form validation with immediate feedback
- Status filtering and searching
- Real-time UI updates on user actions
- Smooth transitions and hover states

### Charts & Visualization
- Power consumption trends
- Community activity charts
- Solar generation metrics
- Interactive maps for grid visualization

## Getting Started

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Navigation

- **Landing**: [http://localhost:3000](http://localhost:3000)
- **Sign Up**: [http://localhost:3000/signup](http://localhost:3000/signup)
- **Sign In**: [http://localhost:3000/signin](http://localhost:3000/signin)
- **Features**: [http://localhost:3000/features](http://localhost:3000/features)
- **Resident Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Technician**: [http://localhost:3000/technician](http://localhost:3000/technician)
- **Vendor**: [http://localhost:3000/vendor](http://localhost:3000/vendor)

## User Flows

### Resident Flow
1. Landing page → Sign up (select Resident) → Dashboard
2. Explore PowerWatch map for real-time grid status
3. View usage analytics and get recommendations
4. Join community discussions
5. Browse and purchase solar packages via SolarBulk

### Technician Flow
1. Landing page → Sign up (select Technician) → Dashboard
2. View service tickets assigned to them
3. Update ticket status as work progresses
4. Receive customer ratings after completion
5. Track earnings and performance metrics

### Vendor Flow
1. Landing page → Sign up (select Vendor) → Dashboard
2. Manage incoming orders from communities
3. Update order statuses from pending to delivered
4. Monitor sales revenue and trends
5. Track performance metrics and product popularity

## Customization

### Adding Features
1. Create new routes in `app/[feature]/page.tsx`
2. Build components in `components/`
3. Use existing shadcn/ui components as base
4. Follow the design system colors and spacing

### Styling
- All styling uses Tailwind CSS utility classes
- Design tokens defined in `app/globals.css`
- Components follow shadcn/ui patterns
- Responsive design with mobile-first approach

## Future Enhancements

To make this production-ready, consider adding:

1. **Backend Integration**
   - Set up Supabase or Neon for persistent data storage
   - Implement authentication with Better Auth
   - Create API routes for data operations

2. **Real-time Features**
   - WebSocket integration for live updates
   - Server-sent events for notifications
   - Live map updates with real-time grid data

3. **Payments**
   - Stripe integration for SolarBulk checkout
   - Payment processing and webhooks
   - Invoice management

4. **Advanced Features**
   - Email notifications
   - Push notifications for mobile
   - Analytics dashboard
   - Advanced reporting
   - User profiles and settings

## Deployment

Deploy to Vercel:
```bash
vercel deploy
```

Or use the Vercel Dashboard to connect your GitHub repository for automatic deployments.

## License

This project is created as part of the TESA Hackathon.

## Support

For questions or support, please refer to the features page or contact the development team.
