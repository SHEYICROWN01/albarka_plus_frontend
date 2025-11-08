import { useState, useEffect } from "react";
import { ArrowRight, ShoppingBag, PiggyBank, Home as HomeIcon, CheckCircle, TrendingUp, Users, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCarousel from "@/components/CategoryCarousel";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BrandCarousel from "@/components/BrandCarousel";
import FloatingChat from "@/components/FloatingChat";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-image.jpg";
import heroImage2 from "@/assets/hero-image-2.jpg";
import heroImage3 from "@/assets/hero-image-3.jpg";
import heroImage4 from "@/assets/hero-image-4.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productTv from "@/assets/product-tv.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
const Home = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [{
    image: heroImage1,
    title: "Smart Savings.",
    subtitle: "Smart Ownership.",
    description: "Turn your daily savings into ownership. Buy the items you need on credit and repay through your existing savings schedule."
  }, {
    image: heroImage2,
    title: "Own Your Dream Laptop.",
    subtitle: "Pay Daily.",
    description: "Get the technology you need for work or school. Make affordable daily payments that fit your budget."
  }, {
    image: heroImage3,
    title: "Shop Smart.",
    subtitle: "Save Smart.",
    description: "Access quality products from trusted brands. Build your credit history while you own what you need."
  }, {
    image: heroImage4,
    title: "Family Entertainment.",
    subtitle: "Affordable Plans.",
    description: "Bring joy to your home with the latest electronics. Flexible payment options for every family."
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);
  const nextSlide = () => {
    setCurrentHeroIndex(prev => (prev + 1) % heroImages.length);
  };
  const prevSlide = () => {
    setCurrentHeroIndex(prev => (prev - 1 + heroImages.length) % heroImages.length);
  };
  const featuredProducts = [{
    id: "1",
    images: [productPhone, productPhone, productPhone],
    brand: "Samsung",
    title: "Samsung Galaxy A54 5G - 128GB",
    price: 285000,
    installment: "₦9,500/day for 30 days",
    category: "Phones",
    hasVideo: true,
    badges: ["popular", "new"] as Array<"popular" | "new" | "best-value" | "low-stock">
  }, {
    id: "2",
    images: [productTv, productTv],
    brand: "LG",
    title: "LG 55\" 4K Smart TV",
    price: 450000,
    installment: "₦15,000/day for 30 days",
    category: "Electronics",
    hasVideo: false,
    badges: ["best-value"] as Array<"popular" | "new" | "best-value" | "low-stock">
  }, {
    id: "3",
    images: [productLaptop, productLaptop, productLaptop],
    brand: "HP",
    title: "HP Pavilion 15 Laptop - Intel Core i5",
    price: 520000,
    installment: "₦17,333/day for 30 days",
    category: "Computers",
    hasVideo: true,
    badges: ["popular"] as Array<"popular" | "new" | "best-value" | "low-stock">
  }];
  const steps = [{
    icon: ShoppingBag,
    title: "Browse & Request",
    description: "Choose your desired item from our catalog and submit a credit request"
  }, {
    icon: PiggyBank,
    title: "Save Daily",
    description: "Continue your daily savings routine while we process your request"
  }, {
    icon: HomeIcon,
    title: "Own It",
    description: "Receive your item and complete payments through your savings schedule"
  }];
  const benefits = [{
    icon: CheckCircle,
    title: "No Interest Charges",
    description: "Pay only the product price with zero hidden fees"
  }, {
    icon: TrendingUp,
    title: "Build Credit History",
    description: "Establish your financial credibility with every purchase"
  }, {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of savers achieving their ownership goals"
  }];
  return <div className="min-h-screen flex flex-col" >
    <Header />

  {/* Hero Section with Carousel */ }
  <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden" >
    {/* Animated Background */ }
    < div className = "absolute inset-0 transition-all duration-1000 ease-in-out" style = {{
    backgroundImage: `url(${heroImages[currentHeroIndex].image})`,
      backgroundSize: 'cover',
        backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
            opacity: 0.15
  }
} />

  < div className = "container relative z-10" >
    <div className="grid lg:grid-cols-2 gap-12 items-center" >
      {/* Left Content */ }
      < div className = "text-center lg:text-left space-y-6" >
        <div className="animate-fade-in" key = { currentHeroIndex } >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-2" >
            { heroImages[currentHeroIndex].title } < br />
            <span className="text-secondary" > { heroImages[currentHeroIndex].subtitle } </span>
              </h1>
              < p className = "text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-6" >
                { heroImages[currentHeroIndex].description }
                </p>
                </div>
                < div className = "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" >
                  <Link to="/catalog" >
                    <Button variant="hero" size = "lg" className = "group" >
                      Start Owning Smartly
                        < ArrowRight className = "h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                          </Link>
                          < a href = "#how-it-works" >
                            <Button variant="outline" size = "lg" className = "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" >
                              How It Works
                                </Button>
                                </a>
                                </div>
                                </div>

{/* Right Carousel */ }
<div className="relative" >
  {/* Main Image with Transition */ }
  < div className = "relative rounded-2xl overflow-hidden shadow-glow" >
    <div className="relative h-[500px]" >
      { heroImages.map((hero, index) => <img key={ index } src = { hero.image } alt = {`${hero.title} ${hero.subtitle}`} className = {`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />)}
</div>

{/* Navigation Arrows */ }
<Button variant="secondary" size = "icon" className = "absolute left-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity bg-white/90 hover:bg-white" onClick = { prevSlide } >
  <ChevronLeft className="h-5 w-5" />
    </Button>
    < Button variant = "secondary" size = "icon" className = "absolute right-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity bg-white/90 hover:bg-white" onClick = { nextSlide } >
      <ChevronRight className="h-5 w-5" />
        </Button>

{/* Indicators */ }
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" >
  { heroImages.map((_, index) => <button key={ index } onClick = {() => setCurrentHeroIndex(index)} className = {`h-2 rounded-full transition-all ${index === currentHeroIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'}`} />)}
</div>
  </div>

{/* Stats Card */ }
<div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant animate-fade-in" >
  <div className="flex items-center gap-4" >
    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center" >
      <CheckCircle className="h-6 w-6 text-secondary-foreground" />
        </div>
        < div >
        <p className="font-semibold text-card-foreground" > 5,000 + Happy Customers </p>
          < p className = "text-sm text-muted-foreground" > Successfully owned their items </p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>

{/* Category Carousel */ }
<CategoryCarousel />

{/* Brands Section */ }


{/* Flash Sales / Top Deals */ }
<section className="py-16 bg-gradient-soft" >
  <div className="container" >
    <div className="flex items-center justify-between mb-8" >
      <div className="flex items-center gap-3" >
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center" >
          <Flame className="h-6 w-6 text-white animate-pulse" />
            </div>
            < div >
            <h2 className="text-3xl font-heading font-bold" > Top Deals Today </h2>
              < p className = "text-muted-foreground" > Limited stock available </p>
                </div>
                </div>
                < Badge className = "bg-destructive text-destructive-foreground text-lg px-4 py-2" >
                  Ends in 23: 45: 12
                    </Badge>
                    </div>

                    < div className = "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" >
                      { featuredProducts.map(product => <ProductCard key={ product.id } { ...product } />) }
                      </div>
                      </div>
                      </section>

{/* How It Works */ }
<div id="how-it-works" >
  <HowItWorksSection />
  </div>

{/* Featured Products */ }
<section className="py-16 lg:py-24" >
  <div className="container" >
    <div className="flex items-center justify-between mb-8" >
      <div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2" > Featured Products </h2>
        < p className = "text-muted-foreground" > Popular items among our community </p>
          </div>
          < Link to = "/catalog" >
            <Button variant="secondary" >
              View All
                < ArrowRight className = "h-4 w-4" />
                  </Button>
                  </Link>
                  </div>

                  < div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
                    { featuredProducts.map(product => <ProductCard key={ product.id } { ...product } />) }
                    </div>
                    </div>
                    </section>

{/* Testimonials */ }
<TestimonialSection />

{/* Benefits Section */ }
<section className="py-16 lg:py-24 bg-soft-blue" >
  <div className="container" >
    <div className="text-center mb-12" >
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" > Why Choose Albarka + </h2>
        < p className = "text-lg text-muted-foreground max-w-2xl mx-auto" >
          More than just a credit service - we're your partner in financial growth
            </p>
            </div>

            < div className = "grid md:grid-cols-3 gap-8" >
            {
              benefits.map((benefit, index) => <div key={ index } className = "text-center" >
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4" >
              <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              < h3 className = "text-xl font-heading font-semibold mb-2" > { benefit.title } </h3>
              < p className = "text-muted-foreground" > { benefit.description } </p>
              </div>)
            }
              </div>
              </div>
              </section>

{/* CTA Section */ }
<section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground" >
  <div className="container text-center" >
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" > Ready to Get Started ? </h2>
      < p className = "text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto" >
        Join thousands of smart savers who are achieving their ownership goals with Albarka +
        </p>
        < div className = "flex flex-col sm:flex-row gap-4 justify-center" >
          <Link to="/catalog" >
            <Button variant="accent" size = "lg" className = "group" >
              Browse Products
                < ArrowRight className = "h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  </Link>
                  < Link to = "/login" >
                    <Button variant="outline" size = "lg" className = "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" >
                      Create Account
                        </Button>
                        </Link>
                        </div>
                        </div>
                        </section>

                        < Footer />
                        <FloatingChat />
                        </div>;
};
export default Home;