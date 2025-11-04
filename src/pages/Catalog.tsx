import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productTv from "@/assets/product-tv.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "phones", label: "Phones" },
    { id: "laptops", label: "Laptops" },
    { id: "tvs", label: "TVs" },
    { id: "appliances", label: "Appliances" },
  ];

  const products = [
    {
      id: "1",
      images: [productPhone, productPhone, productPhone],
      brand: "Samsung",
      title: "Samsung Galaxy A54 5G - 128GB",
      price: 285000,
      installment: "₦9,500/day for 30 days",
      category: "Phones",
      hasVideo: true,
      badges: ["popular", "new"] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
    {
      id: "2",
      images: [productTv, productTv],
      brand: "LG",
      title: "LG 55\" 4K Smart TV",
      price: 450000,
      installment: "₦15,000/day for 30 days",
      category: "Electronics",
      hasVideo: false,
      badges: ["best-value"] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
    {
      id: "3",
      images: [productLaptop, productLaptop, productLaptop],
      brand: "HP",
      title: "HP Pavilion 15 Laptop - Intel Core i5",
      price: 520000,
      installment: "₦17,333/day for 30 days",
      category: "Computers",
      hasVideo: true,
      badges: [] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
    {
      id: "4",
      images: [productPhone, productPhone],
      brand: "iPhone",
      title: "iPhone 13 - 128GB",
      price: 580000,
      installment: "₦19,333/day for 30 days",
      category: "Phones",
      hasVideo: false,
      badges: ["popular"] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
    {
      id: "5",
      images: [productLaptop, productLaptop],
      brand: "Dell",
      title: "Dell Inspiron 15 - Intel Core i7",
      price: 680000,
      installment: "₦22,667/day for 30 days",
      category: "Computers",
      hasVideo: false,
      badges: ["low-stock"] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
    {
      id: "6",
      images: [productTv, productTv, productTv],
      brand: "Samsung",
      title: "Samsung 65\" QLED 4K Smart TV",
      price: 850000,
      installment: "₦28,333/day for 30 days",
      category: "Electronics",
      hasVideo: true,
      badges: ["best-value", "popular"] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-soft py-12 border-b">
          <div className="container">
            <h1 className="text-4xl font-heading font-bold mb-2">Product Catalog</h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection and find the perfect item for you
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="sticky top-16 z-40 bg-background border-b py-4 shadow-sm">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products by name, brand, or category..."
                  className="pl-9 w-full"
                />
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="cursor-pointer whitespace-nowrap hover:shadow-card transition-all"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
