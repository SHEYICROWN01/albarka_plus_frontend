import { Archive, AlertCircle, TrendingDown, Package } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminInventory = () => {
  const inventory = [
    { id: 1, product: "Samsung Galaxy A54", sku: "SAM-A54-BLK", stock: 45, reorderLevel: 20, branch: "All Branches", status: "in_stock" },
    { id: 2, product: "HP Pavilion Laptop 15", sku: "HP-PAV-15", stock: 23, reorderLevel: 15, branch: "Lagos Central", status: "in_stock" },
    { id: 3, product: "LG 55\" OLED Smart TV", sku: "LG-55-OLED", stock: 12, reorderLevel: 10, branch: "Abeokuta Main", status: "low_stock" },
    { id: 4, product: "iPhone 13 128GB", sku: "IPH-13-128", stock: 8, reorderLevel: 15, branch: "Ibadan Branch", status: "low_stock" },
    { id: 5, product: "Dell XPS 13", sku: "DEL-XPS-13", stock: 0, reorderLevel: 10, branch: "Port Harcourt", status: "out_of_stock" },
    { id: 6, product: "Samsung Washing Machine", sku: "SAM-WASH", stock: 0, reorderLevel: 5, branch: "Kano Branch", status: "out_of_stock" },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { variant: any; className?: string }> = {
      in_stock: { variant: "outline", className: "bg-green-50 text-green-700 border-green-200" },
      low_stock: { variant: "outline", className: "bg-amber-50 text-amber-700 border-amber-200" },
      out_of_stock: { variant: "destructive" },
    };

    const style = styles[status] || { variant: "outline" };
    return (
      <Badge variant={style.variant} className={style.className}>
        {status.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Inventory Management</h1>
            <p className="text-muted-foreground">Track stock levels across all branches</p>
          </div>
          <Button>Import Stock Update</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Archive className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Items</p>
                  <p className="text-xl font-bold">856</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Low Stock Alerts</p>
                  <p className="text-xl font-bold">28</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Out of Stock</p>
                  <p className="text-xl font-bold">14</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Package className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-xl font-bold">₦125M</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Reorder Level</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.product}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>
                      <span className={item.stock === 0 ? "text-destructive font-semibold" : item.stock <= item.reorderLevel ? "text-amber-600 font-semibold" : ""}>
                        {item.stock}
                      </span>
                    </TableCell>
                    <TableCell>{item.reorderLevel}</TableCell>
                    <TableCell>{item.branch}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Update Stock</Button>
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

export default AdminInventory;
