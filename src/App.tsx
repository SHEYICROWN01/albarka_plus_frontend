import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/contexts/CartContext";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminCustomers from "./pages/AdminCustomers";
import AdminCategories from "./pages/AdminCategories";
import AdminBrands from "./pages/AdminBrands";
import AdminSavings from "./pages/AdminSavings";
import AdminCreditRequests from "./pages/AdminCreditRequests";
import AdminPayments from "./pages/AdminPayments";
import AdminAgents from "./pages/AdminAgents";
import AdminBranches from "./pages/AdminBranches";
import AdminReports from "./pages/AdminReports";
import AdminInventory from "./pages/AdminInventory";
import AdminPromotions from "./pages/AdminPromotions";
import AdminSettings from "./pages/AdminSettings";
import AdminAuditLog from "./pages/AdminAuditLog";
import AdminSupport from "./pages/AdminSupport";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/brands" element={<AdminBrands />} />
          <Route path="/admin/savings" element={<AdminSavings />} />
          <Route path="/admin/credit-requests" element={<AdminCreditRequests />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/agents" element={<AdminAgents />} />
          <Route path="/admin/branches" element={<AdminBranches />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/admin/promotions" element={<AdminPromotions />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/audit-log" element={<AdminAuditLog />} />
          <Route path="/admin/support" element={<AdminSupport />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
