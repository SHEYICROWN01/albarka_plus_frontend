import { ArrowRight, ShoppingBag, PiggyBank, Home as HomeIcon, CheckCircle, TrendingUp, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCarousel from "@/components/CategoryCarousel";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingChat from "@/components/FloatingChat";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productTv from "@/assets/product-tv.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const Home = () => {
  const featuredProducts = [
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
      badges: ["popular"] as Array<"popular" | "new" | "best-value" | "low-stock">,
    },
  ];

  const steps = [
    {
      icon: ShoppingBag,
      title: "Browse & Request",
      description: "Choose your desired item from our catalog and submit a credit request",
    },
    {
      icon: PiggyBank,
      title: "Save Daily",
      description: "Continue your daily savings routine while we process your request",
    },
    {
      icon: HomeIcon,
      title: "Own It",
      description: "Receive your item and complete payments through your savings schedule",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "No Interest Charges",
      description: "Pay only the product price with zero hidden fees",
    },
    {
      icon: TrendingUp,
      title: "Build Credit History",
      description: "Establish your financial credibility with every purchase",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of savers achieving their ownership goals",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Smart Savings.<br />
                <span className="text-secondary">Smart Ownership.</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
                Turn your daily savings into ownership. Buy the items you need on credit and repay through your existing savings schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/catalog">
                  <Button variant="hero" size="lg" className="group">
                    Start Owning Smartly
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    How It Works
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-glow transform transition-transform hover:scale-105 duration-500">
                <img
                  src={heroImage}
                  alt="Happy customer with smartphone"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">5,000+ Happy Customers</p>
                    <p className="text-sm text-muted-foreground">Successfully owned their items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Carousel */}
      <CategoryCarousel />

      {/* Flash Sales / Top Deals */}
      <section className="py-16 bg-gradient-soft">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Flame className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Top Deals Today</h2>
                <p className="text-muted-foreground">Limited stock available</p>
              </div>
            </div>
            <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2">
              Ends in 23:45:12
            </Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Popular items among our community</p>
            </div>
            <Link to="/catalog">
              <Button variant="secondary">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-soft-blue">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Albarka+</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just a credit service - we're your partner in financial growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of smart savers who are achieving their ownership goals with Albarka+
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button variant="accent" size="lg" className="group">
                Browse Products
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingChat />
    </div>
  );
};

export default Home;
