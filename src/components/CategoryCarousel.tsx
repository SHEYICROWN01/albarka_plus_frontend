import { Smartphone, Tv, Laptop, Home, Zap, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  { 
    id: "phones", 
    name: "Smartphones", 
    icon: Smartphone,
    gradient: "from-blue-500 to-blue-600"
  },
  { 
    id: "tvs", 
    name: "Televisions", 
    icon: Tv,
    gradient: "from-purple-500 to-purple-600"
  },
  { 
    id: "laptops", 
    name: "Laptops", 
    icon: Laptop,
    gradient: "from-green-500 to-green-600"
  },
  { 
    id: "appliances", 
    name: "Home Appliances", 
    icon: Home,
    gradient: "from-orange-500 to-orange-600"
  },
  { 
    id: "electronics", 
    name: "Electronics", 
    icon: Zap,
    gradient: "from-pink-500 to-pink-600"
  },
  { 
    id: "all", 
    name: "All Products", 
    icon: ShoppingBag,
    gradient: "from-primary to-accent-blue"
  },
];

const CategoryCarousel = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} to="/catalog">
                <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
