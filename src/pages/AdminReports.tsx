import { BarChart3, FileText, TrendingUp, Download } from "lucide-react";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminReports = () => {
  const preBuiltReports = [
    { name: "Daily Collections Report", description: "Daily payment collections summary", lastGenerated: "2024-11-02 18:00" },
    { name: "Aging Receivables", description: "Outstanding payments by age bucket", lastGenerated: "2024-11-02 06:00" },
    { name: "Customer LTV Report", description: "Lifetime value analysis by customer", lastGenerated: "2024-11-01 18:00" },
    { name: "Repayment Rate Analysis", description: "On-time payment rate trends", lastGenerated: "2024-11-02 06:00" },
    { name: "Cohort Analysis", description: "Customer behavior by signup month", lastGenerated: "2024-11-01 18:00" },
    { name: "Product Performance", description: "Sales and profit by product category", lastGenerated: "2024-11-02 06:00" },
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate insights and export business reports</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Available Reports</p>
                  <p className="text-xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Generated Today</p>
                  <p className="text-xl font-bold">12</p>
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
                  <p className="text-sm text-muted-foreground">Scheduled Reports</p>
                  <p className="text-xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Download className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Exports This Month</p>
                  <p className="text-xl font-bold">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Reports Library</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="prebuilt">
              <TabsList>
                <TabsTrigger value="prebuilt">Pre-Built Reports</TabsTrigger>
                <TabsTrigger value="custom">Custom Reports</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="prebuilt" className="mt-6">
                <div className="grid gap-4">
                  {preBuiltReports.map((report, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{report.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                            <p className="text-xs text-muted-foreground">Last generated: {report.lastGenerated}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Export
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="custom" className="mt-6">
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Build Custom Reports</h3>
                  <p className="text-muted-foreground mb-4">Create tailored reports with your own metrics and filters</p>
                  <Button>Create Custom Report</Button>
                </div>
              </TabsContent>

              <TabsContent value="scheduled" className="mt-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Scheduled Reports</h3>
                  <p className="text-muted-foreground mb-4">Automate report generation and email delivery</p>
                  <Button>Schedule New Report</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
