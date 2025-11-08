import { UserCircle, TrendingUp, DollarSign, ShoppingBag, Plus } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminAgents = () => {
  const agents = [
    { id: 1, name: "Agent Tunde", branch: "Abeokuta Main", collections: 2450000, approvals: 45, customers: 156, performance: 95, status: "active" },
    { id: 2, name: "Agent Bola", branch: "Ibadan Branch", collections: 1850000, approvals: 38, customers: 124, performance: 88, status: "active" },
    { id: 3, name: "Agent Chioma", branch: "Lagos Central", collections: 3200000, approvals: 62, customers: 201, performance: 97, status: "active" },
    { id: 4, name: "Agent Musa", branch: "Kano Branch", collections: 1650000, approvals: 32, customers: 98, performance: 82, status: "active" },
    { id: 5, name: "Agent Ngozi", branch: "Port Harcourt", collections: 2100000, approvals: 41, customers: 145, performance: 91, status: "active" },
  ];

  const getInitials = (name: string) => {
    return name.split(" ")[1].substring(0, 2).toUpperCase();
  };

  const getPerformanceBadge = (score: number) => {
    if (score >= 90) return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Excellent</Badge>;
    if (score >= 80) return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Good</Badge>;
    if (score >= 70) return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Average</Badge>;
    return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Needs Improvement</Badge>;
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Agents</h1>
            <p className="text-muted-foreground">Manage field agents and their performance</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Agent
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Agents</p>
                  <p className="text-xl font-bold">47</p>
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
                  <p className="text-sm text-muted-foreground">Active Agents</p>
                  <p className="text-xl font-bold">42</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Collections</p>
                  <p className="text-xl font-bold">₦11.2M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Approvals This Month</p>
                  <p className="text-xl font-bold">218</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agents Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Agent</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Collections</TableHead>
                  <TableHead>Approvals</TableHead>
                  <TableHead>Customers</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agents.map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {getInitials(agent.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{agent.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{agent.branch}</TableCell>
                    <TableCell className="font-semibold">₦{agent.collections.toLocaleString()}</TableCell>
                    <TableCell>{agent.approvals}</TableCell>
                    <TableCell>{agent.customers}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{agent.performance}%</span>
                        {getPerformanceBadge(agent.performance)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">{agent.status}</Badge>
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
    </AdminLayout>
  );
};

export default AdminAgents;
