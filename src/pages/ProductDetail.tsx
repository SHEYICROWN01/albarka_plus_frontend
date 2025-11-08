import { useState } from "react";
import { ArrowLeft, ShoppingCart, Heart, Share2, Check, Calendar, TrendingDown, Star, ChevronRight, Minus, Plus, Shield, Truck, RefreshCw, Award, Zap, Clock, Package, CreditCard, Sparkles, Gift, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/components/CartSidebar";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productTv from "@/assets/product-tv.jpg";

const ProductDetail = () => {
  const [selectedPlan, setSelectedPlan] = useState("30");
  const [paymentType, setPaymentType] = useState<"full" | "plan">("plan");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();
  const { addToCart, cartOpen, setCartOpen, cartItems, updateQuantity, removeItem } = useCart();

  const product = {
    id: "1",
    images: [productPhone, productPhone, productPhone],
    videoUrl: undefined,
    brand: "Samsung",
    title: "Samsung Galaxy A54 5G",
    price: 285000,
    category: "Smartphones",
    inStock: true,
    stockCount: 12,
    description: "Experience next-generation connectivity with the Samsung Galaxy A54 5G. Featuring a stunning 6.4-inch Super AMOLED display, powerful processor, and advanced camera system.",
    specs: [
      { label: "Display", value: "6.4\" Super AMOLED", icon: Package },
      { label: "Storage", value: "128GB", icon: Package },
      { label: "RAM", value: "8GB", icon: Zap },
      { label: "Camera", value: "50MP + 12MP + 5MP", icon: Package },
      { label: "Battery", value: "5000mAh", icon: Zap },
      { label: "5G", value: "Yes", icon: Zap },
    ],
  };

  const installmentPlans = [
    { days: "15", daily: 19000, total: 285000, recommended: false, popular: false },
    { days: "30", daily: 9500, total: 285000, recommended: true, popular: true },
    { days: "60", daily: 4750, total: 285000, recommended: false, popular: false },
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

  const trustBadges = [
    { icon: Shield, text: "Secure Payment", color: "from-blue-500 to-cyan-500" },
    { icon: Truck, text: "Free Delivery", color: "from-green-500 to-emerald-500" },
    { icon: RefreshCw, text: "Easy Returns", color: "from-purple-500 to-pink-500" },
    { icon: Award, text: "Verified Product", color: "from-orange-500 to-red-500" },
  ];

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      dailyPlan: `₦${selectedPlanDetails?.daily.toLocaleString()}/day`,
      image: product.images[0],
      quantity: quantity,
    };

    addToCart(newItem);
    setCartOpen(true);
    toast({
      title: "Added to Cart! 🎉",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist ❤️",
      description: isWishlisted ? `${product.title} removed from your wishlist.` : `${product.title} saved to your wishlist.`,
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
    <div className= "min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white" >
    <Header />

    < main className = "flex-1 py-8" >
      <div className="container" >
        {/* Enhanced Breadcrumbs */ }
        < div className = "mb-8" >
          <Breadcrumb>
          <BreadcrumbList>
          <BreadcrumbItem>
          <BreadcrumbLink href="/" className = "flex items-center gap-1 hover:text-primary transition-colors" >
            Home
            </BreadcrumbLink>
            </BreadcrumbItem>
            < BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/catalog" className = "hover:text-primary transition-colors" > { product.category } </BreadcrumbLink>
              </BreadcrumbItem>
              < BreadcrumbSeparator />
              <BreadcrumbItem>
              <BreadcrumbLink href="#" className = "hover:text-primary transition-colors" > { product.brand } </BreadcrumbLink>
                </BreadcrumbItem>
                < BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold" > { product.title } </BreadcrumbPage>
                  </BreadcrumbItem>
                  </BreadcrumbList>
                  </Breadcrumb>
                  </div>

                  < div className = "grid lg:grid-cols-2 gap-8 lg:gap-12" >
                    {/* Product Image Gallery - Enhanced with floating card */ }
                    < div >
                    <div className="sticky top-24" >
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300" >
                        <ProductImageGallery 
                    images={ product.images }
  title = { product.title }
  videoUrl = { product.videoUrl }
    />

    {/* Floating Discount Badge */ }
    < div className = "absolute top-6 left-6 z-10" >
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse" >
        <Sparkles className="h-4 w-4" />
          <span className="font-bold" > Hot Deal </span>
            </div>
            </div>

  {/* Floating Stock Badge */ }
  {
    product.stockCount && product.stockCount < 20 && (
      <div className="absolute top-6 right-6 z-10" >
        <div className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg" >
          <span className="font-semibold text-sm" > Only { product.stockCount } left! </span>
            </div>
            </div>
                  )}
</div>

{/* Trust Badges */ }
<div className="grid grid-cols-2 gap-4 mt-6" >
{
  trustBadges.map((badge, index) => (
    <div key= { index } className = "flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow" >
    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`} >
  <badge.icon className="h-5 w-5 text-white" />
    </div>
    < span className = "text-sm font-medium text-gray-700" > { badge.text } </span>
      </div>
                  ))}
</div>
  </div>
  </div>

{/* Product Details - Premium Design */ }
<div className="space-y-6" >
  {/* Header Section */ }
  < div className = "space-y-4" >
    <div className="flex items-center gap-2 flex-wrap" >
      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1" >
        { product.category }
        </Badge>
        < Badge variant = "outline" className = "border-2 px-3 py-1" > { product.brand } </Badge>
{
  product.inStock && (
    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 animate-pulse" >
      <Check className="h-3 w-3 mr-1" />
        In Stock
          </Badge>
                  )
}
</div>

  < h1 className = "text-4xl lg:text-5xl font-heading font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text" >
    { product.title }
    </h1>

{/* Enhanced Rating */ }
<div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200" >
  <div className="flex items-center gap-1" >
  {
    [1, 2, 3, 4, 5].map((star) => (
      <Star key= { star } className = "h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))
  }
    </div>
    < Separator orientation = "vertical" className = "h-6" />
      <div className="flex items-center gap-2" >
        <span className="text-2xl font-bold text-gray-900" > 4.8 </span>
          < span className = "text-sm text-gray-600" > (124 reviews)</span>
            </div>
            < Separator orientation = "vertical" className = "h-6" />
              <div className="flex items-center gap-1 text-sm text-gray-600" >
                <Users className="h-4 w-4" />
                  <span>1.2k sold </span>
                    </div>
                    </div>
                    </div>

{/* Price & Payment Section - Premium Design */ }
<Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 shadow-xl overflow-hidden" >
  <CardContent className="p-6 space-y-6" >
    {/* Payment Type Toggle */ }
    < div className = "flex gap-3" >
      <Button 
                      variant={ paymentType === "full" ? "default" : "outline" }
onClick = {() => setPaymentType("full")}
className = {`flex-1 h-12 text-base font-semibold transition-all duration-300 ${paymentType === "full"
  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg'
  : 'hover:bg-gray-50'
  }`}
                    >
  <CreditCard className="h-5 w-5 mr-2" />
    Pay Full
      </Button>
      < Button
variant = { paymentType === "plan" ? "default" : "outline"}
onClick = {() => setPaymentType("plan")}
className = {`flex-1 h-12 text-base font-semibold transition-all duration-300 ${paymentType === "plan"
  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg'
  : 'hover:bg-gray-50'
  }`}
                    >
  <Clock className="h-5 w-5 mr-2" />
    Pay in Plan
    </Button>
    </div>

{/* Price Display */ }
{
  paymentType === "full" ? (
    <div className= "text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white" >
    <p className="text-sm font-medium mb-2 opacity-90" > One - Time Payment </p>
      < div className = "flex items-baseline justify-center gap-2" >
        <span className="text-5xl font-bold" >₦{ product.price.toLocaleString() } </span>
          </div>
          < p className = "text-sm mt-3 opacity-90" > + Free delivery nationwide </p>
            </div>
                  ) : (
    selectedPlanDetails && (
      <div className= "text-center p-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white relative overflow-hidden" >
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <p className="text-sm font-medium mb-2 opacity-90 relative z-10" > Daily Payment Plan </p>
          < div className = "flex items-baseline justify-center gap-2 relative z-10" >
            <span className="text-5xl font-bold" >₦{ selectedPlanDetails.daily.toLocaleString() } </span>
              < span className = "text-xl opacity-90" > /day</span >
                </div>
                < p className = "text-sm mt-3 opacity-90 relative z-10" >
                  For { selectedPlanDetails.days } days • Total: ₦{ product.price.toLocaleString() }
  </p>
    </div>
                    )
                  )
}
</CardContent>
  </Card>

{/* Installment Plans - Only show when plan is selected */ }
{
  paymentType === "plan" && (
    <Card className="border-2 border-gray-100 shadow-lg" >
      <CardContent className="p-6 space-y-4" >
        <div className="flex items-center justify-between" >
          <h3 className="font-heading font-bold text-xl" > Choose Your Plan </h3>
            < Badge className = "bg-purple-100 text-purple-700 border-purple-200" >
              Flexible Options
                </Badge>
                </div>

                < RadioGroup value = { selectedPlan } onValueChange = { setSelectedPlan } className = "space-y-3" >
                {
                  installmentPlans.map((plan) => (
                    <div key= { plan.days } className = "relative group" >
                    <RadioGroupItem value={ plan.days } id = { plan.days } className = "peer sr-only" />
                    <Label
                            htmlFor={ plan.days }
                            className = "flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:border-purple-400 hover:shadow-lg peer-data-[state=checked]:border-purple-500 peer-data-[state=checked]:bg-gradient-to-r peer-data-[state=checked]:from-purple-50 peer-data-[state=checked]:to-blue-50 peer-data-[state=checked]:shadow-lg"
                    >
                    <div className="flex-1" >
                  <div className="flex items-center gap-2 mb-2" >
                  <span className="font-bold text-lg" > { plan.days } Days Plan </span>
                                {
                      plan.recommended && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs px-2 py-0.5">
                          <Sparkles className="h-3 w-3 mr-1" />
                                    Best Value
                        </ Badge >
                                )
                }
  {
    plan.popular && (
      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-xs px-2 py-0.5" >
                                    ⭐ Popular
      </Badge>
                                )
  }
  </div>
    < div className = "flex items-baseline gap-2" >
      <span className="text-3xl font-bold text-purple-600" >₦{ plan.daily.toLocaleString() } </span>
        < span className = "text-sm text-gray-500" > /day</span >
          </div>
          </div>
          < div className = "h-6 w-6 rounded-full border-2 border-gray-300 peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-purple-500 peer-data-[state=checked]:to-blue-500 peer-data-[state=checked]:border-purple-500 flex items-center justify-center transition-all" >
            <Check className="h-4 w-4 text-white opacity-0 peer-data-[state=checked]:opacity-100" />
              </div>
              </Label>
              </div>
                      ))
}
</RadioGroup>

{/* Payment Summary */ }
{
  selectedPlanDetails && (
    <div className="mt-6 space-y-4" >
      <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200" >
        <h4 className="font-bold mb-4 flex items-center gap-2 text-gray-900" >
          <Calendar className="h-5 w-5 text-purple-600" />
            Payment Summary
              </h4>
              < div className = "space-y-3 text-sm" >
                <div className="flex justify-between items-center p-3 rounded-lg bg-white" >
                  <span className="text-gray-600" > Daily Payment: </span>
                    < span className = "font-bold text-gray-900" >₦{ selectedPlanDetails.daily.toLocaleString() } </span>
                      </div>
                      < div className = "flex justify-between items-center p-3 rounded-lg bg-white" >
                        <span className="text-gray-600" > Duration: </span>
                          < span className = "font-bold text-gray-900" > { selectedPlanDetails.days } days </span>
                            </div>
                            < div className = "flex justify-between items-center p-3 rounded-lg bg-white" >
                              <span className="text-gray-600" > Start Date: </span>
                                < span className = "font-bold text-gray-900" >
                                  { new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }) }
                                  </span>
                                  </div>
                                  < div className = "flex justify-between items-center p-3 rounded-lg bg-white" >
                                    <span className="text-gray-600" > End Date: </span>
                                      < span className = "font-bold text-gray-900" >
                                        { new Date(Date.now() + parseInt(selectedPlanDetails.days) * 24 * 60 * 60 * 1000).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }) }
                                        </span>
                                        </div>
                                        < Separator className = "my-2" />
                                          <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500" >
                                            <span className="font-bold text-white" > Total Amount: </span>
                                              < span className = "text-2xl font-bold text-white" >₦{ selectedPlanDetails.total.toLocaleString() } </span>
                                                </div>
                                                </div>
                                                </div>

  {/* Savings Indicator */ }
  <div className="p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 flex items-center gap-3" >
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0" >
      <Gift className="h-5 w-5 text-white" />
        </div>
        < div >
        <p className="font-bold text-green-900" > You save ₦5,000 </p>
          < p className = "text-sm text-green-700" > Compared to market average </p>
            </div>
            </div>
            </div>
                    )
}
</CardContent>
  </Card>
              )}

{/* Quantity & Action Buttons */ }
<div className="space-y-4" >
  {/* Quantity Selector */ }
  < div className = "flex items-center justify-between p-5 rounded-2xl bg-white border-2 border-gray-100" >
    <span className="font-bold text-gray-900" > Quantity: </span>
      < div className = "flex items-center gap-3" >
        <Button 
                      variant="outline"
size = "icon"
onClick = {() => setQuantity(Math.max(1, quantity - 1))}
className = "h-10 w-10 rounded-xl border-2 hover:bg-gray-50 hover:border-purple-300 transition-all"
  >
  <Minus className="h-4 w-4" />
    </Button>
    < span className = "w-16 text-center font-bold text-xl text-gray-900" > { quantity } </span>
      < Button
variant = "outline"
size = "icon"
onClick = {() => setQuantity(quantity + 1)}
className = "h-10 w-10 rounded-xl border-2 hover:bg-gray-50 hover:border-purple-300 transition-all"
  >
  <Plus className="h-4 w-4" />
    </Button>
    </div>
    </div>

{/* Action Buttons */ }
<div className="flex gap-3" >
  <Button 
                    size="lg"
className = "flex-1 h-14 text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
onClick = { handleAddToCart }
  >
  <ShoppingCart className="h-5 w-5 mr-2" />
    Add to Cart
      </Button>
      < Button
variant = "outline"
size = "lg"
onClick = { handleWishlist }
className = {`h-14 w-14 rounded-xl border-2 transition-all duration-300 ${isWishlisted
  ? 'bg-red-50 border-red-300 hover:bg-red-100'
  : 'hover:bg-gray-50 hover:border-purple-300'
  }`}
                  >
  <Heart className={ `h-5 w-5 transition-all ${isWishlisted ? 'fill-red-500 text-red-500' : ''}` } />
    </Button>
    < Button
variant = "outline"
size = "lg"
onClick = { handleShare }
className = "h-14 w-14 rounded-xl border-2 hover:bg-gray-50 hover:border-purple-300 transition-all"
  >
  <Share2 className="h-5 w-5" />
    </Button>
    </div>

{/* Info Text */ }
<div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200" >
  <p className="text-sm text-center text-gray-700 flex items-center justify-center gap-2" >
    <Zap className="h-4 w-4 text-purple-600" />
      { paymentType === "plan"
      ? "An agent will contact you within 24 hours to confirm your request"
      : "Free delivery on orders above ₦50,000"}
</p>
  </div>
  </div>

{/* Enhanced Tabs */ }
<Card className="border-2 border-gray-100 shadow-lg overflow-hidden" >
  <Tabs defaultValue="description" className = "w-full" >
    <TabsList className="grid w-full grid-cols-3 p-1 bg-gray-50" >
      <TabsTrigger value="description" className = "data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg" >
        Description
        </TabsTrigger>
        < TabsTrigger value = "specs" className = "data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg" >
          Specifications
          </TabsTrigger>
          < TabsTrigger value = "reviews" className = "data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg" >
            Reviews
            </TabsTrigger>
            </TabsList>

            < CardContent className = "p-6" >
              <TabsContent value="description" className = "space-y-6 mt-0" >
                <p className="text-gray-600 leading-relaxed text-base" > { product.description } </p>
                  < div className = "p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100" >
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2" >
                      <Sparkles className="h-5 w-5 text-purple-600" />
                        Key Features:
</h4>
  < ul className = "space-y-3" >
  {
    [
      "Premium build quality with glass back",
      "Advanced camera system with AI enhancement",
      "All-day battery life with fast charging",
      "5G connectivity for blazing-fast speeds"
    ].map((feature, index) => (
      <li key= { index } className = "flex items-start gap-3" >
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5" >
    <Check className="h-4 w-4 text-white" />
    </div>
    < span className = "text-gray-700" > { feature } </span>
    </li>
    ))
  }
    </ul>
    </div>
    </TabsContent>

    < TabsContent value = "specs" className = "mt-0" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
      {
        product.specs.map((spec, index) => (
          <div key= { index } className = "p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 group" >
          <div className="flex items-center gap-3 mb-2" >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform" >
        <spec.icon className="h-4 w-4 text-white" />
        </div>
        < span className = "text-sm font-medium text-gray-500" > { spec.label } </span>
        </div>
        < span className = "text-lg font-bold text-gray-900" > { spec.value } </span>
        </div>
        ))
      }
        </div>
        </TabsContent>

        < TabsContent value = "reviews" className = "mt-0 space-y-6" >
          {/* Reviews Header */ }
          < div className = "flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200" >
            <div>
            <div className="flex items-center gap-4 mb-2" >
              <span className="text-5xl font-bold text-gray-900" > 4.8 </span>
                < div >
                <div className="flex items-center gap-1 mb-1" >
                {
                  [1, 2, 3, 4, 5].map((star) => (
                    <Star key= { star } className = "h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))
                }
                  </div>
                  < p className = "text-sm text-gray-600" > Based on 124 reviews </p>
                    </div>
                    </div>
                    </div>
                    < Button className = "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" >
                      <Star className="h-4 w-4 mr-2" />
                        Write Review
                          </Button>
                          </div>

                          < Separator />

                          {/* Review Cards */ }
                          < div className = "space-y-4" >
                          {
                            [
                              { name: "Chinedu O.", time: "2 days ago", text: "Amazing phone! The camera quality is superb and the battery lasts all day. The payment plan made it so easy to afford. Highly recommend!" },
                              { name: "Amina K.", time: "1 week ago", text: "Best purchase I've made this year. The 5G speed is incredible and the display is beautiful. Customer service was excellent too!" },
                              { name: "Tunde B.", time: "2 weeks ago", text: "Great value for money. The daily payment option helped me get this phone without breaking the bank. Very satisfied with my purchase." }
                            ].map((review, index) => (
                              <div key= { index } className = "p-5 rounded-2xl bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300" >
                              <div className="flex items-start justify-between mb-3" >
                            <div className="flex items-center gap-3" >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold" >
                            { review.name.charAt(0) }
                            </div>
                            < div >
                            <div className="flex items-center gap-2 mb-1" >
                            <span className="font-bold text-gray-900" > { review.name } </span>
                            < Badge className = "bg-green-100 text-green-700 border-green-200 text-xs" >
                            Verified Purchase
                            </Badge>
                            </div>
                            < div className = "flex items-center gap-2" >
                            <div className="flex items-center" >
                            {
                              [1, 2, 3, 4, 5].map((star) => (
                                <Star key= { star } className = "h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                      ))
                          }
                            </div>
                            < span className = "text-xs text-gray-500" > { review.time } </span>
                              </div>
                              </div>
                              </div>
                              </div>
                              < p className = "text-gray-600 leading-relaxed" > { review.text } </p>
                                </div>
                        ))}
</div>

{/* View More Reviews */ }
<Button variant="outline" className = "w-full h-12 border-2 hover:bg-purple-50 hover:border-purple-300" >
  View All 124 Reviews
    < ChevronRight className = "h-4 w-4 ml-2" />
      </Button>
      </TabsContent>
      </CardContent>
      </Tabs>
      </Card>
      </div>
      </div>

{/* Related Products Section - Enhanced */ }
<div className="mt-20" >
  <div className="text-center mb-12" >
    <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 px-4 py-2" >
      <Sparkles className="h-4 w-4 mr-2" />
        Recommended For You
          </Badge>
          < h2 className = "text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text" >
            You May Also Like
              </h2>
              < p className = "text-gray-600 text-lg" > Handpicked products based on your interests </p>
                </div>

                < div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
                {
                  relatedProducts.map((product, index) => (
                    <div key= { product.id } className = "animate-fade-in" style = {{ animationDelay: `${index * 100}ms` }} >
                  <ProductCard { ...product } />
                  </div>
              ))}
</div>

  < div className = "text-center mt-8" >
    <Link to="/catalog" >
      <Button size="lg" variant = "outline" className = "border-2 hover:bg-purple-50 hover:border-purple-300" >
        Explore More Products
          < ChevronRight className = "h-5 w-5 ml-2" />
            </Button>
            </Link>
            </div>
            </div>

{/* Why Buy From Us Section */ }
<div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden" >
  {/* Background Elements */ }
  < div className = "absolute inset-0 opacity-10" >
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float-delayed" />
        </div>

        < div className = "relative z-10" >
          <div className="text-center mb-12" >
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3" >
              Why Buy From < span className = "bg-gradient-to-r from-yellow-300 to-pink-300 text-transparent bg-clip-text" > Albarka +? </span>
                </h3>
                < p className = "text-purple-200 text-lg" > Your trusted partner for smart ownership </p>
                  </div>

                  < div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-6" >
                  {
                    [
                      { icon: Shield, title: "100% Authentic", desc: "All products are genuine and verified", color: "from-blue-500 to-cyan-500" },
                      { icon: Truck, title: "Fast Delivery", desc: "Free shipping on all orders", color: "from-green-500 to-emerald-500" },
                      { icon: Clock, title: "24/7 Support", desc: "Always here to help you", color: "from-purple-500 to-pink-500" },
                      { icon: Award, title: "Best Prices", desc: "Guaranteed lowest prices", color: "from-orange-500 to-red-500" }
                    ].map((item, index) => (
                      <div key= { index } className = "p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group" >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`} >
                  <item.icon className= "h-7 w-7 text-white" />
                    </div>
                    < h4 className = "text-xl font-bold mb-2" > { item.title } </h4>
                      < p className = "text-purple-200 text-sm" > { item.desc } </p>
                        </div>
                ))}
</div>
  </div>
  </div>
  </div>
  </main>

  < Footer />

  <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
  </div>
  );
};

export default ProductDetail;