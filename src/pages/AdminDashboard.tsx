import { Users, ShoppingBag, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";

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
      label: "Today's Collections",
      value: "₦8.5M",
      change: "From 156 payments",
      positive: true,
    },
    {
      icon: Clock,
      label: "Pending Approvals",
      value: "28",
      change: "Requires attention",
      positive: false,
    },
    {
      icon: AlertCircle,
      label: "Past Due",
      value: "12",
      change: "Follow-up needed",
      positive: false,
    },
  ];

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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 bg-gradient-soft">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage credit requests and monitor system performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      stat.positive ? "bg-secondary/10" : "bg-destructive/10"
                    }`}>
                      <stat.icon className={`h-6 w-6 ${
                        stat.positive ? "text-secondary" : "text-destructive"
                      }`} />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-card-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Requests Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Credit Requests</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
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

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
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
      </main>
    </div>
  );
};

export default AdminDashboard;
