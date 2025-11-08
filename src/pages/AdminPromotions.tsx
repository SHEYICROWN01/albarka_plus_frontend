import { useState } from "react";
import { Percent, Plus, Calendar, Tag } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreatePromotionDialog } from "@/components/admin/CreatePromotionDialog";

const AdminPromotions = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  
  const promotions = [
    { id: 1, name: "Black Friday Sale", type: "Percentage Discount", discount: "20%", products: 234, startDate: "2024-11-24", endDate: "2024-11-30", status: "scheduled" },
    { id: 2, name: "New Customer Offer", type: "Fixed Amount", discount: "₦50,000", products: "All", startDate: "2024-11-01", endDate: "2024-12-31", status: "active" },
    { id: 3, name: "Electronics Flash Sale", type: "Percentage Discount", discount: "15%", products: 89, startDate: "2024-10-15", endDate: "2024-10-31", status: "expired" },
    { id: 4, name: "Christmas Special", type: "Buy One Get One", discount: "BOGO", products: 45, startDate: "2024-12-01", endDate: "2024-12-25", status: "scheduled" },
    { id: 5, name: "Weekend Deal", type: "Percentage Discount", discount: "10%", products: 156, startDate: "2024-11-02", endDate: "2024-11-03", status: "active" },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { variant: any; className?: string }> = {
      active: { variant: "outline", className: "bg-green-50 text-green-700 border-green-200" },
      scheduled: { variant: "outline", className: "bg-blue-50 text-blue-700 border-blue-200" },
      expired: { variant: "outline", className: "bg-gray-50 text-gray-700 border-gray-200" },
    };

    const style = styles[status] || { variant: "outline" };
    return (
      <Badge variant={style.variant} className={style.className}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Promotions & Deals</h1>
            <p className="text-muted-foreground">Manage promotional campaigns and special offers</p>
          </div>
          <Button onClick={() => setShowCreateDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Promotion
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Percent className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Promotions</p>
                  <p className="text-xl font-bold">47</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Tag className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Percent className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Savings</p>
                  <p className="text-xl font-bold">₦8.5M</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promotions Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Promotions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {promotions.map((promo) => (
                  <TableRow key={promo.id}>
                    <TableCell className="font-medium">{promo.name}</TableCell>
                    <TableCell>{promo.type}</TableCell>
                    <TableCell className="font-semibold">{promo.discount}</TableCell>
                    <TableCell>{promo.products}</TableCell>
                    <TableCell>{promo.startDate}</TableCell>
                    <TableCell>{promo.endDate}</TableCell>
                    <TableCell>{getStatusBadge(promo.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <CreatePromotionDialog open={showCreateDialog} onOpenChange={setShowCreateDialog} />
    </AdminLayout>
  );
};

export default AdminPromotions;
