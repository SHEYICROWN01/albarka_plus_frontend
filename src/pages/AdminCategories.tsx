import { useState } from "react";
import { FolderTree, Plus, Edit, Trash2, GripVertical } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AddCategoryDialog } from "@/components/admin/AddCategoryDialog";

const AdminCategories = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  
  const categories = [
    { id: 1, name: "Electronics", parent: null, products: 456, status: "active" },
    { id: 2, name: "Phones & Tablets", parent: "Electronics", products: 234, status: "active" },
    { id: 3, name: "Laptops & Computers", parent: "Electronics", products: 156, status: "active" },
    { id: 4, name: "TVs & Audio", parent: "Electronics", products: 66, status: "active" },
    { id: 5, name: "Home Appliances", parent: null, products: 189, status: "active" },
    { id: 6, name: "Kitchen Appliances", parent: "Home Appliances", products: 98, status: "active" },
    { id: 7, name: "Furniture", parent: null, products: 145, status: "active" },
    { id: 8, name: "Fashion", parent: null, products: 67, status: "inactive" },
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Categories</h1>
            <p className="text-muted-foreground">Organize your product catalog</p>
          </div>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FolderTree className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Categories</p>
                  <p className="text-xl font-bold">47</p>
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
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-xl font-bold">42</p>
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
                  <p className="text-sm text-muted-foreground">Parent Categories</p>
                  <p className="text-xl font-bold">12</p>
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
                  <p className="text-sm text-muted-foreground">Sub-Categories</p>
                  <p className="text-xl font-bold">35</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Parent Category</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                    </TableCell>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.parent || "—"}</TableCell>
                    <TableCell>{category.products}</TableCell>
                    <TableCell>
                      <Badge variant={category.status === "active" ? "default" : "outline"}>
                        {category.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
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
      
      <AddCategoryDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </AdminLayout>
  );
};

export default AdminCategories;
