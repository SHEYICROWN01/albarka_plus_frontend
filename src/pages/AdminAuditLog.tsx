import { Shield, Search, Download, Filter } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminAuditLog = () => {
  const auditLogs = [
    { id: 1, timestamp: "2025-11-08 14:35:22", user: "Admin User", action: "Approved Credit Request", resource: "Order #12345", ip: "192.168.1.1", status: "success" },
    { id: 2, timestamp: "2025-11-08 14:20:15", user: "Manager Tunde", action: "Updated Product Price", resource: "Samsung A54", ip: "192.168.1.5", status: "success" },
    { id: 3, timestamp: "2025-11-08 13:45:10", user: "Agent Chidi", action: "Recorded Payment", resource: "Payment #67890", ip: "192.168.1.12", status: "success" },
    { id: 4, timestamp: "2025-11-08 12:30:05", user: "Admin User", action: "Deleted Product", resource: "Old Model XYZ", ip: "192.168.1.1", status: "warning" },
    { id: 5, timestamp: "2025-11-08 11:15:30", user: "Finance User", action: "Issued Refund", resource: "₦50,000", ip: "192.168.1.8", status: "success" },
    { id: 6, timestamp: "2025-11-08 10:05:45", user: "Unknown", action: "Failed Login Attempt", resource: "admin@albarka.com", ip: "45.76.23.12", status: "error" },
    { id: 7, timestamp: "2025-11-08 09:50:20", user: "Manager Blessing", action: "Added New Agent", resource: "Agent John Doe", ip: "192.168.1.9", status: "success" },
    { id: 8, timestamp: "2025-11-08 09:30:12", user: "Admin User", action: "Changed Settings", resource: "Payment Rules", ip: "192.168.1.1", status: "success" },
  ];

  const stats = [
    { label: "Total Actions Today", value: "1,234", color: "bg-primary/10", iconColor: "text-primary" },
    { label: "Failed Actions", value: "8", color: "bg-destructive/10", iconColor: "text-destructive" },
    { label: "Unique Users", value: "42", color: "bg-green-100", iconColor: "text-green-700" },
    { label: "Critical Changes", value: "15", color: "bg-amber-100", iconColor: "text-amber-700" },
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Audit Log</h1>
            <p className="text-muted-foreground">Track all system activities and changes</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Shield className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search logs..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="All Actions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                  <SelectItem value="login">Login</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="All Users" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                  <SelectItem value="manager">Managers</SelectItem>
                  <SelectItem value="agent">Agents</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Audit Log Table */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-xs">{log.timestamp}</TableCell>
                    <TableCell className="font-medium">{log.user}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell className="text-muted-foreground">{log.resource}</TableCell>
                    <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          log.status === "success" ? "default" :
                          log.status === "warning" ? "outline" :
                          "destructive"
                        }
                      >
                        {log.status}
                      </Badge>
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

export default AdminAuditLog;
