import { ShoppingBag, TrendingUp, AlertCircle, CheckCircle, Clock, DollarSign, Users, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminLayout from "@/layouts/AdminLayout";

const AdminDashboard = () => {
  const stats = [
    {
      icon: ShoppingBag,
      label: "Active Purchases",
      value: "342",
      change: "+15% this month",
      positive: true,
    },
    {
      icon: TrendingUp,
      label: "Gross Profit",
      value: "₦4.2M",
      change: "+8.1% this month",
      positive: true,
    },
    {
      icon: Package,
      label: "Outstanding",
      value: "₦2.8M",
      change: "-1.3% decrease",
      positive: true,
    },
    {
      icon: Users,
      label: "Active Customers",
      value: "2,847",
      change: "+12% this month",
      positive: true,
    },
    {
      icon: AlertCircle,
      label: "Delinquent Accounts",
      value: "42",
      change: "2.1% of total",
      positive: false,
    },
    {
      icon: ShoppingBag,
      label: "Avg Order Value",
      value: "₦385K",
      change: "+3.5% increase",
      positive: true,
    },
    {
      icon: DollarSign,
      label: "Collections Today",
      value: "₦856K",
      change: "From 23 payments",
      positive: true,
    },
    {
      icon: Clock,
      label: "Total Orders",
      value: "2,350",
      change: "+15% this month",
      positive: true,
    },
  ];

  // Revenue Over Time Data
  const revenueData = [
    { date: 'Oct 1', revenue: 450000 },
    { date: 'Oct 5', revenue: 520000 },
    { date: 'Oct 10', revenue: 680000 },
    { date: 'Oct 15', revenue: 620000 },
    { date: 'Oct 20', revenue: 750000 },
    { date: 'Oct 25', revenue: 890000 },
    { date: 'Oct 30', revenue: 920000 },
  ];

  // Orders by Category Data
  const categoryData = [
    { name: 'Electronics', value: 450 },
    { name: 'Appliances', value: 320 },
    { name: 'Furniture', value: 180 },
    { name: 'Fashion', value: 240 },
  ];

  // Payment Method Mix
  const paymentMixData = [
    { name: 'Cash', value: 60 },
    { name: 'Bank Transfer', value: 25 },
    { name: 'Card', value: 10 },
    { name: 'Agent Collection', value: 5 },
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', '#FF8C42'];

  const recentRequests = [
    {
      id: "REQ-1234",
      customer: "Adebayo Johnson",
      product: "Samsung Galaxy A54",
      amount: 285000,
      plan: "30 days",
      status: "pending",
      date: "2024-03-16",
    },
    {
      id: "REQ-1235",
      customer: "Chinwe Okafor",
      product: "HP Pavilion Laptop",
      amount: 520000,
      plan: "60 days",
      status: "pending",
      date: "2024-03-16",
    },
    {
      id: "REQ-1236",
      customer: "Ibrahim Musa",
      product: "LG 55\" Smart TV",
      amount: 450000,
      plan: "30 days",
      status: "approved",
      date: "2024-03-15",
    },
    {
      id: "REQ-1237",
      customer: "Blessing Eze",
      product: "iPhone 13",
      amount: 580000,
      plan: "60 days",
      status: "pending",
      date: "2024-03-15",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>;
      case "approved":
        return <Badge variant="default">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-heading font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor your business performance at a glance</p>
        </div>

        {/* KPI Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                    stat.positive ? "bg-primary/10" : "bg-destructive/10"
                  }`}>
                    <stat.icon className={`h-5 w-5 ${
                      stat.positive ? "text-primary" : "text-destructive"
                    }`} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className={`text-xs ${stat.positive ? "text-primary" : "text-muted-foreground"}`}>{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="date" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Orders by Category */}
          <Card>
            <CardHeader>
              <CardTitle>Orders by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Payment Mix & Recent Requests */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Payment Method Mix */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method Mix</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={paymentMixData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentMixData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Requests Table */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Credit Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentRequests.map((request) => (
                    <TableRow key={request.id} className="hover:bg-soft-blue/50">
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.customer}</TableCell>
                      <TableCell>{request.product}</TableCell>
                      <TableCell>₦{request.amount.toLocaleString()}</TableCell>
                      <TableCell>{request.plan}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell className="text-right">
                        {request.status === "pending" ? (
                          <div className="flex gap-2 justify-end">
                            <Button variant="default" size="sm">
                              <CheckCircle className="h-4 w-4" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm">
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Collection Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary mb-2">94.5%</div>
                <p className="text-sm text-muted-foreground">On-time payment rate this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">2,847</div>
                <p className="text-sm text-muted-foreground">Active customer accounts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Average Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-card-foreground mb-2">₦385K</div>
                <p className="text-sm text-muted-foreground">Per customer this quarter</p>
              </CardContent>
            </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
