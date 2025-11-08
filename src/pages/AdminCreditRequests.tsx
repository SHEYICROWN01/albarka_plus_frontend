import { FileCheck, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminCreditRequests = () => {
  const requests = [
    { 
      id: "REQ-2401", 
      customer: "Adebayo Johnson", 
      product: "Samsung Galaxy A54", 
      amount: 285000, 
      deposit: 85000, 
      term: "30 days", 
      savings: 125000,
      creditScore: 85,
      status: "pending", 
      date: "2024-11-02" 
    },
    { 
      id: "REQ-2402", 
      customer: "Chinwe Okafor", 
      product: "HP Pavilion Laptop", 
      amount: 520000, 
      deposit: 156000, 
      term: "60 days", 
      savings: 480000,
      creditScore: 92,
      status: "pending", 
      date: "2024-11-02" 
    },
    { 
      id: "REQ-2403", 
      customer: "Ibrahim Musa", 
      product: "LG 55\" Smart TV", 
      amount: 680000, 
      deposit: 204000, 
      term: "30 days", 
      savings: 350000,
      creditScore: 78,
      status: "approved", 
      date: "2024-11-01" 
    },
    { 
      id: "REQ-2404", 
      customer: "Blessing Eze", 
      product: "iPhone 13", 
      amount: 580000, 
      deposit: 174000, 
      term: "60 days", 
      savings: 680000,
      creditScore: 95,
      status: "pending", 
      date: "2024-11-01" 
    },
    { 
      id: "REQ-2405", 
      customer: "Emeka Nwosu", 
      product: "Dell XPS 13", 
      amount: 750000, 
      deposit: 225000, 
      term: "90 days", 
      savings: 180000,
      creditScore: 65,
      status: "review", 
      date: "2024-11-01" 
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { variant: any; className?: string }> = {
      pending: { variant: "outline", className: "bg-amber-50 text-amber-700 border-amber-200" },
      approved: { variant: "outline", className: "bg-green-50 text-green-700 border-green-200" },
      rejected: { variant: "destructive" },
      review: { variant: "outline", className: "bg-blue-50 text-blue-700 border-blue-200" },
    };

    const style = styles[status] || { variant: "outline" };
    return (
      <Badge variant={style.variant} className={style.className}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  const getCreditScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2">Credit Requests</h1>
          <p className="text-muted-foreground">Review and approve customer credit applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Requests</p>
                  <p className="text-xl font-bold">342</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-xl font-bold">28</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-xl font-bold">289</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                  <p className="text-xl font-bold">25</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Under Review</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requests Table */}
        <Card>
          <CardHeader>
            <CardTitle>Credit Requests Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="review">Under Review</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Deposit</TableHead>
                      <TableHead>Savings</TableHead>
                      <TableHead>Credit Score</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.customer}</TableCell>
                        <TableCell>{request.product}</TableCell>
                        <TableCell>₦{request.amount.toLocaleString()}</TableCell>
                        <TableCell>₦{request.deposit.toLocaleString()}</TableCell>
                        <TableCell>₦{request.savings.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`font-semibold ${getCreditScoreColor(request.creditScore)}`}>
                            {request.creditScore}
                          </span>
                        </TableCell>
                        <TableCell>{request.term}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell className="text-right">
                          {request.status === "pending" ? (
                            <div className="flex gap-2 justify-end">
                              <Button variant="default" size="sm">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button variant="outline" size="sm">
                                Reject
                              </Button>
                            </div>
                          ) : (
                            <Button variant="ghost" size="sm">View Details</Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminCreditRequests;
