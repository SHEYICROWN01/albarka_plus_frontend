import { useState } from "react";
import { Award, Plus, Edit, Trash2, Eye } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AddBrandDialog } from "@/components/admin/AddBrandDialog";

const AdminBrands = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  
  const brands = [
    { id: 1, name: "Samsung", products: 234, sales: 12500000, status: "active" },
    { id: 2, name: "Apple", products: 89, sales: 28500000, status: "active" },
    { id: 3, name: "HP", products: 156, sales: 18200000, status: "active" },
    { id: 4, name: "LG", products: 145, sales: 14800000, status: "active" },
    { id: 5, name: "Dell", products: 98, sales: 16700000, status: "active" },
    { id: 6, name: "Sony", products: 67, sales: 8900000, status: "active" },
    { id: 7, name: "Hisense", products: 112, sales: 7500000, status: "active" },
    { id: 8, name: "Xiaomi", products: 45, sales: 3200000, status: "inactive" },
  ];

  const getInitials = (name: string) => {
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Brands</h1>
            <p className="text-muted-foreground">Manage product brands and manufacturers</p>
          </div>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Brand
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Brands</p>
                  <p className="text-xl font-bold">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-green-700"></div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Brands</p>
                  <p className="text-xl font-bold">142</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-700"></div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Products</p>
                  <p className="text-xl font-bold">1,246</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-amber-700"></div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Top Performer</p>
                  <p className="text-lg font-bold">Apple</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Brands Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Brand</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Total Sales</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brands.map((brand) => (
                  <TableRow key={brand.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {getInitials(brand.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{brand.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{brand.products}</TableCell>
                    <TableCell>₦{brand.sales.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={brand.status === "active" ? "default" : "outline"}>
                        {brand.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <AddBrandDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </AdminLayout>
  );
};

export default AdminBrands;
