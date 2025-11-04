import { useState } from "react";
import { ArrowLeft, ShoppingCart, Heart, Share2, Check, Calendar, TrendingDown, Star, Plus, Minus, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productTv from "@/assets/product-tv.jpg";

const ProductDetail = () => {
  const [selectedPlan, setSelectedPlan] = useState("30");
  const [paymentType, setPaymentType] = useState<"full" | "plan">("plan");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const product = {
    id: "1",
    images: [productPhone, productPhone, productPhone],
    videoUrl: undefined,
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

  const relatedProducts = [
    { 
      id: "2", 
      title: "Samsung Galaxy S23", 
      brand: "Samsung", 
      price: 450000, 
      images: [productPhone, productPhone, productPhone], 
      installment: "₦15,000 daily",
      category: "Smartphones",
      badges: ["popular" as const]
    },
    { 
      id: "3", 
      title: "MacBook Pro 14\"", 
      brand: "Apple", 
      price: 1200000, 
      images: [productLaptop, productLaptop], 
      installment: "₦40,000 daily",
      category: "Laptops",
      badges: ["new" as const]
    },
    { 
      id: "4", 
      title: "LG OLED TV 55\"", 
      brand: "LG", 
      price: 850000, 
      images: [productTv, productTv], 
      installment: "₦28,000 daily",
      category: "TVs",
      badges: ["best-value" as const]
    },
    { 
      id: "5", 
      title: "iPhone 14 Pro", 
      brand: "Apple", 
      price: 650000, 
      images: [productPhone, productPhone], 
      installment: "₦21,000 daily",
      category: "Smartphones"
    },
  ];

  const handleAddToCart = () => {
    const newItem = {
      ...product,
      quantity,
      selectedPlan: paymentType === "plan" ? selectedPlanDetails : null,
      paymentType,
    };
    setCartItems([...cartItems, newItem]);
    setCartOpen(true);
    toast({
      title: "Added to Cart! 🎉",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    toast({
      title: "Added to Wishlist ❤️",
      description: `${product.title} saved to your wishlist.`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied! 🔗",
        description: "Product link copied to clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/catalog">{product.category}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{product.brand}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            <div>
              <div className="sticky top-24">
                <ProductImageGallery 
                  images={product.images} 
                  title={product.title}
                  videoUrl={product.videoUrl}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{product.category}</Badge>
                  <Badge variant="outline">{product.brand}</Badge>
                  {product.inStock && <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">In Stock</Badge>}
                </div>
                <h1 className="text-4xl font-heading font-bold mb-4">{product.title}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(124 reviews)</span>
                </div>

                {/* Price & Payment Toggle */}
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button 
                      variant={paymentType === "full" ? "default" : "outline"}
                      onClick={() => setPaymentType("full")}
                      className="flex-1"
                    >
                      Pay Full
                    </Button>
                    <Button 
                      variant={paymentType === "plan" ? "default" : "outline"}
                      onClick={() => setPaymentType("plan")}
                      className="flex-1"
                    >
                      Pay in Plan
                    </Button>
                  </div>

                  {paymentType === "full" ? (
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
                    </div>
                  ) : (
                    selectedPlanDetails && (
                      <div className="p-4 rounded-xl bg-primary/5 border-2 border-primary/20">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-primary">₦{selectedPlanDetails.daily.toLocaleString()}</span>
                          <span className="text-muted-foreground">/day</span>
                          <span className="text-sm text-muted-foreground">× {selectedPlanDetails.days} days</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Total: ₦{product.price.toLocaleString()}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <Separator />

              {/* Tabs for Description, Specs, Reviews */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="space-y-4 mt-4">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Premium build quality with glass back</li>
                      <li>Advanced camera system with AI enhancement</li>
                      <li>All-day battery life with fast charging</li>
                      <li>5G connectivity for blazing-fast speeds</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="p-3 rounded-lg bg-soft-blue border border-border">
                        <span className="text-sm text-muted-foreground block mb-1">{spec.label}</span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-bold">4.8</span>
                          <div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">124 reviews</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline">Write a Review</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                              ))}
                            </div>
                            <span className="font-semibold">Chinedu O.</span>
                            <span className="text-sm text-muted-foreground">2 days ago</span>
                          </div>
                          <p className="text-muted-foreground">
                            Amazing phone! The camera quality is superb and the battery lasts all day. 
                            The payment plan made it so easy to afford. Highly recommend!
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Separator />

              {/* Installment Plan Calculator */}
              {paymentType === "plan" && (
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
                    <div className="mt-6 space-y-4">
                      <div className="p-4 rounded-lg bg-background">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          Payment Summary
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Daily Payment:</span>
                            <span className="font-semibold">₦{selectedPlanDetails.daily.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="font-semibold">{selectedPlanDetails.days} days</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Start Date:</span>
                            <span className="font-semibold">
                              {new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">End Date:</span>
                            <span className="font-semibold">
                              {new Date(Date.now() + parseInt(selectedPlanDetails.days) * 24 * 60 * 60 * 1000).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between">
                            <span className="font-semibold">Total Amount:</span>
                            <span className="text-lg font-bold text-primary">₦{selectedPlanDetails.total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Savings Indicator */}
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-accent" />
                        <p className="text-sm text-accent-foreground">
                          <span className="font-semibold">You save ₦5,000</span> compared to market average
                        </p>
                      </div>
                    </div>
                  )}
                  </CardContent>
                </Card>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" onClick={handleWishlist}>
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                {paymentType === "plan" 
                  ? "An agent will contact you within 24 hours to confirm your request" 
                  : "Free delivery on orders above ₦50,000"}
              </p>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-heading font-bold">You may also like 💡</h2>
              <Link to="/catalog">
                <Button variant="ghost">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Cart Sidebar */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="text-2xl font-heading">Shopping Cart 🛒</SheetTitle>
          </SheetHeader>
          
          <div className="mt-8 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img 
                            src={item.images[0]} 
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1 space-y-1">
                            <h4 className="font-semibold line-clamp-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.brand}</p>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-primary">
                                {item.paymentType === "plan" 
                                  ? `₦${item.selectedPlan.daily.toLocaleString()}/day`
                                  : `₦${item.price.toLocaleString()}`}
                              </span>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium">{item.quantity}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-semibold">₦{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery:</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total:</span>
                    <span className="font-bold text-xl text-primary">
                      ₦{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-gradient-primary" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setCartOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
};

export default ProductDetail;
