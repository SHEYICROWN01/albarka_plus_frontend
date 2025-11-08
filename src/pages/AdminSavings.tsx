import { Wallet, TrendingUp, Users, DollarSign } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const AdminSavings = () => {
  const savingsPlans = [
    { id: 1, customer: "Adebayo Johnson", planType: "Target Savings", target: 500000, saved: 125000, frequency: "Weekly", status: "active", maturityDate: "2025-06-15" },
    { id: 2, customer: "Chinwe Okafor", planType: "Flexible Savings", target: 800000, saved: 480000, frequency: "Monthly", status: "active", maturityDate: "2025-08-20" },
    { id: 3, customer: "Ibrahim Musa", planType: "Target Savings", target: 350000, saved: 350000, frequency: "Bi-Weekly", status: "completed", maturityDate: "2024-10-30" },
    { id: 4, customer: "Blessing Eze", planType: "Daily Savings", target: 1000000, saved: 680000, frequency: "Daily", status: "active", maturityDate: "2025-12-01" },
    { id: 5, customer: "Emeka Nwosu", planType: "Target Savings", target: 600000, saved: 150000, frequency: "Monthly", status: "active", maturityDate: "2025-07-15" },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { variant: any; className?: string }> = {
      active: { variant: "default" },
      completed: { variant: "outline", className: "bg-green-50 text-green-700 border-green-200" },
      paused: { variant: "outline", className: "bg-amber-50 text-amber-700 border-amber-200" },
    };

    const style = styles[status] || { variant: "outline" };
    return (
      <Badge variant={style.variant} className={style.className}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  const getProgress = (saved: number, target: number) => {
    return Math.round((saved / target) * 100);
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2">Savings & Plans</h1>
          <p className="text-muted-foreground">Monitor customer savings and target plans</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Savings</p>
                  <p className="text-xl font-bold">₦45.2M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Savers</p>
                  <p className="text-xl font-bold">1,845</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-xl font-bold">₦8.5M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Balance</p>
                  <p className="text-xl font-bold">₦24.5K</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Savings Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Plan Type</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Saved</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Maturity Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {savingsPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium">{plan.customer}</TableCell>
                    <TableCell>{plan.planType}</TableCell>
                    <TableCell>₦{plan.target.toLocaleString()}</TableCell>
                    <TableCell>₦{plan.saved.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={getProgress(plan.saved, plan.target)} className="w-20" />
                        <span className="text-xs text-muted-foreground">{getProgress(plan.saved, plan.target)}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{plan.frequency}</TableCell>
                    <TableCell>{plan.maturityDate}</TableCell>
                    <TableCell>{getStatusBadge(plan.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSavings;
