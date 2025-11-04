import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  brand: string;
  title: string;
  price: number;
  installment: string;
  category: string;
}

const ProductCard = ({ id, image, brand, title, price, installment, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2">
      <div className="relative overflow-hidden bg-soft-blue">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {brand}
        </Badge>
        <Badge variant="secondary" className="absolute top-4 right-4">
          {category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold text-primary">₦{price.toLocaleString()}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          or <span className="font-medium text-secondary">{installment}</span>
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/product/${id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            <Eye className="h-4 w-4" />
            View Details
          </Button>
        </Link>
        <Button variant="hero" size="icon">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
