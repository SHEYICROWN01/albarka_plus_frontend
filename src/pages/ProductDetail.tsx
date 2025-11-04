import { useState } from "react";
import { ArrowLeft, ShoppingCart, Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import productPhone from "@/assets/product-phone.jpg";

const ProductDetail = () => {
  const [selectedPlan, setSelectedPlan] = useState("30");

  const product = {
    id: "1",
    image: productPhone,
    brand: "Samsung",
    title: "Samsung Galaxy A54 5G",
    price: 285000,
    category: "Smartphones",
    inStock: true,
    description: "Experience next-generation connectivity with the Samsung Galaxy A54 5G. Featuring a stunning 6.4-inch Super AMOLED display, powerful processor, and advanced camera system.",
    specs: [
      { label: "Display", value: "6.4\" Super AMOLED" },
      { label: "Storage", value: "128GB" },
      { label: "RAM", value: "8GB" },
      { label: "Camera", value: "50MP + 12MP + 5MP" },
      { label: "Battery", value: "5000mAh" },
      { label: "5G", value: "Yes" },
    ],
  };

  const installmentPlans = [
    { days: "15", daily: 19000, total: 285000, recommended: false },
    { days: "30", daily: 9500, total: 285000, recommended: true },
    { days: "60", daily: 4750, total: 285000, recommended: false },
  ];

  const selectedPlanDetails = installmentPlans.find(plan => plan.days === selectedPlan);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container">
          <Link to="/catalog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Catalog
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden bg-soft-blue shadow-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[500px] object-cover"
                  />
                  {product.inStock && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      In Stock
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                <Badge variant="outline" className="mb-3 ml-2">{product.brand}</Badge>
                <h1 className="text-4xl font-heading font-bold mb-4">{product.title}</h1>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Installment Plan Calculator */}
              <Card className="border-2 border-secondary/20 bg-gradient-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">Choose Your Payment Plan</h3>
                  
                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-3">
                    {installmentPlans.map((plan) => (
                      <div key={plan.days} className="relative">
                        <RadioGroupItem value={plan.days} id={plan.days} className="peer sr-only" />
                        <Label
                          htmlFor={plan.days}
                          className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10 hover:border-secondary/50"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{plan.days} Days Plan</span>
                              {plan.recommended && (
                                <Badge variant="default" className="text-xs">Recommended</Badge>
                              )}
                            </div>
                            <p className="text-2xl font-bold text-primary">₦{plan.daily.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                          </div>
                          <div className="h-5 w-5 rounded-full border-2 border-secondary peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:border-secondary flex items-center justify-center">
                            <Check className="h-3 w-3 text-secondary-foreground opacity-0 peer-data-[state=checked]:opacity-100" />
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {selectedPlanDetails && (
                    <div className="mt-6 p-4 rounded-lg bg-background">
                      <h4 className="font-semibold mb-3">Payment Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Daily Payment:</span>
                          <span className="font-semibold">₦{selectedPlanDetails.daily.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-semibold">{selectedPlanDetails.days} days</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between">
                          <span className="font-semibold">Total Amount:</span>
                          <span className="text-lg font-bold text-primary">₦{selectedPlanDetails.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5" />
                  Request on Credit
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                An agent will contact you within 24 hours to confirm your request
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
