import { Wallet, ShoppingBag, Calendar, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      icon: Wallet,
      label: "Savings Balance",
      value: "₦125,000",
      change: "+12%",
      positive: true,
    },
    {
      icon: ShoppingBag,
      label: "Active Purchases",
      value: "2",
      change: "In Progress",
      positive: true,
    },
    {
      icon: Calendar,
      label: "Next Payment",
      value: "₦9,500",
      change: "Due in 2 days",
      positive: false,
    },
    {
      icon: TrendingUp,
      label: "Total Owned",
      value: "₦450,000",
      change: "Lifetime",
      positive: true,
    },
  ];

  const activePurchases = [
    {
      id: "1",
      product: "Samsung Galaxy A54 5G",
      totalPrice: 285000,
      paidAmount: 171000,
      remainingAmount: 114000,
      dailyPayment: 9500,
      nextPaymentDate: "March 18, 2024",
      daysRemaining: 12,
      progress: 60,
    },
    {
      id: "2",
      product: "HP Pavilion 15 Laptop",
      totalPrice: 520000,
      paidAmount: 104000,
      remainingAmount: 416000,
      dailyPayment: 17333,
      nextPaymentDate: "March 18, 2024",
      daysRemaining: 24,
      progress: 20,
    },
  ];

  const upcomingPayments = [
    { date: "Mar 18", amount: 9500, product: "Samsung Galaxy A54", status: "upcoming" },
    { date: "Mar 18", amount: 17333, product: "HP Pavilion Laptop", status: "upcoming" },
    { date: "Mar 19", amount: 9500, product: "Samsung Galaxy A54", status: "scheduled" },
    { date: "Mar 19", amount: 17333, product: "HP Pavilion Laptop", status: "scheduled" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 bg-gradient-soft">
        <div className="container">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">Welcome back, Adebayo!</h1>
            <p className="text-muted-foreground">Here's your savings and purchase summary</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-soft-blue flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant={stat.positive ? "default" : "secondary"} className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Active Purchases */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-bold">Active Purchases</h2>
                <Link to="/catalog">
                  <Button variant="secondary" size="sm">
                    <Plus className="h-4 w-4" />
                    Request New
                  </Button>
                </Link>
              </div>

              {activePurchases.map((purchase) => (
                <Card key={purchase.id} className="hover:shadow-card transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{purchase.product}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {purchase.daysRemaining} days remaining
                        </p>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Payment Progress</span>
                        <span className="font-semibold">{purchase.progress}%</span>
                      </div>
                      <Progress value={purchase.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Paid</p>
                        <p className="font-semibold text-secondary">₦{purchase.paidAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Remaining</p>
                        <p className="font-semibold">₦{purchase.remainingAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Daily Payment</p>
                        <p className="font-semibold">₦{purchase.dailyPayment.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Next Payment</p>
                        <p className="font-semibold">{purchase.nextPaymentDate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Payments */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Payments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingPayments.map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-soft-blue"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{payment.product}</p>
                        <p className="text-xs text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">₦{payment.amount.toLocaleString()}</p>
                        <Badge
                          variant={payment.status === "upcoming" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="/catalog">
                    <Button variant="outline" className="w-full justify-start">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Request New Item
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="h-4 w-4 mr-2" />
                    Top-up Savings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Full History
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
