import { useState } from "react";
import { DollarSign, CreditCard, Banknote, Users, TrendingUp, Plus } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RecordPaymentDialog } from "@/components/admin/RecordPaymentDialog";

const AdminPayments = () => {
  const [showRecordDialog, setShowRecordDialog] = useState(false);
  
  const payments = [
    { id: "PAY-5601", customer: "Adebayo Johnson", order: "ORD-2401", amount: 95000, method: "Cash", agent: "Agent Tunde", status: "completed", date: "2024-11-02 14:30" },
    { id: "PAY-5602", customer: "Chinwe Okafor", order: "ORD-2402", amount: 173000, method: "Bank Transfer", agent: "N/A", status: "completed", date: "2024-11-02 13:15" },
    { id: "PAY-5603", customer: "Ibrahim Musa", order: "ORD-2403", amount: 226000, method: "Card", agent: "N/A", status: "completed", date: "2024-11-02 11:45" },
    { id: "PAY-5604", customer: "Blessing Eze", order: "ORD-2404", amount: 193000, method: "Agent Collection", agent: "Agent Bola", status: "pending", date: "2024-11-02 10:20" },
    { id: "PAY-5605", customer: "Emeka Nwosu", order: "ORD-2405", amount: 250000, method: "Bank Transfer", agent: "N/A", status: "processing", date: "2024-11-02 09:00" },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { variant: any; className?: string }> = {
      completed: { variant: "outline", className: "bg-green-50 text-green-700 border-green-200" },
      pending: { variant: "outline", className: "bg-amber-50 text-amber-700 border-amber-200" },
      processing: { variant: "outline", className: "bg-blue-50 text-blue-700 border-blue-200" },
      failed: { variant: "destructive" },
    };

    const style = styles[status] || { variant: "outline" };
    return (
      <Badge variant={style.variant} className={style.className}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case "Cash":
        return <Banknote className="h-4 w-4" />;
      case "Card":
        return <CreditCard className="h-4 w-4" />;
      default:
        return <DollarSign className="h-4 w-4" />;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Payments & Collections</h1>
            <p className="text-muted-foreground">Track all payment transactions and collections</p>
          </div>
          <Button onClick={() => setShowRecordDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Record Payment
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Today's Collection</p>
                  <p className="text-xl font-bold">₦856K</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-xl font-bold">₦12.5M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Banknote className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cash Payments</p>
                  <p className="text-xl font-bold">₦5.2M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bank Transfers</p>
                  <p className="text-xl font-bold">₦6.8M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Transactions</p>
                  <p className="text-xl font-bold">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.customer}</TableCell>
                    <TableCell>{payment.order}</TableCell>
                    <TableCell className="font-semibold">₦{payment.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getMethodIcon(payment.method)}
                        <span>{payment.method}</span>
                      </div>
                    </TableCell>
                    <TableCell>{payment.agent}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View Receipt</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <RecordPaymentDialog open={showRecordDialog} onOpenChange={setShowRecordDialog} />
    </AdminLayout>
  );
};

export default AdminPayments;
