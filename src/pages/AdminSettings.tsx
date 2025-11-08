import { Settings, Building, DollarSign, Mail, Shield } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Configure system preferences and business rules</p>
        </div>

        {/* Settings Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="company">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="payment">Payment Rules</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="roles">Roles & Access</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>

              {/* Company Settings */}
              <TabsContent value="company" className="mt-6 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Company Information</h3>
                    <p className="text-sm text-muted-foreground">Manage your business details</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Albarka+ Inc." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Textarea id="address" defaultValue="Omida Shopping Complex, Abeokuta, Ogun state" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="phone1">Phone 1</Label>
                      <Input id="phone1" defaultValue="0707-460-3897" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone2">Phone 2</Label>
                      <Input id="phone2" defaultValue="0707-445-2992" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="hello@albarkaplus.com" />
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </TabsContent>

              {/* Payment Rules */}
              <TabsContent value="payment" className="mt-6 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Payment & Credit Rules</h3>
                    <p className="text-sm text-muted-foreground">Configure installment and credit policies</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="min-deposit">Minimum Deposit (%)</Label>
                    <Input id="min-deposit" type="number" defaultValue="30" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="max-term">Maximum Installment Term (days)</Label>
                    <Input id="max-term" type="number" defaultValue="90" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="late-fee">Late Payment Fee (₦)</Label>
                    <Input id="late-fee" type="number" defaultValue="5000" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="grace-period">Grace Period (days)</Label>
                    <Input id="grace-period" type="number" defaultValue="3" />
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </TabsContent>

              {/* Notifications */}
              <TabsContent value="notifications" className="mt-6 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email & SMS Settings</h3>
                    <p className="text-sm text-muted-foreground">Configure notification preferences</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Payment Reminders</p>
                          <p className="text-sm text-muted-foreground">Send reminders before due date</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Credit Approval Notifications</p>
                          <p className="text-sm text-muted-foreground">Notify customers of approval status</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Low Stock Alerts</p>
                          <p className="text-sm text-muted-foreground">Alert admins when stock is low</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Roles */}
              <TabsContent value="roles" className="mt-6 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">User Roles & Permissions</h3>
                    <p className="text-sm text-muted-foreground">Manage access control and permissions</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Super Admin</p>
                          <p className="text-sm text-muted-foreground">Full system access</p>
                        </div>
                        <Button variant="outline" size="sm">Edit Permissions</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Finance Manager</p>
                          <p className="text-sm text-muted-foreground">Payments, refunds, reports</p>
                        </div>
                        <Button variant="outline" size="sm">Edit Permissions</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Operations Manager</p>
                          <p className="text-sm text-muted-foreground">Orders, agents, inventory</p>
                        </div>
                        <Button variant="outline" size="sm">Edit Permissions</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Agent</p>
                          <p className="text-sm text-muted-foreground">Limited to assigned customers</p>
                        </div>
                        <Button variant="outline" size="sm">Edit Permissions</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* System */}
              <TabsContent value="system" className="mt-6 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">System Configuration</h3>
                    <p className="text-sm text-muted-foreground">Advanced system settings</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Database Backup</p>
                          <p className="text-sm text-muted-foreground">Last backup: 2024-11-02 03:00</p>
                        </div>
                        <Button variant="outline" size="sm">Backup Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">System Logs</p>
                          <p className="text-sm text-muted-foreground">View and download system logs</p>
                        </div>
                        <Button variant="outline" size="sm">View Logs</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">API Keys</p>
                          <p className="text-sm text-muted-foreground">Manage external integrations</p>
                        </div>
                        <Button variant="outline" size="sm">Manage Keys</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
