import { useState } from "react";
import { Building2, MapPin, Users, TrendingUp, Plus } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AddBranchDialog } from "@/components/admin/AddBranchDialog";

const AdminBranches = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  
  const branches = [
    { id: 1, name: "Abeokuta Main", address: "Omida Shopping Complex, Abeokuta", manager: "Manager Adebayo", agents: 12, customers: 456, revenue: 12500000, status: "active" },
    { id: 2, name: "Ibadan Branch", address: "Ring Road, Ibadan", manager: "Manager Chinwe", agents: 9, customers: 342, revenue: 9800000, status: "active" },
    { id: 3, name: "Lagos Central", address: "Allen Avenue, Lagos", manager: "Manager Tunde", agents: 15, customers: 678, revenue: 18900000, status: "active" },
    { id: 4, name: "Kano Branch", address: "Sabon Gari, Kano", manager: "Manager Ibrahim", agents: 8, customers: 298, revenue: 7500000, status: "active" },
    { id: 5, name: "Port Harcourt", address: "Trans Amadi, PH", manager: "Manager Blessing", agents: 10, customers: 412, revenue: 11200000, status: "active" },
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Branches</h1>
            <p className="text-muted-foreground">Manage branch locations and performance</p>
          </div>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Branch
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Branches</p>
                  <p className="text-xl font-bold">12</p>
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
                  <p className="text-sm text-muted-foreground">Total Agents</p>
                  <p className="text-xl font-bold">54</p>
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
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-xl font-bold">₦59.9M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Top Branch</p>
                  <p className="text-lg font-bold">Lagos Central</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Branches Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Branch Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Manager</TableHead>
                  <TableHead>Agents</TableHead>
                  <TableHead>Customers</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {branches.map((branch) => (
                  <TableRow key={branch.id}>
                    <TableCell className="font-medium">{branch.name}</TableCell>
                    <TableCell>{branch.address}</TableCell>
                    <TableCell>{branch.manager}</TableCell>
                    <TableCell>{branch.agents}</TableCell>
                    <TableCell>{branch.customers}</TableCell>
                    <TableCell className="font-semibold">₦{branch.revenue.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="default">{branch.status}</Badge>
                    </TableCell>
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
      
      <AddBranchDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </AdminLayout>
  );
};

export default AdminBranches;
