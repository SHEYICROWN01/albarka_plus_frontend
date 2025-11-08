import { MessageSquare, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminSupport = () => {
  const tickets = [
    { id: "TKT-001", customer: "Aminu Bello", subject: "Payment not reflecting", priority: "high", status: "open", agent: "Unassigned", created: "2 hours ago" },
    { id: "TKT-002", customer: "Fatima Yusuf", subject: "Product delivery delayed", priority: "medium", status: "in-progress", agent: "Agent Chidi", created: "5 hours ago" },
    { id: "TKT-003", customer: "Emeka Obi", subject: "Cannot access my account", priority: "high", status: "open", agent: "Unassigned", created: "1 day ago" },
    { id: "TKT-004", customer: "Aisha Mohammed", subject: "Wrong product delivered", priority: "urgent", status: "open", agent: "Unassigned", created: "30 min ago" },
    { id: "TKT-005", customer: "Tunde Adeyemi", subject: "Installment plan question", priority: "low", status: "resolved", agent: "Agent Sarah", created: "2 days ago" },
    { id: "TKT-006", customer: "Ngozi Okeke", subject: "Refund request", priority: "medium", status: "in-progress", agent: "Manager Blessing", created: "6 hours ago" },
  ];

  const stats = [
    { label: "Open Tickets", value: "23", icon: MessageSquare, color: "bg-primary/10", iconColor: "text-primary" },
    { label: "In Progress", value: "12", icon: Clock, color: "bg-amber-100", iconColor: "text-amber-700" },
    { label: "Resolved Today", value: "45", icon: CheckCircle, color: "bg-green-100", iconColor: "text-green-700" },
    { label: "Urgent", value: "5", icon: AlertCircle, color: "bg-destructive/10", iconColor: "text-destructive" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive";
      case "high": return "default";
      case "medium": return "outline";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved": return "default";
      case "in-progress": return "outline";
      default: return "secondary";
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Support & Tickets</h1>
            <p className="text-muted-foreground">Manage customer support requests</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Ticket
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
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

        {/* Tickets Table */}
        <Card>
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-mono font-medium">{ticket.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{ticket.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span>{ticket.customer}</span>
                          </div>
                        </TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>
                          <Badge variant={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{ticket.agent}</TableCell>
                        <TableCell className="text-muted-foreground">{ticket.created}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
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

export default AdminSupport;
