import { useState, useEffect } from "react";
import { ShoppingCart, Eye, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  images: string[];
  brand: string;
  title: string;
  price: number;
  installment: string;
  category: string;
  hasVideo?: boolean;
  badges?: Array<"popular" | "new" | "best-value" | "low-stock">;
}

const ProductCard = ({ 
  id, 
  images, 
  brand, 
  title, 
  price, 
  installment, 
  category,
  hasVideo = false,
  badges = []
}: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const getBadgeConfig = (badge: string) => {
    switch (badge) {
      case "popular":
        return { label: "🔥 Popular Now", className: "bg-gradient-primary text-primary-foreground" };
      case "new":
        return { label: "✨ New Arrival", className: "bg-accent text-accent-foreground" };
      case "best-value":
        return { label: "💰 Best Value", className: "bg-gold text-primary-dark" };
      case "low-stock":
        return { label: "⏳ Almost Gone", className: "bg-destructive text-destructive-foreground" };
      default:
        return null;
    }
  };

  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="relative overflow-hidden bg-soft-blue">
        <img
          src={images[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="h-64 w-full object-cover transition-all duration-500"
        />
        
        {/* Badge Stack */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-primary text-primary-foreground">
            {brand}
          </Badge>
          {badges.map((badge) => {
            const config = getBadgeConfig(badge);
            return config ? (
              <Badge key={badge} className={config.className}>
                {config.label}
              </Badge>
            ) : null;
          })}
        </div>

        <Badge variant="secondary" className="absolute top-4 right-4">
          {category}
        </Badge>

        {hasVideo && (
          <Badge className="absolute bottom-4 right-4 bg-primary-dark/90 text-white flex items-center gap-1">
            <Play className="h-3 w-3" /> Video
          </Badge>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-1">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 w-6 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">From {installment.split(' ')[0]}/day</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-white hover:text-gold hover:bg-white/20"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
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

      <CardFooter className="p-4 pt-0 flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
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
